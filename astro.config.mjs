// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import markdoc from "@astrojs/markdoc";
import preact from "@astrojs/preact";
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  site: "https://techoxium.com",
  integrations: [
    sitemap(),
    markdoc({
      allowHTML: true,
    }),
    preact({ compat: true }),
    keystatic(),
  ],
  vite: {
    ssr: {
      noExternal: ['@keystatic/astro', '@keystatic/core']
    },
    define: {
      global: 'globalThis',
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
