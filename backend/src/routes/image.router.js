import { getAll, create, remove } from '../controllers/image.controllers.js'
import express from 'express'
import upload from '../utils/multer.js'

const routerImage = express.Router()

routerImage.route('/')
  .get(getAll)
  .post(upload.single('image'), create)

routerImage.route('/:id')
  .delete(remove)

export default routerImage
