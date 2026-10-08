// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";
import rehypeWrapTables from "./src/lib/rehype-wrap-tables.mjs";

export default defineConfig({
  site: "https://mek.dev",
  trailingSlash: "always",
  // Astro 7 defaults to "jsx", which drops the space between inline
  // elements on separate lines (e.g. "on the<a>App Store</a>").
  compressHTML: true,
  integrations: [sitemap()],
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
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
