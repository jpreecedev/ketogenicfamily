import markdown from 'markdown-parse'
import {
  Router
} from 'express'

const glob = require('glob')
const fs = require('fs')
const path = require('path')
const router = Router()

const folder = path.join(__dirname, '/posts')

let slug = (fileName, date) => {
  if (date) {
    return `${date}-${fileName.replace(/\.[^/.]+$/, '').slice(11)}`
  }

  return fileName.replace(/\.[^/.]+$/, '').slice(11)
}

router.get('/posts', function (req, res, next) {
  let fileContent = []

  fs.readdir(path.resolve(folder), 'utf8', function (error, files) {
    if (error) throw error

    files.forEach(function (file) {
      let post = fs.readFileSync(path.resolve(folder, file), 'utf8')

      markdown(post, (error, result) => {
        if (error) {
          res.sendStatus(404)
          return
        }

        fileContent.unshift({
          title: result.attributes.title,
          slug: slug(file, result.attributes.date.split('-').join('_')),
          date: result.attributes.date || new Date(),
          description: result.attributes.description || '',
          publisher: result.attributes.publisher || '',
          content: result.html
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
        fileContent.slug = slug(file)
        fileContent.image = result.attributes.image || ''
        fileContent.date = result.attributes.date || new Date()
        fileContent.description = result.attributes.description || ''
        fileContent.publisher = result.attributes.publisher
        fileContent.content = result.html
      })

      return res.json(fileContent)
    })
  })
})

export default router
