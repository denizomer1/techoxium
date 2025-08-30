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
const enableReact = isDev || process.env.ENABLE_REACT === 'true';

export default defineConfig({
  site: "https://techoxium.com",
  integrations: [
    mdx(),
    sitemap(),
    markdoc(),
    // React for Keystatic admin routes (conditionally enabled)
    ...(enableReact ? [react({
      include: ['**/keystatic/**'],
      exclude: ['**/*.server.*', '**/*.server.tsx', '**/*.server.jsx'],
      experimentalReactChildren: true
    })] : []),
    // Include Keystatic
    keystatic(),
  ],
  vite: {
    ssr: {
      noExternal: ['@keystatic/astro', '@keystatic/core']
    },
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
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  build: {
    inlineStylesheets: "never",
  },
});
