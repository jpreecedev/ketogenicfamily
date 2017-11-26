const fs = require('fs')
const path = require('path')

const defaults = {
  path: '/rss.xml',
  description: null,
  routes: []
}

const getXml = (title, url, description, pages) => {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
  <channel>
    <title>${title}</title>
    <link>${url}</link>
    <description>${description}</description>
    ${pages.slice(1).map(page =>
    `<item>
      <title>${page.title}</title>
      <link>${url + page.path}</link>
      <description>${page.description}</description>
    </item>`).join(' ')}
  </channel>
  </rss>`
}

module.exports = function nuxtRss () {
  const options = Object.assign({}, defaults, this.options.rss)
  const rssPath = path.resolve(path.join('static', options.path))
  const xml = getXml(options.title, options.hostname, options.description, options.routes)

  fs.writeFileSync(rssPath, xml)
}
