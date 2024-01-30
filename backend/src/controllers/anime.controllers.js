import catchError from '../utils/catchError.js'
import Anime from '../models/Anime.js'
import Genre from '../models/Genre.js'
import Image from '../models/Image.js'

const getAll = catchError(async (req, res) => {
  const results = await Anime.findAll({
    include: [
      {
        model: Genre,
        attributes: ['title']
      }
    ]
  })
  return res.json(results)
})

const create = catchError(async (req, res) => {
  const { id } = req.user
  const { title, description, trailer, status, episode, releaseDate, lastepisode } = req.body
  console.log(`req.user: ${JSON.stringify(req.user)}`)
  console.log(`req.body: ${JSON.stringify(req.body)}`)
  console.log(`req.file: ${JSON.stringify(req.file)}`)

  let imageResult = null

  if (req.file) {
    const { filename } = req.file
    const url = `${req.protocol}://${req.headers.host}/uploads/${filename}`
    imageResult = await Image.create({ filename, url })
  }

  const result = await Anime.create({
    title,
    description,
    trailer,
    image: imageResult ? `${imageResult.url}` : null,
    status,
    episode,
    releaseDate,
    lastepisode,
    userId: id
  })
  return res.status(201).json(result)
})
// En el controlador de Anime

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Anime.findByPk(id)
  if (!result) return res.sendStatus(404)
  return res.json(result)
})

const remove = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Anime.destroy({ where: { id } })
  if (!result) return res.sendStatus(404)
  return res.sendStatus(204)
})
const update = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Anime.update(
    req.body,
    { where: { id }, returning: true }
  )
  if (result[0] === 0) return res.sendStatus(404)
  return res.json(result[1][0])
})

const AddLista = catchError(async (req, res) => {
  const userId = req.user.id
  const { id } = req.params
  const anime = await Anime.findByPk(id, { where: { userId } })

  console.log(`User id : ${req.user.id}`)
  console.log(`Item id : ${req.params.id}`)
  console.log(`Body  : ${req.body}`)
  await anime.setListanimes(req.body)
  const animes = await anime.getListanimes()

  return res.json(animes)
})
const AddListaPre = catchError(async (req, res) => {
  const { id } = req.params
  const anime = await Anime.findByPk(id)

  await anime.setListanimes(req.body)
  const animes = await anime.getListanimes()

  return res.json(animes)
})

const AddGenre = catchError(async (req, res) => {
  const userId = req.user.id
  const { id } = req.params
  const anime = await Anime.findByPk(id, { where: { userId } })

  await anime.setGenres(req.body)
  const animes = await anime.getGenres()

  return res.json(animes)
})

export {
  getAll,
  create,
  getOne,
  remove,
  update,
  AddLista,
  AddGenre,
  AddListaPre
}
