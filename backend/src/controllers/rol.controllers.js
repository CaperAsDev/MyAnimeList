import catchError from '../utils/catchError.js'
import Rol from '../models/Rol.js'

const getAll = catchError(async (req, res) => {
  const results = await Rol.findAll()
  return res.json(results)
})

const create = catchError(async (req, res) => {
  const { id } = req.user
  const { title } = req.body
  const body = { userId: id, title }
  const result = await Rol.create(body)
  return res.status(201).json(result)
})

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Rol.findByPk(id)
  if (!result) return res.sendStatus(404)
  return res.json(result)
})

const remove = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Rol.destroy({ where: { id } })
  if (!result) return res.sendStatus(404)
  return res.sendStatus(204)
})

const update = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Rol.update(
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
