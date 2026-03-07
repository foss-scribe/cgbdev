import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
        type: 'page',
        source: '*.md'}),
    articles: defineCollection({
        type: 'page',
         source: 'articles/**/*.md'})
    },
})