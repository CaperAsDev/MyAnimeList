import { getAll, remove } from '../controllers/listaPreder.controllers.js'
import express from 'express'

const routerListAnimePre = express.Router()

routerListAnimePre.route('/')
  .get(getAll)

routerListAnimePre.route('/:id')
  .delete(remove)

export default routerListAnimePre
