import { getAll, create, getOne, remove, update } from '../controllers/post.controllers.js'
import express from 'express'
import { verifyJwt } from '../utils/verifyJwt.js'
import upload from '../utils/multer.js'

const routerPost = express.Router()

routerPost.route('/')
  .get(getAll)
  .post(upload.single('image'), verifyJwt, create)

routerPost.route('/:id')
  .get(getOne)
  .delete(verifyJwt, remove)
  .put(verifyJwt, update)

export default routerPost
