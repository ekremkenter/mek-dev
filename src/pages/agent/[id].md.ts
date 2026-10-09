// A post as plain Markdown for agents (the WebMCP get_post tool): inline SVG
// figures become their titles and captions, other HTML is dropped.
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

export const getStaticPaths: GetStaticPaths = async () =>
  (await getCollection("blog", ({ data }) => !data.draft)).map((post) => ({ params: { id: post.id }, props: { post } }));

export const GET: APIRoute = ({ props }) => {
  const post = props.post as CollectionEntry<"blog">;
  const body = (post.body ?? "")
    .replace(/<figure>[\s\S]*?<\/figure>/g, (f) => {
      const title = f.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] ?? "";
      const caption = (f.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1] ?? "").replace(/<[^>]+>/g, "");
      return `> Figure: ${title}${caption ? `. ${caption}` : ""}`;
    })
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const head = [
    `# ${post.data.title}`,
    "",
    post.data.description ? `${post.data.description}\n` : "",
    `By Mustafa Ekrem Kenter, ${post.data.date.toISOString().slice(0, 10)}. https://mek.dev/blog/${post.id}/`,
    "",
  ].join("\n");
  return new Response(`${head}\n${body}\n`, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
