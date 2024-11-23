// src/content/blog.ts
import { defineCollection, z } from 'astro:content';

// Define the 'blog' collection
export const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // Ensures dates are coerced from strings
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});