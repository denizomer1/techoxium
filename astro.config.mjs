// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: "https://techoxium.com",
  integrations: [
    sitemap(), 
    markdoc({
      allowHTML: true
    })
  ],
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough",
    platformProxy: {
      enabled: true
    }
  }),
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  build: {
    inlineStylesheets: "never",
  },
});