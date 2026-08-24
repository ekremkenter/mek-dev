import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    toc: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    period: z.string(),
    role: z.string(),
    org: z.string(),
    stack: z.array(z.string()),
    summary: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    // when set, the project card links here instead of a generated detail page
    href: z.string().optional(),
  }),
});

export const collections = { blog, projects };
