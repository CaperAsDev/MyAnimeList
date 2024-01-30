import { getAll, create, getOne, remove, update } from '../controllers/rol.controllers.js'
import express from 'express'

const routerRol = express.Router()

routerRol.route('/')
  .get(getAll)
  .post(create)

routerRol.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update)

export default routerRol
