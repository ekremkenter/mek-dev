// The site's agent tools, defined once and served three ways: WebMCP in the
// visitor's browser (src/components/WebMCP.astro), the MCP server at /mcp and
// the chat on /ask (both in worker/index.ts). All read-only; they read the
// build-time index /agent.json and /agent/<post id>.md through a Source.

export type Post = {
  id: string;
  title: string;
  kind: string;
  date: string;
  description?: string;
  url: string;
  markdown: string;
  readingMinutes: number;
  headings: string[];
  text: string;
  listen?: { url: string; minutes: number };
  watch?: { url: string; minutes: number };
};

export type Index = {
  posts: Post[];
  projects: {
    id: string;
    title: string;
    summary: string;
    url: string;
    org: string;
    role: string;
    period: string;
    stack: string[];
    text: string;
  }[];
  profile: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    about: string;
    cv: string;
    bookACall: string;
    social: Record<string, string>;
    experience: { role: string; company: string; start: string; end: string; highlights?: string[] }[];
    talks: { title?: string; kind?: string; event?: string; location?: string; date?: string; essay?: string; link?: string }[];
  };
};

export type Source = {
  index(): Promise<Index>;
  // a post as Markdown, or null if it can't be loaded
  post(id: string): Promise<string | null>;
};

export type Tool = {
  name: string;
  title: string;
  description: string;
  inputSchema: { type: "object"; properties: Record<string, unknown>; required?: string[] };
  run(args: Record<string, any>, source: Source): Promise<string>;
};

const json = (value: unknown) => JSON.stringify(value, null, 1);

const summary = (p: Post) => ({
  id: p.id,
  title: p.title,
  kind: p.kind,
  date: p.date,
  description: p.description,
  url: p.url,
  readingMinutes: p.readingMinutes,
  ...(p.listen && { listen: p.listen }),
  ...(p.watch && { watch: p.watch }),
});

// ---------------------------------------------------------------- search
// Passage search: every post, project page, role and talk is cut into
// passages, scored with BM25, and the best ones are returned with their text,
// so a caller can answer from the result without opening each page.

type Passage = { type: string; id?: string; title: string; url: string; section?: string; text: string };

