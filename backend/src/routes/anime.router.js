import { getAll, create, getOne, remove, update, AddLista, AddGenre, AddListaPre } from '../controllers/anime.controllers.js'
import express from 'express'
import upload from '../utils/multer.js'
import { verifyJwt } from '../utils/verifyJwt.js'

const routerAnime = express.Router()

routerAnime.route('/')
  .get(getAll)
  .post(upload.single('image'), verifyJwt, create)

routerAnime.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(upload.single('image'), update)

routerAnime.route('/:id/listanime')
  .post(AddLista)

routerAnime.route('/:id/listanimePre')
  .post(AddListaPre)

routerAnime.route('/:id/genres')
  .post(AddGenre)

export default routerAnime
