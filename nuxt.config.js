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
    script: [
      {
        href: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js',
      },
      {
        href: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js',
      },
    ],
  },

  css: ['swiper/swiper-bundle.min.css', '~/assets/sass/app.scss'],

  components: {},

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['primevue/nuxt', '@nuxtjs/axios', '@nuxtjs/svg-sprite'],
  axios: {
    baseURL: '/',
  },
  tailwindcss: {
    cssPath: '~/assets/sass/app.scss',
    exposeConfig: true,
  },

  build: {
    transpile: ['primevue', 'gsap'],
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
