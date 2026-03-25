// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-umami',
  ],
  css: ['~/assets/css/main.css'],
  umami: {
    id: "b6af0ace-c050-49d6-9bcb-aa9649552dbc",
    host: "https://cloud.umami.is",
    autoTrack: true,
    ignoreLocalhost: true
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'https://chrisgb.dev',
    }
  },
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'cgbdev',
            database_id: '9a965a2a-f4c4-4bc5-a7a4-971cb851d2ac'
          }
        ]
      },
    },
  }
})