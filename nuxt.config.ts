// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      bodyAttrs: {
        class: "nuxt-body",
      },
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['noindex'].includes(tag),
    },
  },
  server: {
    port: 3010, // default: 3000
    host: "localhost", // default: localhost
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    "@fullpage/nuxt-fullpage",
    "@nuxt/image",
    "@nuxtjs/device",
    "@vueuse/nuxt",
    '@nuxt/ui'
  ],
  css: ["~/assets/scss/main.scss"],
  image: {
    // dir: 'assets/images'
  },
});
