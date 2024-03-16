// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      bodyAttrs: {
        class: 'nuxt-body',
      },
    },
  },
  server: {
    port: 3010, // default: 3000
    host: 'localhost' // default: localhost
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@fullpage/nuxt-fullpage',
    '@nuxt/image',
    '@nuxtjs/device',
    '@vueuse/nuxt'
  ],
  css: [
    '~/assets/scss/main.scss'
  ],
  image: {
    // dir: 'assets/images'
  }
})
