// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://techoxium.denizomer10.workers.dev",
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    build: {
      minify: 'esbuild',
    },
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },
  build: {
    inlineStylesheets: "never",
  },
});
