// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://techoxium.com",
  integrations: [
    sitemap(),
    mdx(),
  ],
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  image: {
    service: {
      entrypoint: "astro/assets/services/squoosh",
    },
  },
  build: {
    inlineStylesheets: "never",
  },
});
