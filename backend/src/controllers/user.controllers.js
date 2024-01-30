import catchError from '../utils/catchError.js'
import User from '../models/User.js'
import Rol from '../models/Rol.js'
import Permiso from '../models/Permiso.js'
import Image from '../models/Image.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

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

  let imageResult = null // Inicializamos imageResult como nulo

  if (req.file) {
    // Si req.file está definido (es decir, se proporcionó una imagen), creamos una entrada de imagen
    const { filename } = req.file
    const url = `${req.protocol}://${req.headers.host}/uploads/${filename}`
    imageResult = await Image.create({ filename, url })
  }

  // Luego, creamos una entrada de usuario en la base de datos, asociando la imagen si está definida
  const result = await User.create({
    name,
    email,
    password: hashPassword,
    profilePicture: imageResult ? `${imageResult.url}` : null // Asociamos la ID de la imagen de perfil si existe
  })

  return res.status(201).json(result)
})

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const result = await User.findByPk(id)
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
  const user = await User.findOne({ where: { email } })
  if (!user) return res.sendStatus(401)

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) return res.sendStatus(401).json({ message: 'Error en la contraseña' })

  const token = jwt.sign(
    { user },
    process.env.TOKEN,
    { expiresIn: '1d' }

  )
  console.log(token)
  return res.json({ user, token })
})

const logged = catchError(async (req, res) => {
  const user = req.user
  return res.json(user)
})

export {
  getAll,
  create,
  getOne,
  remove,
  update,
  login,
  logged
}
