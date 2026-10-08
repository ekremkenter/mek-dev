import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    toc: z.boolean().default(false),
    // "report" = long-form research with figures, tables and sources
    kind: z.enum(["essay", "note", "report"]).default("essay"),
    talk: z.string().optional(),
    draft: z.boolean().default(false),
    updated: z.coerce.date().optional(),
    // id of a paired post, e.g. an essay and the report behind it
    companion: reference("blog").optional(),
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
    draft: z.boolean().default(false),
    // when set, the project card links here instead of a generated detail page
    href: z.string().optional(),
  }),
});

export const collections = { blog, projects };
