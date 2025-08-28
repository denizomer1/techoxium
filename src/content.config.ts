import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Optional tags/categories as an array of strings
    tags: z.array(z.string()).optional(),
  heroImage: z.string().optional(),
});

const blog = defineCollection({
  // Load Turkish blog posts (root level)
  loader: glob({ base: "./src/content/blog", pattern: "*.{md,mdx}" }),
  schema: blogSchema,
});

const blogEn = defineCollection({
  // Load English blog posts
  loader: glob({ base: "./src/content/blog/en", pattern: "*.{md,mdx}" }),
  schema: blogSchema,
});

export const collections = { 
  blog,
  blogEn 
};
