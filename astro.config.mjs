// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";
import rehypeWrapTables from "./src/lib/rehype-wrap-tables.mjs";
import { readdirSync, readFileSync } from "node:fs";

// lastmod for posts in the sitemap: the post's `updated` date, else its `date`.
// Other pages get none rather than a build date that changes on every deploy.
const postDates = Object.fromEntries(
  readdirSync("./src/content/blog")
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const fm = readFileSync(`./src/content/blog/${f}`, "utf8").split(/^---$/m)[1] ?? "";
      const pick = (key) => fm.match(new RegExp(`^${key}:\\s*"?([0-9-]+)"?`, "m"))?.[1];
      return [`https://mek.dev/blog/${f.replace(/\.md$/, "")}/`, pick("updated") ?? pick("date")];
    })
    .filter(([, date]) => date),
);

export default defineConfig({
  site: "https://mek.dev",
  trailingSlash: "always",
  // Astro 7 defaults to "jsx", which drops the space between inline
  // elements on separate lines (e.g. "on the<a>App Store</a>").
  compressHTML: true,
  integrations: [
    sitemap({
      serialize: (item) => (postDates[item.url] ? { ...item, lastmod: postDates[item.url] } : item),
    }),
  ],
  markdown: {
    // Astro 7 defaults to the Satteri processor; stay on unified so the
    // rehype plugin keeps running and markdown output stays the same.
    processor: unified({
      rehypePlugins: [rehypeWrapTables],
    }),
  },
  redirects: {
    "/motor": "/motor/rks-freccia-150",
    "/evrad": "/projects/evrad",
    "/evrad/privacy.html": "/projects/evrad/privacy",
    "/decathlon-hr": "https://kesfet.decathlon.com.tr/",
    "/blog/the-order-is-not-the-prize": "/blog/the-prize-comes-after-the-order",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
