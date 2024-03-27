import { getAll, Create, getOne, remove, update } from '../controllers/producer.controllers.js'
import express from 'express'

const routerProducer = express.Router()

routerProducer.route('/')
  .get(getAll)
  .post(Create)

routerProducer.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update)

export default routerProducer
