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
        })
    },
})