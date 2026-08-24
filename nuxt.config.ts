// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    fsApiKey: process.env.FS_API_KEY,
    fsApiBaseUrl: process.env.FS_API_BASE_URL
  }
})
