import { defineCollection, z } from 'astro:content';

// Define the 'blog' collection
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // Ensures dates are coerced from strings
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// Define the 'projects' collection
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

// Export all collections
export const collections = { blog, projects };
