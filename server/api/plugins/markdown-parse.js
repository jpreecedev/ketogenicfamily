const fm = require('front-matter')
const marked = require('marked')

const renderer = new marked.Renderer()

renderer.table = (header, body) => {
  return '<table class="table table-striped table-responsive">\n' +
  '<thead>\n' +
  header +
  '</thead>\n' +
  '<tbody>\n' +
  body +
  '</tbody>\n' +
  '</table>\n'
}

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  langPrefix: '',
  renderer: renderer
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
