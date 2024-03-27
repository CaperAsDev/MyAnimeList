import { getAll, Create, getOne, remove, update } from '../controllers/studio.controllers.js'
import express from 'express'

const routerStudio = express.Router()

routerStudio.route('/')
  .get(getAll)
  .post(Create)

routerStudio.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update)

export default routerStudio
