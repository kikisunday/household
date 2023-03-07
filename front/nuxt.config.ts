// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  css: [
    'vuetify/lib/styles/main.sass',
    'mdi/css/materialdesignicons.min.css',
    'assets/style.scss',
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
});
