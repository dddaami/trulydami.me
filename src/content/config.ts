import { defineCollection, z } from "astro:content";

export const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()).default([]).optional(),
		date: z.date(),
		description: z.string(),
		keywords: z.string(),
		draft: z.boolean().default(false),
	}),
});

export const projectCollection = defineCollection({
	type: "data",
	schema: z.array(
		z.object({
			name: z.string().regex(/^[A-Za-z0-9-\.\s]+$/),
			description: z.string(),
			website_url: z.string().url().optional().nullable(),
			github_url: z.string().url().optional().nullable(),
			image: z.string().regex(/\.(png|jpg|jpeg|gif|webp)$/),
			tags: z.array(z.string().optional()),
			status: z.enum([
				"active",
				"unmaintained",
				"archived",
				"private",
				"deprecated",
				"wip",
			]),
		}),
	),
});

export const bookNoteCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string().regex(/^[A-Za-z0-9-\.\s]+$/),
		author: z.string(),
		description: z.string(),
		dateRead: z.date(),
		url: z.string().url().optional().nullable(),
		cover: z.string().regex(/\.(png|jpg|jpeg|gif|webp)$/),
		category: z.enum([
			"money",
			"health",
			"career",
			"leadership",
			"personal development",
			"productivity",
			"philosophy",
			"programming",
			"spiritual",
			"software engineering",
		]),
	}),
});

export const collections = {
	blog: blogCollection,
	projects: projectCollection,
	bookNotes: bookNoteCollection,
};
