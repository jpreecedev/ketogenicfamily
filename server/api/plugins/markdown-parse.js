const fm = require('front-matter')
const marked = require('marked')

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  langPrefix: ''
})

function parse (string, done) {
  const frontmatter = fm(string)

  marked(frontmatter.body, function (err, html) {
    if (err) return done(err)

    frontmatter.html = html
    done(null, frontmatter)
  })
}

module.exports = parse
