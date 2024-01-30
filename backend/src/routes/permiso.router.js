import { getAll, create, getOne, remove, update } from '../controllers/permiso.controllers.js'
import express from 'express'

const routerPermiso = express.Router()

routerPermiso.route('/')
  .get(getAll)
  .post(create)

routerPermiso.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update)

export default routerPermiso
