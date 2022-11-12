export default {
  ssr: true,
  target: 'static',

  head: {
    title: 'alperencelik.com',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['swiper/swiper-bundle.min.css', '~/assets/sass/app.scss'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['primevue/nuxt', '@nuxtjs/axios', '@nuxtjs/svg-sprite'],
  axios: {
    baseURL: '/',
  },

  storybook: {
    port: 4000,
    parameters: {
      chromatic: { disable: true },
    },
  },

  build: {
    transpile: ['primevue'],
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: 'encoding',
        },
      ]
    },
  },
}
