import { getAll, create, getOne, remove, update } from '../controllers/listAnime.controllers.js'
import express from 'express'

const routerListAnime = express.Router()

routerListAnime.route('/')
  .get(getAll)
  .post(create)

routerListAnime.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update)

// routerListAnime.route('/:id/anime')
//     .post(agregarAnimeALista)

export default routerListAnime
