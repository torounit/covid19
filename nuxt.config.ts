import { Configuration } from '@nuxt/types'
const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')

const config: Configuration = {
  mode: 'universal',
  /*
   ** Environments
   */
  env: {
    dataUrl:
      process.env.DATA_URL ||
      'https://raw.githubusercontent.com/wataruoguchi/covid19_nagano_csv_to_json/master/src/.json/data.json'
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s | 長野県 非公式 新型コロナウイルス感染症対策サイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、長野県の有志が開設したものです。'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '長野県 非公式 新型コロナウイルス感染症対策サイト'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://stop-covid19-nagano.netlify.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '長野県 非公式 新型コロナウイルス感染症対策サイト'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、長野県の有志が開設したものです。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://user-images.githubusercontent.com/941125/76682913-4e41d280-6643-11ea-91a4-c2e2b53650fc.png'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      // {
      //   hid: 'twitter:site',
      //   name: 'twitter:site',
      //   content: '@tokyo_bousai'
      // },
      // {
      //   hid: 'twitter:creator',
      //   name: 'twitter:creator',
      //   content: '@tokyo_bousai'
      // },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://user-images.githubusercontent.com/941125/76682913-4e41d280-6643-11ea-91a4-c2e2b53650fc.png'
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '1160768984265556'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-precomposed.png' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/vue-chart.ts',
      ssr: true
    },
    {
      src: '@/plugins/vuetify.ts',
      ssr: true
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-client-init-module',
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
          // useCookie: true,
          // cookieKey: 'i18n_redirected'
        },
        locales: [
          {
            code: 'ja',
            name: '日本語',
            iso: 'ja-JP'
          } /*,
          {
            code: 'en',
            name: 'English',
            iso: 'en-US'
          },
          {
            code: 'zh-cn',
            name: '簡体字',
            iso: 'zh-CN'
          },
          {
            code: 'zh-tw',
            name: '繁體字',
            iso: 'zh-TW'
          },
          {
            code: 'ko',
            name: '한국어',
            iso: 'ko-KR'
          },
          // ,
          // #1126, #872 (comment)
          // ポルトガル語は訳が揃っていないため非表示
          // 「やさしい日本語」はコンポーネントが崩れるため非表示
          // {
          //   code: 'pt-BR',
          //   name: 'Portuguese',
          //   iso: 'pt-BR'
          // },
          {
            code: 'ja-basic',
            name: 'やさしい にほんご',
            iso: 'ja-JP'
          } */
        ],
        defaultLocale: 'ja',
        vueI18n: {
          fallbackLocale: 'ja',
          formatFallbackMessages: true
        },
        vueI18nLoader: true
      }
    ],
    'nuxt-svg-loader',
    'nuxt-purgecss',
    ['vue-scrollto/nuxt', { duration: 1000, offset: -72 }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      icons: false
    }
  },
  googleAnalytics: {
    id: 'UA-160681637-1'
  },
  build: {
    postcss: {
      plugins: [
        autoprefixer({ grid: 'autoplace' }),
        purgecss({
          content: [
            './pages/**/*.vue',
            './layouts/**/*.vue',
            './components/**/*.vue',
            './node_modules/vuetify/dist/vuetify.js',
            './node_modules/vue-spinner/src/ScaleLoader.vue'
          ],
          whitelist: ['html', 'body', 'nuxt-progress', 'DataCard'],
          whitelistPatterns: [/(col|row)/]
        })
      ]
    },
    // https://ja.nuxtjs.org/api/configuration-build/#hardsource
    hardSource: process.env.NODE_ENV === 'development'
  },
  manifest: {
    name: '長野県 新型コロナウイルス感染症対策サイト',
    theme_color: '#18834f',
    background_color: '#ffffff',
    display: 'standalone',
    Scope: '/',
    start_url: '/',
    splash_pages: null
  },
  generate: {
    fallback: true,
    routes: [
      '/cards/details-of-confirmed-cases',
      '/cards/number-of-confirmed-cases',
      '/cards/attributes-of-confirmed-cases',
      '/cards/number-of-tested',
      '/cards/number-of-reports-to-covid19-telephone-advisory-center',
      '/cards/number-of-reports-to-covid19-consultation-desk',
      '/cards/predicted-number-of-toei-subway-passengers',
      '/cards/agency'
    ]
  },
  // /*
  // ** hot read configuration for docker
  // */
  watchers: {
    webpack: {
      poll: true
    }
  }
}

export default config
