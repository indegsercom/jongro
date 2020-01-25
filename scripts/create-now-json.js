const fs = require('fs')

console.log('>>> Creating now.json with github env variables.')
const { DATABASE_URL, NOW_NAME } = process.env
const json = JSON.parse(fs.readFileSync('now.json', 'utf-8'))

const newJson = {
  ...json,
  name: NOW_NAME,
  env: {
    DATABASE_URL,
  }
}

fs.writeFileSync('now.json', JSON.stringify(newJson), 'utf-8')

console.log('>>> Finish updating now.json with env variables.')
