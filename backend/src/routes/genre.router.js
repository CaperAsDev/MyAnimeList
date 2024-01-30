import { getAll, Create, getOne, remove, update } from '../controllers/genre.controllers.js'
import express from 'express'

const routerGenre = express.Router()

routerGenre.route('/')
  .get(getAll)
  .post(Create)

routerGenre.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update)

export default routerGenre
