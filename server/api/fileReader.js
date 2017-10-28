const fs = require('fs')
const path = require('path')

export function readJsonFileSync (filepath, encoding) {
  let utf8Encoding = encoding

  if (typeof (encoding) === 'undefined') {
    utf8Encoding = 'utf8'
  }
  const file = fs.readFileSync(filepath, utf8Encoding)
  return JSON.parse(file)
}

export function getConfig (file) {
  const filepath = path.join(__dirname, '/', file)
  return readJsonFileSync(filepath)
}
