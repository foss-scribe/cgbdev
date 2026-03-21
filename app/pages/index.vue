<template>

  <UPageHero 
    title="Chris Gardiner-Bill"
    description="Building tools and documentation that help developers integrate APIs and AI systems."
    :links="links" />

  <USeparator />

  <UPageSection title="What I do"
    description="I specialise in technical writing, software development, and DevOps, with a focus on API documentation, web development, and cloud infrastructure.">
    <UPageGrid>
      <UPageCard 
        title="Technical Writing"
        description="API documentation, user guides, and tutorials. Editing, style guides, content strategies, and training."
        icon="i-lucide-pencil"
         />
      <UPageCard 
        title="Development"
        description="Full-stack web developer with Python, JavaScript/Typescript and modern web technologies including Vue, React, and Node."
        icon="i-lucide-code" />
      <UPageCard 
        title="DevOps &amp; Infrastructure"
        description="Automated deployment to cloud services (AWS, Cloudflare, GCP), virtual private servers, Docker and CI/CD pipelines."
        icon="i-lucide-server" />
    </UPageGrid>
  </UPageSection>

  <USeparator />

  <UPageSection 
    title="What I build"
    description="I build tools and documentation that help developers integrate APIs and AI systems, including:"
    :features="buildFeatures" />

</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'Projects',
    to: '/projects',
    icon: 'i-lucide-code',
    color: 'neutral',
    variant: 'subtle',
  },
  {
    label: 'Writing',
    to: '/writing',
    color: 'neutral',
    variant: 'subtle',
    icon: 'i-lucide-pencil'
  },
  {
    label: 'Contact',
    to: '/contact',
    color: 'neutral',
    variant: 'subtle',
    icon: 'i-lucide-mail'
  }
])

const buildFeatures = ref<PageFeatureProps[]>([
  {
    title: 'Documentation systems',
    description: 'Docs-as-code documentation systems, static site generators, and documentation frameworks.',
    icon: 'i-lucide-pencil',
    // to: '/docs/getting-started/integrations/icons'
  },
  {
    title: 'API integration tooling',
    description: 'Tools and libraries for integrating with APIs, including SDKs, client libraries, and automation scripts.',
    icon: 'i-lucide-plug',
    // to: '/docs/getting-started/integrations/fonts'
  },
  {
    title: 'AI-powered documentation assistants',
    description: 'Intelligent assistants that help generate, maintain, index, and improve documentation using AI technologies.',
    icon: 'i-lucide-bot',
    // to: '/docs/getting-started/integrations/color-mode'
  },
])

</script>