const STOP = new Set(
  "a an and are as at be been by can could did do does for from had has have he her him his how i if in into is it its me my of on or our she should so than that the their them then there these they this those to was we were what when where which who why will with would you your about tell say says said".split(
    " ",
  ),
);
const words = (text: string) => text.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);
// "tools" and "tool" are the same word to a searcher
const stem = (w: string) => (w.length > 3 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w);
const plain = (markdown: string) =>
  markdown
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`#>]/g, "")
    .trim();

function passagesOf(index: Index): Passage[] {
  const out: Passage[] = [];
  // paragraphs of one section, joined until they make a passage worth reading
  const cut = (base: Omit<Passage, "text">, paragraphs: string[]) => {
    let text = "";
    for (const p of paragraphs) {
      text = text ? `${text} ${p}` : p;
      if (text.length >= 450) {
        out.push({ ...base, text });
        text = "";
      }
    }
    if (text) out.push({ ...base, text });
  };

  for (const post of index.posts) {
    const base = { type: post.kind, id: post.id, title: post.title, url: post.url };
    if (post.description) out.push({ ...base, text: post.description });
    const headings = new Set(post.headings.map((h) => plain(h).replace(/[.!?:]$/, "")));
    let section: string | undefined;
    let pending: string[] = [];
    // the first paragraph is the title, which every passage already carries
    for (const paragraph of post.text.split(/\n{2,}/).slice(1)) {
      const heading = paragraph.replace(/[.!?:]$/, "");
      if (headings.has(heading)) {
        cut({ ...base, section }, pending);
        pending = [];
        section = heading;
      } else pending.push(paragraph);
    }
    cut({ ...base, section }, pending);
  }

  for (const project of index.projects) {
    const base = { type: "project", id: project.id, title: project.title, url: project.url };
    out.push({ ...base, text: `${project.summary} ${project.role}, ${project.org}, ${project.period}. Stack: ${project.stack.join(", ")}.` });
    cut(base, project.text.split(/\n{2,}/).map(plain).filter(Boolean));
  }

  const { profile } = index;
  const about = profile.about;
  if (profile.tagline)
    out.push({ type: "profile", title: `About ${profile.name}`, url: about, text: `${profile.title}. ${profile.tagline} Based in ${profile.location}.` });
  for (const job of profile.experience)
    out.push({
      type: "experience",
      title: `${job.role}, ${job.company}`,
      url: profile.cv,
      text: `${job.role} at ${job.company}, ${job.start} to ${job.end}. ${(job.highlights ?? []).join(" ")}`,
    });
  for (const talk of profile.talks)
    if (talk.title)
      out.push({
        type: "talk",
        title: talk.title,
        url: talk.essay ?? talk.link ?? about,
        text: [talk.kind, `"${talk.title}"`, talk.event, talk.location, talk.date].filter(Boolean).join(", "),
      });
  return out;
}

// passages and their word counts are worked out once per index
const prepared = new WeakMap<Index, { passage: Passage; counts: Map<string, number>; length: number; title: Set<string> }[]>();

export function search(index: Index, query: string, limit = 6) {
  let docs = prepared.get(index);
  if (!docs) {
    docs = passagesOf(index).map((passage) => {
      const counts = new Map<string, number>();
      const all = words(`${passage.title} ${passage.section ?? ""} ${passage.text}`).map(stem);
      for (const w of all) counts.set(w, (counts.get(w) ?? 0) + 1);
      return { passage, counts, length: all.length, title: new Set(words(`${passage.title} ${passage.section ?? ""}`).map(stem)) };
    });
    prepared.set(index, docs);
  }
  const all = words(query);
  const content = all.filter((w) => !STOP.has(w));
  const terms = [...new Set((content.length ? content : all).map(stem))];
  if (!terms.length) return [];

  const average = docs.reduce((n, d) => n + d.length, 0) / docs.length;
  const phrase = content.length > 1 ? content.join(" ") : "";
  const scored = docs
    .map((doc) => {
      let score = 0;
      for (const term of terms) {
        const tf = doc.counts.get(term) ?? 0;
        if (!tf) continue;
        const df = docs!.reduce((n, d) => n + (d.counts.has(term) ? 1 : 0), 0);
        const idf = Math.log(1 + (docs!.length - df + 0.5) / (df + 0.5));
        score += idf * ((tf * 2.2) / (tf + 1.2 * (0.25 + 0.75 * (doc.length / average))));
        // a word in the page or section title says what the passage is about
        if (doc.title.has(term)) score += idf * 0.6;
      }
      // the words together, in order, beat the same words scattered
      if (phrase && doc.passage.text.toLowerCase().includes(phrase)) score *= 1.5;
      return { doc, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  // at most three passages from one page, so one long post can't crowd out the rest
  const perPage = new Map<string, number>();
  const hits = [];
  for (const { doc } of scored) {
    const key = doc.passage.url + doc.passage.title;
    const seen = perPage.get(key) ?? 0;
    if (seen >= 3) continue;
    perPage.set(key, seen + 1);
    const { text, ...rest } = doc.passage;
    hits.push({ ...rest, passage: text.length > 900 ? `${text.slice(0, 900)}…` : text });
    if (hits.length >= limit) break;
  }
  return hits;
}

export const tools: Tool[] = [
  {
    name: "list_posts",
    title: "List posts",
    description:
      "List Mustafa Ekrem Kenter's writing on mek.dev, newest first: essays on agentic AI, MCP and airline retailing, research reports and notes. Each item has a summary, reading time and, where available, a narrated audio version and a video.",
    inputSchema: {
      type: "object",
      properties: { kind: { type: "string", enum: ["essay", "report", "note"], description: "Only this kind of post." } },
    },
    async run({ kind }, source) {
      const { posts } = await source.index();
      return json(posts.filter((p) => !kind || p.kind === kind).map(summary));
    },
  },
  {
    name: "get_post",
    title: "Read a post or project",
    description:
      "Get the full text of one post, or of a project page, as Markdown, by its id from list_posts or search_site. Figures are described in text.",
    inputSchema: {
      type: "object",
      properties: {
        id: { type: "string", description: "Post or project id, for example the-prize-comes-after-the-order or tkassistant." },
      },
      required: ["id"],
    },
    async run({ id }, source) {
      const { posts, projects } = await source.index();
      const post = posts.find((p) => p.id === id);
      if (post) return (await source.post(post.id)) ?? `Could not load the post "${id}".`;
      const project = projects.find((p) => p.id === id);
      if (project)
        return [
          `# ${project.title}`,
          "",
          `${project.role}, ${project.org}, ${project.period}. ${project.url}`,
          `Stack: ${project.stack.join(", ")}`,
          "",
          project.summary,
          "",
          project.text,
        ].join("\n");
      return `No post or project with id "${id}". Use list_posts or search_site to find the ids.`;
    },
  },
  {
    name: "search_site",
    title: "Search the site",
    description:
      "Search everything on mek.dev by keywords: posts (full text), project pages, experience and talks. Returns the passages that match best, each with its page title, link and id. Use get_post with an id for the full text.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "Keywords, for example 'MCP servicing NDC'." } },
      required: ["query"],
    },
    async run({ query }, source) {
      const hits = search(await source.index(), String(query ?? ""));
      return hits.length ? json(hits) : `Nothing on mek.dev matches "${query}".`;
    },
  },
  {
    name: "get_profile",
    title: "Get profile",
    description:
      "Get Mustafa Ekrem Kenter's profile: current role, location, experience with highlights, talks, and links to his about page, CV and social profiles.",
    inputSchema: { type: "object", properties: {} },
    async run(_, source) {
      return json((await source.index()).profile);
    },
  },
  {
    name: "book_a_call",
    title: "Get the booking link",
    description:
      "Get the link where someone can book a 15-minute call with Mustafa Ekrem Kenter (advisory conversations and speaking invitations on agentic AI, MCP and airline retailing). Returns the link only; booking happens on that page.",
    inputSchema: { type: "object", properties: {} },
    async run(_, source) {
      return json({
        url: (await source.index()).profile.bookACall,
        note: "Opens a cal.com booking page. Nothing is booked until the visitor confirms there.",
      });
    },
  },
];
