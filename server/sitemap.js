const fs = require('fs')
const path = require('path')
const overview = require('./api/recipes/overview')

const getRecipes = () => {
  return overview.map(item => {
    return item.url
  })
}

const getPosts = () => {
  let blogPosts = ['/blog']
  fs.readdirSync(path.join(__dirname, './api/post/')).forEach(blogPost => {
    blogPosts.push(`/blog/post/${blogPost.substr(0, blogPost.length - 3)}`)
  })
  return blogPosts
}

export function buildSitemap () {
  return [...getRecipes(), ...getPosts()]
}
