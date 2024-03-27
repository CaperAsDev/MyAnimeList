import catchError from '../utils/catchError.js'
import Anime from '../models/Anime.js'
import Image from '../models/Image.js'
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

const getUserLists = catchError(async (req, res) => {
  const { userId } = req.params
  const results = await ListAnime.findAll({
    where: { userId },
    include: [
      {
        model: Anime,
        attributes: ['title', 'id'],
        include: {
          model: Image,
          as: 'animeImage',
          attributes: ['category', 'url']
        },
        through: {
          attributes: [] // Esto excluye todos los atributos de la tabla pivot (AnimeLista)
        }
      }
    ]
  })
  return res.json(results)
})

const create = catchError(async (req, res) => {
  const userId = req.user
  const { title, description } = req.body
  const body = { title, description, userId }

  await ListAnime.create(body)

  const results = await ListAnime.findAll({
    where: { userId },
    include: [
      {
        model: Anime,
        attributes: ['title', 'id'],
        include: {
          model: Image,
          as: 'animeImage',
          attributes: ['category', 'url']
        },
        through: {
          attributes: [] // Esto excluye todos los atributos de la tabla pivot (AnimeLista)
        }
      }
    ]
  })
  return res.status(201).json(results)
})

const getOne = catchError(async (req, res) => {
  const userId = req.user
  const { id } = req.params

  const result = await ListAnime.findByPk(id, {
    where: { userId }, // Creo que esto va a limitar quien puede ver la lista, solo el dueño podra acceder a ella
    include: [
      {
        model: Anime,
        attributes: ['title', 'id'],
        include: {
          model: Image,
          as: 'animeImage',
          attributes: ['category', 'url']
        },
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
  getUserLists,
  update
}
