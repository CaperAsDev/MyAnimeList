import { getAll, create, getOne, remove, update } from '../controllers/new.controllers.js'
import express from 'express'
import { verifyJwt } from '../utils/verifyJwt.js'
import upload from '../utils/multer.js'

const routerNew = express.Router()

routerNew.route('/')
  .get(getAll)
  .post(upload.single('image'), create)

routerNew.route('/:id')
  .get(getOne)
  .delete(verifyJwt, remove)
  .put(verifyJwt, update)

export default routerNew
