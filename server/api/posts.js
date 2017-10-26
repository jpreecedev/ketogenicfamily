import markdown from 'markdown-parse'
import {
  Router
} from 'express'

const glob = require('glob')
const fs = require('fs')
const path = require('path')
const router = Router()

const folder = path.join(__dirname, '/post')

let slug = (fileName, date) => {
  if (date) {
    return `${date}-${fileName.replace(/\.[^/.]+$/, '').slice(11)}`
  }

  return fileName.replace(/\.[^/.]+$/, '').slice(11)
}

let getLastFullStop = post => {
  const starting = 750
  let currentPosition = starting
  while (currentPosition < post.length || currentPosition >= 1250) {
    let characterAt = post.substr(currentPosition, 1)
    if (characterAt === '.') {
      return currentPosition + 1
    }
    currentPosition += 1
  }
  return starting
}

router.get('/posts', function (req, res, next) {
  let fileContent = []
  let linkToPost = 'http://link-to-post/'

  fs.readdir(path.resolve(folder), 'utf8', function (error, files) {
    if (error) throw error

    files.forEach(function (file) {
      let post = fs.readFileSync(path.resolve(folder, file), 'utf8')
      let content = post.substr(0, getLastFullStop(post))
      content += `..

[Continue reading &rarr;](${linkToPost})`

      markdown(content, (error, result) => {
        if (error) {
          res.sendStatus(404)
          return
        }

        fileContent.unshift({
          title: result.attributes.title,
          key: result.attributes.key,
          slug: slug(file, result.attributes.date.split('-').join('_')),
          date: result.attributes.date || new Date(),
          modified: result.attributes.modified || result.attributes.date,
          description: result.attributes.description || '',
          publisher: result.attributes.publisher || '',
          canonical: `http://ketogenicfamily.com/blog/${slug(file)}`,
          content: result.html.replace(new RegExp(linkToPost, 'g'), `/blog/post/${slug(file, result.attributes.date.split('-').join('_'))}`)
        })
      })
    })

    return res.json(fileContent)
  })
})

router.get('/posts/:name', function (req, res, next) {
  glob(folder + '/' + req.params.name + '.md', (error, files) => {
    if (error) {
      res.sendStatus(404)
      return
    }

    let file = files[0]

    if (undefined === file) {
      return res.status(404).send('No data found')
    }

    fs.readFile(file, 'utf8', function (error, post) {
      if (error) {
        res.sendStatus(404)
        return
      }

      let fileContent = {}

      markdown(post, (error, result) => {
        if (error) {
          res.sendStatus(404)
          return
        }

        fileContent.title = result.attributes.title
        fileContent.key = result.attributes.key
        fileContent.slug = slug(file)
        fileContent.image = result.attributes.image || ''
        fileContent.date = result.attributes.date || new Date()
        fileContent.modified = result.attributes.modified || result.attributes.date
        fileContent.description = result.attributes.description || ''
        fileContent.publisher = result.attributes.publisher
        fileContent.content = result.html
        fileContent.canonical = `http://ketogenicfamily.com/blog/${slug(file)}`
      })

      return res.json(fileContent)
    })
  })
})

export default router
