import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  title: z.string().default('Yeni Blog Yazısı (TR)'),
  description: z.string().optional(),
  // Transform string or Date to Date object
  date: z.union([z.string(), z.date()]).transform((val) => 
    val instanceof Date ? val : new Date(val)
  ),
  updatedDate: z.union([z.string(), z.date()]).transform((val) => 
    val instanceof Date ? val : new Date(val)
  ).optional(),
  // Optional tags/categories as an array of strings
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
  layout: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "*.md" }),
  schema: blogSchema,
});

export const collections = { 
  blog,
};
