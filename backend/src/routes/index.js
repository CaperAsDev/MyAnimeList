import express from 'express'

import routerUser from './user.router.js'
import routerGenre from './genre.router.js'
import routerAnime from './anime.router.js'
import routerListAnime from './listAnime.router.js'
import routerComment from './comment.router.js'
import routerPost from './post.router.js'
import routerRol from './rol.router.js'
import routerPermiso from './permiso.router.js'
import routerNew from './new.router.js'
import routerReview from './review.router.js'
import routerImage from './image.router.js'
import routerLike from './like.router.js'
import routerListAnimePre from './listaPred.router.js'
import routerStudio from './studio.router.js'
import routerProducer from './producer.router.js'

import { verifyJwt } from '../utils/verifyJwt.js'

const router = express.Router()

// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/genres', verifyJwt, routerGenre)
router.use('/studios', verifyJwt, routerStudio)
router.use('/producers', verifyJwt, routerProducer)
router.use('/animes', routerAnime)
router.use('/listanimes', verifyJwt, routerListAnime)
router.use('/comments', routerComment)
router.use('/posts', routerPost)
router.use('/roles', verifyJwt, routerRol)
router.use('/Permisos', verifyJwt, routerPermiso)
router.use('/news', routerNew)
router.use('/reviews', routerReview)
router.use('/images', verifyJwt, routerImage)
router.use('/likes', routerLike)
router.use('/listasPres', routerListAnimePre)

export { router }
