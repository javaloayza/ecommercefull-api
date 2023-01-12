const { Router } = require('express')
const router = Router()
const { get, create, update, remove, getById } = require('../controllers/products.controller')
const middleware = require('../middleware/integrationSoft')
/* This is a middleware that is used to upload files to the server. */
const fileUpload = require('express-fileupload')({
  useTempFiles: true,
  tempFileDir: './tmp'
})

/* A middleware that is used to decode the token that is sent in the request. */
router.use(middleware.decodeSoft)

router.get('/', get)

router.get('/:id', getById)

router.post('/', fileUpload, create)

router.put('/:id', fileUpload, update)

router.delete('/:id', remove)

module.exports = router
