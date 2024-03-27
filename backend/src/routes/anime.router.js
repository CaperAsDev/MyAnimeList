import { getAll, create, getOne, remove, update, AddToList, AddGenre, AddListaPre } from '../controllers/anime.controllers.js'
import express from 'express'
import { uploadFields } from '../utils/multer.js'
import { verifyJwt } from '../utils/verifyJwt.js'

const routerAnime = express.Router()

routerAnime.route('/')
  .get(getAll)
  .post(uploadFields, verifyJwt, create)

routerAnime.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(uploadFields, update)

routerAnime.route('/:id/listanime')
  .post(verifyJwt, AddToList)

routerAnime.route('/:id/listanimePre')
  .post(AddListaPre)

routerAnime.route('/:id/genres')
  .post(AddGenre)

export default routerAnime
