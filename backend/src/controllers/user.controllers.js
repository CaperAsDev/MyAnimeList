import catchError from '../utils/catchError.js'
import User from '../models/User.js'
import Rol from '../models/Rol.js'
import Permiso from '../models/Permiso.js'
import Image from '../models/Image.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserAnime from '../models/User_Anime.js'
import Anime from '../models/Anime.js'

const getAll = catchError(async (req, res) => {
  const results = await User.findAll({
    include: [
      {
        model: Rol,
        attributes: ['title']
      },
      {
        model: Permiso,
        attributes: ['title']
      }
    ]
  })
  return res.json(results)
})

const create = catchError(async (req, res) => {
  const { name, email, password } = req.body // Datos del usuario
  const hashPassword = password ? await bcrypt.hash(password, 10) : null
  console.log(`Received data: ${JSON.stringify(req.body)}`)

  // Luego, creamos una entrada de usuario en la base de datos, asociando la imagen si está definida

  const userId = crypto.randomUUID()
  const result = await User.create({
    name,
    email,
    password: hashPassword,
    id: userId
  })
  console.log(result)
  if (result) {
    if (req.file) {
    // Si req.file está definido (es decir, se proporcionó una imagen), creamos una entrada de imagen
      const { filename } = req.file
      const url = `${req.protocol}://${req.headers.host}/uploads/${filename}`
      await Image.create({ filename, url, entityType: 'user', category: 'profile', entityId: userId })
    }
  }

  return res.status(201).json(result)
})

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const result = await User.findByPk(id, {
    attributes: ['name', 'biografy'],
    include: {
      model: Image,
      as: 'userImage',
      attributes: ['url', 'category']
    }
  })
  if (!result) return res.sendStatus(404)
  return res.json(result)
})

const remove = catchError(async (req, res) => {
  const { id } = req.params
  const result = await User.destroy({ where: { id } })
  if (!result) return res.sendStatus(404)

  return res.sendStatus(204)
})

const update = catchError(async (req, res) => {
  const { id } = req.params
  const { name, email, profilePicture, biografy } = req.body // Datos del usuario, incluyendo la imagen

  // Verifica si se proporcionó una nueva imagen de perfil
  if (profilePicture) {
    // Si se proporcionó una imagen de perfil, crea una entrada de imagen en la base de datos
    const url = `${req.protocol}://${req.headers.host}/uploads/${profilePicture.filename}`
    const imageResult = await Image.create({ filename: profilePicture.filename, url })

    // Actualiza el usuario incluyendo el nuevo ID de la imagen de perfil
    await User.update({ name, email, profilePicture: imageResult.id, biografy }, { where: { id } })
  } else {
    // Si no se proporcionó una nueva imagen de perfil, actualiza el usuario sin modificar la imagen
    await User.update({ name, email, biografy }, { where: { id } })
  }

  const updatedUser = await User.findByPk(id)

  if (!updatedUser) return res.sendStatus(404)

  return res.json(updatedUser)
})

const login = catchError(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({
    where: { email },
    include: {
      model: Image,
      as: 'userImage',
      attributes: ['category', 'url']
    }
  })
  if (!user) return res.sendStatus(401)

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) return res.sendStatus(401).json({ message: 'Error en la contraseña' })

  delete user.password

  const token = jwt.sign(
    { user: user.id },
    process.env.TOKEN,
    { expiresIn: '7d' }
  )

  console.log('user logged')
  return res.json({ user, token })
})

const getAnimes = catchError(async (req, res) => {
  const { id } = req.params
  const result = await UserAnime.findAll({
    where: { userId: id },
    include: {
      model: Anime,
      attributes: ['id', 'title'],
      include: {
        model: Image,
        as: 'animeImage',
        attributes: ['category', 'url']
      }
    }
  })
  if (!result) return res.sendStatus(404)
  return res.json(result)
})

const modifyAnime = catchError(async (req, res) => {
  const userId = req.params.id
  const animeId = req.query.anime
  const body = req.body// Preparar el codigo para recibir score o reseña tambien

  const user = await User.findByPk(userId)
  if (!user) return res.status(404).send('User not found')

  const anime = await Anime.findByPk(animeId, {
    include: {
      model: User,
      attributes: ['id'],
      through: {
        attributes: ['status', 'favorite', 'score']
      }
    }
  })
  if (!anime) return res.status(404).send('Anime not found')

  const relation = await UserAnime.findOrCreate({
    where: { animeId, userId }
  })

  const updated = await relation[0].update({ ...body })

  return res.json(updated)
})

const removeAnime = catchError(async (req, res) => {
  const userId = req.params.id
  const animeId = req.query.anime

  const user = await User.findByPk(userId)
  if (!user) return res.status(404).send('User not found')

  const anime = await Anime.findByPk(animeId)
  if (!anime) return res.status(404).send('Anime not found')

  const result = await user.removeAnime(Anime)
  return res.json(result)
})

const logged = catchError(async (req, res) => {
  const userId = req.user
  const user = await User.findByPk(userId)
  if (!user) return res.status(404).send('User not found')

  return res.json(user)
})

export {
  getAll,
  create,
  getOne,
  remove,
  update,
  login,
  getAnimes,
  modifyAnime,
  removeAnime,
  logged
}
