import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  title: z.string().default('Yeni Blog Yazısı (TR)'),
  description: z.string().optional(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Optional tags/categories as an array of strings
    tags: z.array(z.string()).optional(),
  heroImage: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/tr", pattern: "*.{md,mdx,mdoc}" }),
  schema: blogSchema,
});

const blogEn = defineCollection({
  loader: glob({ base: "./src/content/en", pattern: "*.{md,mdx,mdoc}" }),
  schema: blogSchema,
});

export const collections = { 
  blog,
  blogEn 
};
