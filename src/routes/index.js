const { Router } = require('express')
const router = Router()
const fs = require('fs')

/* Reading the directory and then using the router to use the files in the directory. */
fs.readdirSync(__dirname).forEach(file => {
  if (file !== 'index.js') {
    router.use(`/${file.split('.')[0]}`, require(`./${file}`))
  }
})

module.exports = router
