// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
const isDev = process.env.NODE_ENV !== 'production';
const enableKeystaticAdmin = isDev || process.env.KEYSTATIC_ADMIN === 'true';

export default defineConfig({
  site: "https://techoxium.com",
  integrations: [
    mdx(),
    sitemap(),
    markdoc(),
    // Only include React + Keystatic admin in dev or when explicitly enabled.
    ...(enableKeystaticAdmin ? [react({ 
      include: ['**/keystatic/**'],
      experimentalReactChildren: true 
    }), keystatic()] : []),
  ],
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
      rollupOptions: {
        output: {
          manualChunks: {
            // Split large dependencies into separate chunks
            vendor: ['@astrojs/markdoc', '@astrojs/mdx'],
            keystatic: ['@keystatic/core', '@keystatic/astro'],
          },
        },
      },
    },
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  build: {
    inlineStylesheets: "never",
  },
});
