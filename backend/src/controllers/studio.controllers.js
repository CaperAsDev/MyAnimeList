import catchError from '../utils/catchError.js'
import Studio from '../models/Studio.js'

const getAll = catchError(async (req, res) => {
  const result = await Studio.findAll()
  return res.json(result)
})
const Create = catchError(async (req, res) => {
  const userId = req.user.id
  const { title } = req.body
  const body = { title, userId }
  const result = await Studio.create(body)
  return res.json(result)
})

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Studio.findByPk(id)
  if (!result) return req.sendStatus(404)
  return res.json(result)
})

const remove = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Studio.destroy({ where: { id } })
  if (!result) return req.sendStatus(404)
  return res.sendStatus(204)
})

const update = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Studio.update(req.body, { where: { id }, returning: true })
  if (result[0] === 0) return res.sendStatus(404)
  return res.json(result[1][0])
})

export {
  getAll,
  Create,
  getOne,
  remove,
  update
}
