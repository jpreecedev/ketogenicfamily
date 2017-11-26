const fs = require('fs')
const path = require('path')
const overview = require('./api/recipes/overview')
const fm = require('front-matter')

const getRecipes = () => {
  return overview.map(item => {
    return item.url
  })
}

const getPosts = () => {
  let blogPosts = [{
    path: '/blog'
  }]

  fs.readdirSync(path.join(__dirname, './api/post/')).forEach(blogPost => {
    const urlPath = `/blog/post/${blogPost.substr(0, blogPost.length - 3)}`
    const post = fs.readFileSync(path.resolve(`server/api/post/${blogPost}`), 'utf8')
    const frontmatter = fm(post)

    blogPosts.push({
      path: urlPath,
      title: frontmatter.attributes.title,
      description: frontmatter.attributes.description
    })
  })

  return blogPosts
}

module.exports.sitemap = {
  all: Array.prototype.concat(getRecipes(), getPosts().map(p => p.path)),
  recipes: getRecipes(),
  posts: getPosts()
}
