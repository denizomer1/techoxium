// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: "https://techoxium.com",
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }), 
    markdoc({
      allowHTML: true
    })
  ],
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare",
    platformProxy: {
      enabled: true
    }
  }),
  image: {
    service: {
      entrypoint: "astro/assets/services/cloudflare"
    }
  },
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      minify: true,
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
          }
        }
      }
    },
    ssr: {
      external: ["node:fs/promises", "node:path", "node:url", "node:crypto"]
    }
  }
});