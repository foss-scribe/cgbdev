<template>
    <UContainer v-if="page">
    <UPageHeader :title="page.title" :description="page.description">
      <!-- <template #headline>
        <UBadge v-for="tag in page.tags" :key="tag" variant="subtle">{{ tag }}</UBadge>
        <span class="text-muted">&middot;</span>
        <time class="text-muted">{{ new Date(page.date).toLocaleDateString('en', {
          year: 'numeric', month: 'short', day:
            'numeric'
        }) }}</time>
      </template> -->

    </UPageHeader>
    <UPage>
      <UPageBody>
        <ContentRenderer :value="page" />
      </UPageBody>
    </UPage>
  </UContainer>
</template>
<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {

  return queryCollection('examples').path(route.path).first()
})
</script>