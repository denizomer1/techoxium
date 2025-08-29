// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://techoxium.com",
  integrations: [mdx(), sitemap(), react(), markdoc(), keystatic()],
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
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
