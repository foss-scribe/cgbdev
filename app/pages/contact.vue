<template>
    <UPageSection title="Contact me"
        description="Feel free to reach out if you'd like to work together, have questions about my projects, or just want to say hi! You can find me on LinkedIn and GitHub, or use the contact form below."
        icon="i-lucide-mail" :links="links">

        <ContactForm />
    </UPageSection>


</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
    {
        label: 'LinkedIn',
        to: 'https://www.linkedin.com/in/chris-gardiner-bill/',
        icon: 'i-lucide-linkedin',
        color: 'neutral'
    },
    {
        label: 'GitHub',
        to: 'https://github.com/foss-scribe',
        icon: 'i-lucide-github',
        color: 'neutral'
    }
])
</script>