const overview = require('./server/api/recipes/overview')

module.exports = {
  /*
  ** Headers of the page
  */
  modules: [
    '@nuxtjs/sitemap'
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/facebook-share.js', ssr: false },
    { src: '~plugins/twitter-share.js', ssr: false },
    { src: '~plugins/filters.js', ssr: true }
  ],
  sitemap: {
    generate: false,
    routes: overview.map(item => {
      return item.url
    })
  },
  head: {
    title: 'KetogenicFamily.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'KetogenicFamily.com - Follow our progress towards a permanent ketogenic lifestyle' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['bootstrap/dist/css/bootstrap.css', '~/assets/styles/app.scss'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
