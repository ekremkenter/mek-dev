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
  profile: { bookACall: string; talks: { title?: string; event?: string; date?: string }[] } & Record<string, unknown>;
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
      "Search mek.dev's posts (full text), projects and talks by keywords. Returns the best matches with links and, for posts, the passage that matched.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "Keywords, for example 'MCP servicing NDC'." } },
      required: ["query"],
    },
    async run({ query }, source) {
      const { posts, projects, profile } = await source.index();
      const terms = String(query ?? "")
        .toLowerCase()
        .split(/[^\p{L}\p{N}]+/u)
        .filter((t) => t.length > 1);
      const score = (text: string) => {
        const hay = text.toLowerCase();
        return terms.reduce((n, t) => n + (hay.includes(t) ? 1 : 0), 0);
      };
      // a sentence of context around the first term found in the body
      const snippet = (text: string) => {
        const hay = text.toLowerCase();
        const at = Math.min(...terms.map((t) => hay.indexOf(t)).filter((i) => i >= 0));
        if (!Number.isFinite(at)) return undefined;
        const stop = text.lastIndexOf(". ", at);
        const from = stop < 0 ? 0 : stop + 2;
        return text.slice(from, from + 240).trim();
      };
      const hits = [
        ...posts.map((p) => ({
          type: p.kind,
          // title and summary count more than a mention in the body
          score: 3 * score(`${p.title} ${p.description ?? ""}`) + 2 * score(p.headings.join(" ")) + score(p.text),
          ...summary(p),
          match: snippet(p.text),
        })),
        ...projects.map(({ text, ...p }) => ({
          type: "project",
          score: 3 * score(`${p.title} ${p.summary}`) + score(`${p.stack.join(" ")} ${text}`),
          ...p,
        })),
        ...profile.talks.map((t) => ({ type: "talk", score: score(`${t.title} ${t.event}`), ...t })),
      ]
        .filter((h) => h.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
        .map(({ score, ...h }) => h);
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
