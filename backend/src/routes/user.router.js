import { getAll, create, getOne, remove, update, login, logged, getAnimes, modifyAnime, removeAnime } from '../controllers/user.controllers.js'
import express from 'express'
import { verifyJwt } from '../utils/verifyJwt.js'
import upload from '../utils/multer.js'

const routerUser = express.Router()

routerUser.route('/')
  .get(verifyJwt, getAll)
  .post(upload.single('profilePicture'), create)

routerUser.route('/login')
  .post(login)

routerUser.route('/me')
  .get(verifyJwt, logged)

routerUser.route('/:id')
  .get(verifyJwt, getOne)
  .delete(verifyJwt, remove)
  .put(upload.single('profilePicture'), verifyJwt, update)

routerUser.route('/:id/animes')
  .get(verifyJwt, getAnimes)
  .put(verifyJwt, modifyAnime)
  .delete(verifyJwt, removeAnime)

export default routerUser
