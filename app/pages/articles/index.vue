<template>
    <UContainer>
        <UPageHeader title="Articles"
            description="A collection of my writing on technical topics, including API documentation, software development, and DevOps." />
        <UPageSection>
            <UBlogPosts>
                <UBlogPost v-for="(post, index) in posts" :key="index" v-bind="post"
                    :date="post.date ? new Date(post.date) : undefined" :to="`${post.path}`"
                    :badge="post.tags ? post.tags[0] : undefined" />
            </UBlogPosts>
        </UPageSection>

    </UContainer>

</template>


<script setup lang="ts">

const { data: posts } = await useAsyncData('articles', () => {
    return queryCollection('articles').all()
})

</script>