import catchError from '../utils/catchError.js'
import Post from '../models/Post.js'
import Image from '../models/Image.js'

const getAll = catchError(async (req, res) => {
  const results = await Post.findAll()
  return res.json(results)
})

const create = catchError(async (req, res) => {
  const userId = req.user.id
  const { title, content } = req.body

  let imageResult = null // Inicializamos imageResult como nulo

  if (req.file) {
    // Si req.file está definido (es decir, se proporcionó una imagen), creamos una entrada de imagen
    const { filename } = req.file
    const url = `${req.protocol}://${req.headers.host}/uploads/${filename}`
    imageResult = await Image.create({ filename, url })
  }

  // Luego, creamos una entrada de usuario en la base de datos, asociando la imagen si está definida
  const result = await Post.create({
    title,
    image: imageResult ? `${imageResult.url}` : null, // Asociamos la ID de la imagen de perfil si existe
    content,
    userId

  })
  return res.status(201).json(result)
})

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Post.findByPk(id)
  if (!result) return res.sendStatus(404)
  return res.json(result)
})

const remove = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Post.destroy({ where: { id } })
  if (!result) return res.sendStatus(404)
  return res.sendStatus(204)
})

const update = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Post.update(
    req.body,
    { where: { id }, returning: true }
  )
  if (result[0] === 0) return res.sendStatus(404)
  return res.json(result[1][0])
})

export {
  getAll,
  create,
  getOne,
  remove,
  update
}
