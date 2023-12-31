export default {

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'vindeenclub',
        path: '/vindeenclub',
        component: resolve(__dirname, 'pages/vindeenclub.vue'),
        name: 'begeleiding',
        path: '/begeleiding',
        component: resolve(__dirname, 'pages/begeleiding.vue'),
        name: 'prijzen',
        path: '/prijzen',
        component: resolve(__dirname, 'pages/prijzen.vue'),
        name: 'overons',
        path: '/overons',
        component: resolve(__dirname, 'pages/overons.vue'),
        
      });
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gym Hackathon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
}
