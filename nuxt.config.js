export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    imageUrl:
      process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : '',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Srab's TV",
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'XXXX' },
      { hid: 'og:title', name: 'og:title', content: 'XXXX' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'XXXX' },
      { hid: 'og:locale', name: 'og:locale', content: 'fr' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `${process.env.WEBSITE_URL}/preview.png`,
      },
      { name: 'msapplication-TileColor', content: '#282F33' },
      { name: 'theme-color', content: '#FFCB1C' },
      {
        name: 'twitter:card',
        content: '',
      },
      { name: 'twitter:site', content: '@' },
      { name: 'twitter:creator', content: '@' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/poppins.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'vue-scrollto/nuxt',
    '@nuxtjs/strapi',
  ],

  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true,
  },

  colorMode: {
    classSuffix: '',
  },

  strapi: {
    entities: ['srabs'],
  },

  sitemap: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        hostname: process.env.WEBSITE_URL || 'http://localhost:3000',
        path: '/sitemap.xml',
        cacheTime: 1000 * 60 * 60 * 2,
        trailingSlash: true,
        gzip: true,
        defaults: {
          lastmod: new Date(),
        },
      }
    }
    return false
  },

  robots: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        Sitemap: `${process.env.WEBSITE_URL}/sitemap.xml`,
      }
    }
    return {
      Disallow: '/',
    }
  },

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
