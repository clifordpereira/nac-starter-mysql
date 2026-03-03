export default defineNuxtConfig({
  modules: ['nuxt-auto-crud', '@nuxthub/core'],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  hub: { db: 'mysql' },
  autoCrud: {
    statusFiltering: false,
  },
})
