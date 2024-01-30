import catchError from '../utils/catchError.js'
import Like from '../models/Like.js'

const getAll = catchError(async (req, res) => {
  const results = await Like.findAll()
  return res.json(results)
})

const create = catchError(async (req, res) => {
  const { animeId } = req.params
  const userId = req.user.id
  const existeLike = await Like.findOne({ where: { animeId, userId } })

  if (existeLike) return res.status(400).json({ message: 'Ya has dado like a este anime' })
  const result = await Like.create({ animeId, userId })
  return res.status(201).json(result)
})

const remove = catchError(async (req, res) => {
  const { animeId } = req.params
  const userId = req.user.id
  const existeLike = await Like.findOne({ where: { animeId, userId } })

  if (!existeLike) return res.status(400).json({ message: 'No has dado like a este anime' })
  const result = await existeLike.destroy()
  return res.status(201).json(result)
})

export {
  getAll,
  create,
  remove
}
