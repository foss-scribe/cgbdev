import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '*.md'
        }),
        articles: defineCollection({
            type: 'page',
            source: 'articles/**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string().optional(),
                date: z.string().transform((str) => new Date(str)),
                tags: z.array(z.string()).optional(),
            })
        }),
        examples: defineCollection({
            type: 'page',
            source: 'examples/**/*.md'
        }),
        projects: defineCollection({
            type: 'page',
            source: 'projects/**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                stack: z.array(),
                github: z.string(),
                demo: z.string(),
                image: z.string()
            })
        })
    },
})