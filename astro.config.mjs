// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

const isProduction = process.env.NODE_ENV === 'production';
const isCloudflare = process.env.CLOUDFLARE_BUILD === 'true';

// https://astro.build/config
export default defineConfig({
  site: "https://techoxium.com",
  integrations: [
    sitemap(), 
    markdoc({
      allowHTML: true
    }), 
    // Include React and Keystatic unless it's a production Cloudflare build
    ...(!(isProduction && isCloudflare) ? [react(), keystatic()] : [])
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