// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo','@nuxtjs/tailwindcss','@pinia/nuxt','nuxt-icon'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:4000/'
      }
    },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
})
