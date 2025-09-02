// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import markdoc from "@astrojs/markdoc";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://techoxium.com",
  integrations: [
    sitemap(),
    markdoc({
      allowHTML: true,
    }),
    preact({ compat: true }),
  ],
  vite: {
    ssr: {
      noExternal: ['@keystatic/astro', '@keystatic/core']
    },
  },
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: "server",
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: "astro/assets/services/squoosh",
    },
  },
  build: {
    inlineStylesheets: "never",
  },
});
