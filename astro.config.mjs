// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mek.dev",
  trailingSlash: "always",
  integrations: [sitemap()],
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
