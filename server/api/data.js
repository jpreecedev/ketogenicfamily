import {
  Router
} from 'express'

const router = Router()
const fs = require('fs')
const path = require('path')

function readJsonFileSync (filepath, encoding) {
  let utf8Encoding = encoding

  if (typeof (encoding) === 'undefined') {
    utf8Encoding = 'utf8'
  }
  const file = fs.readFileSync(filepath, utf8Encoding)
  return JSON.parse(file)
}

function getConfig (file) {
  const filepath = path.join(__dirname, '/', file)
  return readJsonFileSync(filepath)
}

router.get('/overview', function (req, res, next) {
  res.json(getConfig(`json/overview.json`))
})

router.get('/recipes/:name', function (req, res, next) {
  const json = getConfig(`json/${req.params.name}.json`)

  if (json) {
    res.json(json)
  } else {
    res.sendStatus(404)
  }
})

export default router
