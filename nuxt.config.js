const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/panel/' : '/';
const fs = require('fs');
const path = require('path');
export default {
  serverMiddleware: ['~/server.js'],
  router: {
    linkExactActiveClass: 'active',
    base: routerBase
  },
  head: {
    title: 'كفاحي',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description', content: 'هي منصة غير ربحية هدفها دعم القضية الفلسطينية عن طريق توليد هاشتاجات ونصوص مشفرة بطريقة لاتتبعها خوارزميات السوشل ميديا حتى لاتتمكن من حذفها' },
      { name: 'og:site_name', content: 'كفاحي : لتشفير النصوص وتوليد الهاشتاج' },
      // { name: 'og:image', content: 'https://cdn.bitwave.tv/static/img/Bitwave_Banner.jpg', hid: 'og:image' },
      // https://cdn.bitwave.tv/static/img/BitWave2.sm.jpg // old image
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Alexandria:wght@100;200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:wght@700&display=swap"
      }

    ],
    script: [
      { src: '/plugins/jquery/jquery.min.js', body: true },
      { src: '/plugins/jquery-ui/jquery-ui.min.js', body: true },
      { src: '/plugins/jqvmap/jquery.vmap.min.js', body: true },
      { src: '/plugins/jqvmap/maps/jquery.vmap.usa.js', body: true },
      { src: '/plugins/jquery-knob/jquery.knob.min.js', body: true },
      { src: '/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js', body: true },
      { src: '/plugins/datatables/jquery.dataTables.min.js', body: true },
      // { src: '/dist/js/demo.js', body: true },
    ],
  },
  loading: { color: '#fff' },

  plugins: [
    { src: '~/plugins/main.js', mode: 'client', },
    { src: '~/plugins/hash.js', mode: 'client', },
  ],
  components: true,
  buildModules: [
    // '@nuxtjs/pwa',
    '@nuxt/postcss8',
    '@nuxt/image',
    '@nuxtjs/axios',
    '@nuxtjs/device',
    '@nuxtjs/moment',
    '@nuxtjs/google-analytics',
    '@nuxtjs/color-mode'
  ],
  pwa: {
    workbox: {
      // workboxExtensions: '@/plugins/sw.js',
      // enabled: true, //should be off actually per workbox docs due to complications when used in prod
      importScripts: [
        '/offline.js',
      ],
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: '/.*',
          handler: 'networkFirst',
          method: 'GET',
          strategyOptions: {
            cacheExpiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 1, // 1 day
              purgeOnQuotaError: true,
            }
          },
        },
        {
          urlPattern: '^http?:\/\/localhost/([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)',
          handler: 'NetworkFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'bitwave-api',
          },
        },
      ]
    },

    icon: {
      "src": "icon.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    },

    /*
  ** Manifest Module
  */
    manifest: {
      id: "?homescreen=1",
      name: 'كفاحي',
      short_name: 'كفاحي : لتشفير النصوص وتوليد الهاشتاج',
      description: "هي منصة غير ربحية هدفها دعم القضية الفلسطينية عن طريق توليد هاشتاجات ونصوص مشفرة بطريقة لاتتبعها خوارزميات السوشل ميديا حتى لاتتمكن من حذفها",
      categories: ['فلسطين', 'غزة', 'تشفير', 'هاشتاج'],
      lang: 'en',
      display: 'standalone',
      background_color: '#000000',
      theme_color: '#ffff00',
    },

    meta: {
      appleStatusBarStyle: 'black-translucent',
      name: 'كفاحي',
      description: "هي منصة غير ربحية هدفها دعم القضية الفلسطينية عن طريق توليد هاشتاجات ونصوص مشفرة بطريقة لاتتبعها خوارزميات السوشل ميديا حتى لاتتمكن من حذفها",
      theme_color: '#ffff00',
      ogType: 'website',
      ogHost: 'http://localhost',
      twitterCard: 'summary_large_image',
      twitterSite: '@kifahi',
      // twitterCreator: '',
    },
  },
  tailwindcss: {
    jit: true,
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ""
  },
  router: {
    linkActiveClass: 'bg-blue-test',
    linkExactActiveClass: 'bg-blue-test',
  },
  googleAnalytics: {
    id: process.env.GOOGLE
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE
    }
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    'vue-social-sharing/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/proxy'
  ],
  colorMode: {
    classSuffix: ''
  },
  i18n: {
    baseUrl: process.env.BASE_URL,
    locales: [
      {
        code: 'en',
        name: 'English',
        flag: 'en.png',
        iso: 'en-US'
      },
      {
        code: 'fr',
        name: 'Français',
        flag: 'fr.png',
        iso: 'fr-FR'
      },
      {
        code: 'ar',
        name: 'العربية',
        flag: 'ar.png',
        iso: 'ar-dZ'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
        },
        fr: {
        },
        ar: {
        }
      }
    }
  },
  toast: {
    position: 'bottom-right',
    timeout: 500,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
          timeout: 500
        }
      }
    ]
  },
  axios: {
    credentials: false,
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/api/': {
      target: 'https://localhost:3001',
      pathRewrite: { '^/api/': '' }, 
      changeOrigin: true, 
    },
  },
}
