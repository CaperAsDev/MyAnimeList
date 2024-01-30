import { getAll, create, remove } from '../controllers/like.controllers.js'
import express from 'express'
import { verifyJwt } from '../utils/verifyJwt.js'

const routerLike = express.Router()

routerLike.route('/')
  .get(getAll)

routerLike.route('/:animeId/like')
  .post(verifyJwt, create)

routerLike.route('/:animeId/unlike')
  .delete(verifyJwt, remove)

export default routerLike
