<template>
    <div v-if="page" class="prose lg:prose-xl mx-auto p-6">
        <h1>{{ page.title }}</h1>
        <ContentRenderer :value="page" />
        
    </div>
</template>
<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  if (route.path.startsWith('/posts')) {
    return queryCollection('content').path(route.path).first()
  } else {
    return queryCollection('content').path(route.path).first()
  }
})
</script>