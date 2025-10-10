import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})