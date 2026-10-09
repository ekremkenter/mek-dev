// Index the site's WebMCP tools read (src/components/WebMCP.astro): posts with
// their listen/watch links, projects, profile, experience and talks. Fetched
// only when an agent calls a tool.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { cv } from "../lib/cv";
import { readingMinutes } from "../lib/reading-time";
import narrations from "../data/narration.json";

const site = "https://mek.dev";
const minutes = (seconds: number) => Math.max(1, Math.round(seconds / 60));

export const GET: APIRoute = async () => {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const projects = (await getCollection("projects", ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order,
  );
  const audio = narrations as Record<string, { src: string; seconds: number }>;

  const body = {
    site,
    author: cv.profile.name,
    posts: posts.map((p) => ({
      id: p.id,
      title: p.data.title,
      kind: p.data.kind,
      date: p.data.date.toISOString().slice(0, 10),
      description: p.data.description,
      url: `${site}/blog/${p.id}/`,
      markdown: `${site}/agent/${p.id}.md`,
      readingMinutes: readingMinutes(p.body),
      headings: [...(p.body ?? "").matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim()),
      ...(audio[p.id] && {
        listen: { url: audio[p.id].src, minutes: minutes(audio[p.id].seconds), voice: "AI clone of the author's voice" },
      }),
      ...(p.data.video && {
        watch: { url: `https://www.youtube.com/watch?v=${p.data.video.youtube}`, minutes: minutes(p.data.video.seconds) },
      }),
      ...(p.data.companion && { companion: p.data.companion.id }),
    })),
    projects: projects.map((p) => ({
      id: p.id,
      title: p.data.title,
      period: p.data.period,
      role: p.data.role,
      org: p.data.org,
      summary: p.data.summary,
      url: p.data.href ?? `${site}/projects/${p.id}/`,
    })),
    profile: {
      name: cv.profile.name,
      title: cv.profile.title,
      tagline: cv.profile.tagline,
      location: cv.profile.location,
      about: `${site}/about/`,
      cv: `${site}/cv/`,
      bookACall: cv.profile.booking,
      social: cv.profile.social,
      experience: cv.experience.map((e) => ({
        role: e.role,
        company: e.company,
        start: e.start,
        end: e.end,
        highlights: e.highlights,
      })),
      talks: cv.speaking
        .filter((s) => s.title)
        .map((s) => ({ title: s.title, kind: s.kind, event: s.event, location: s.location, date: s.date, essay: s.essay && `${site}${s.essay}/`, link: s.link ?? undefined })),
    },
  };
  return new Response(JSON.stringify(body), { headers: { "Content-Type": "application/json; charset=utf-8" } });
};
