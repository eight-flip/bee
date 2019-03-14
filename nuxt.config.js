const pkg = require('./package')
const SITE_URL = 'pts-bee.com';
const SITE_NAME = 'Personal Training Studio Bee'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: SITE_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:url', name: 'og:site_name', content: SITE_URL },
      { hid: 'og:site_name', name: 'og:site_name', content: SITE_NAME },
      { hid: 'og:title', name: 'og:title', content: SITE_NAME },
      { hid: 'twitter:title', name: 'twitter:title', content: SITE_NAME },
      { hid: 'og:description', name: 'og:description', content: pkg.description },
      { hid: 'og:image', name: 'og:image', content: 'ogp.png' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: 'apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
      { rel: 'manifest', href: 'site.webmanifest' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/scss/app.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: 'plugins/carousel.js', ssr: false},
    {src: 'plugins/aos.js', ssr: false},
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['vue-scrollto/nuxt', { duration: 500, offset: -52}],
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
