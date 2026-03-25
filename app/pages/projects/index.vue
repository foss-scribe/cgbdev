<template>
    <UContainer>
        <UPage>
            <UPageHeader title="Projects"
                description="A collection of my projects (open source, professional, and personal) that demonstrate my skills and experience in technical writing, software development, DevOps, and API design and integration.">
            </UPageHeader>

            <UPageBody>
                <UBlogPosts>
                    <UBlogPost v-for="(project, index) in projects" :key="index" v-bind="project"
                        :date="project.date ? new Date(project.date) : undefined" :to="`${project.path}`"
                        :badge="project.tags ? project.tags[0] : undefined" :title="project.title"
                        :description="project.description" :icon="project.icon" :image="project.image" />
                </UBlogPosts>
            </UPageBody>
        </UPage>
    </UContainer>
</template>

<script setup lang="ts">

const { data: projects } = await useAsyncData('projects', () => {
    return queryCollection('projects').all()
})

</script>