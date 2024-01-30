import catchError from '../utils/catchError.js'
import Anime from '../models/Anime.js'
import ListAnime from '../models/ListAnime.js'

const getAll = catchError(async (req, res) => {
  const userId = req.user.id
  console.log(`UserId: ${userId}`)
  const results = await ListAnime.findAll({
    where: { userId },
    include: [
      {
        model: Anime,
        attributes: ['title', 'id'],
        through: {
          attributes: [] // Esto excluye todos los atributos de la tabla pivot (AnimeLista)
        }
      }
    ]
  })
  return res.json(results)
})

const create = catchError(async (req, res) => {
  const { id } = req.user
  const { title, description } = req.body
  const body = { title, description, userId: id }
  const result = await ListAnime.create(body)
  return res.status(201).json(result)
})

const getOne = catchError(async (req, res) => {
  const userId = req.user.id
  const { id } = req.params
  const result = await ListAnime.findByPk(id, {
    where: { userId },
    include: [
      {
        model: Anime,
        attributes: ['title'],
        through: {
          attributes: [] // Esto excluye todos los atributos de la tabla pivot (AnimeLista)
        }
      }
    ]
  })
  if (!result) return res.sendStatus(404)
  return res.json(result)
})

const remove = catchError(async (req, res) => {
  const { id } = req.params
  const result = await ListAnime.destroy({ where: { id } })
  if (!result) return res.sendStatus(404)
  return res.sendStatus(204)
})

const update = catchError(async (req, res) => {
  const { id } = req.params
  const result = await ListAnime.update(
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
