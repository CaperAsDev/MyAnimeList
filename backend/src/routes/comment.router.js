import { getAll, create, getOne, remove, update } from '../controllers/comment.controllers.js'
import express from 'express'
import { verifyJwt } from '../utils/verifyJwt.js'

const routerComment = express.Router()

routerComment.route('/')
  .get(getAll)
  .post(verifyJwt, create)

routerComment.route('/:id')
  .get(verifyJwt, getOne)
  .delete(verifyJwt, remove)
  .put(verifyJwt, update)

export default routerComment
