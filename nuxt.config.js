const pkg = require('./package');
require('dotenv').config();

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FFFFFF' },

  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css', '~assets/scss/base.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/genre-filter.js',
    '~plugins/runtime-filter.js',
    '~plugins/vue-js-modal.js',
    '~plugins/rating-filter.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/dotenv'],

  env: {
    apiKey: process.env.API_KEY
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: [],
    vendor: ['vue-js-modal'],
    extend(config, ctx) {}
  }
};
