import { getAll, create, getOne, remove, update } from '../controllers/review.controllers.js'
import express from 'express'
import { verifyJwt } from '../utils/verifyJwt.js'

const routerReview = express.Router()

routerReview.route('/')
  .get(getAll)
  .post(verifyJwt, create)

routerReview.route('/:id')
  .get(getOne)
  .delete(verifyJwt, remove)
  .put(verifyJwt, update)

export default routerReview
