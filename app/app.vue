<template>
  <UApp>
    <UHeader>
      <template #title>
        CGB
      </template>

      <UNavigationMenu :items="navItems" />

      <template #right>
        <UColorModeButton />

        <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
          <UButton color="neutral" variant="ghost" to="https://github.com/foss-scribe" target="_blank"
            icon="i-simple-icons-github" aria-label="GitHub" />
        </UTooltip>
      </template>

      <template #body>
        <UNavigationMenu :items="navItems" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator icon="i-lucide-pencil" type="dashed" class="h-px" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}, Chris Gardiner-Bill.<br />All rights reserved.
        </p>
      </template>

      <!-- <UNavigationMenu :items="items" variant="link" /> -->

      <template #right>
        <UButton icon="i-simple-icons-linkedin" color="neutral" variant="ghost"
          to="https://www.linkedin.com/in/chris-gardiner-bill/" target="_blank" aria-label="LinkedIn" />
        <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/foss-scribe"
          target="_blank" aria-label="GitHub" />
      </template>
    </UFooter>
  </UApp>
</template>


<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()


const navItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/'
  },
  {
    label: 'Projects',
    to: '/projects',
    active: route.path.startsWith('/projects')
  },
  {
    label: 'Writing',
    to: '/writing',
    active: route.path.startsWith('/writing')
  },
  {
    label: 'About',
    to: '/about',
    active: route.path.startsWith('/about')
  },
  {
    label: 'Resume',
    to: '/resume',
    active: route.path.startsWith('/resume')
  },
  {
    label: 'Contact',
    to: '/contact',
    active: route.path.startsWith('/contact')
  },
  
])



// const footerItems: NavigationMenuItem[] = [{
//   label: 'Figma Kit',
//   to: 'https://go.nuxt.com/figma-ui',
//   target: '_blank'
// }, {
//   label: 'Playground',
//   to: 'https://stackblitz.com/edit/nuxt-ui',
//   target: '_blank'
// }, {
//   label: 'Releases',
//   to: 'https://github.com/nuxt/ui/releases',
//   target: '_blank'
// }]
</script>
