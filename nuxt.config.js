const sitemap = require("./server/sitemap").sitemap;

const title = "KetogenicFamily.com";
const hostname = "https://ketogenicfamily.com";
const description =
  "KetogenicFamily.com - Follow our progress towards a permanent ketogenic lifestyle";

module.exports = {
  debug: true,
  /*
  ** Headers of the page
  */
  modules: ["@nuxtjs/sitemap", "@nuxtjs/rss"],
  plugins: [
    { src: "~plugins/ga.js", ssr: false },
    { src: "~plugins/facebook-share.js", ssr: false },
    { src: "~plugins/twitter-share.js", ssr: false },
    { src: "~plugins/filters.js", ssr: true },
    { src: "~plugins/eventbus.js", ssr: true }
  ],
  sitemap: {
    generate: false,
    cacheTime: 1000 * 60 * 15,
    exclude: ["/blog/components/*"],
    hostname,
    routes: sitemap.all
  },
  rss: {
    description,
    title,
    hostname,
    routes: sitemap.posts
  },
  head: {
    title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: description }
    ],
    script: [
      {
        src:
          "//platform-api.sharethis.com/js/sharethis.js#property=5a06786850e8bc00116c7fea&product=sticky-share-buttons"
      },
      { src: "/scripts/drip.js" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Global CSS
  */
  css: ["~/assets/styles/bootstrap.scss", "~/assets/styles/app.scss"],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ["axios"],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
