import catchError from '../utils/catchError.js'
import Review from '../models/Review.js'

const getAll = catchError(async (req, res) => {
  const results = await Review.findAll()
  return res.json(results)
})

const create = catchError(async (req, res) => {
  const userId = req.user.id
  const { animeId } = req.params
  const { rating, content } = req.body
  const body = { rating, content, animeId, userId }
  const result = await Review.create(body)
  return res.status(201).json(result)
})

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Review.findByPk(id)
  if (!result) return res.sendStatus(404)
  return res.json(result)
})

const remove = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Review.destroy({ where: { id } })
  if (!result) return res.sendStatus(404)
  return res.sendStatus(204)
})

const update = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Review.update(
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
