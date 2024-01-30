import catchError from '../utils/catchError.js'
import Image from '../models/Image.js'
import path from 'node:path'
import unlinkSync from 'node:fs'

const getAll = catchError(async (req, res) => {
  const result = await Image.findAll()
  return res.json(result)
})

const create = catchError(async (req, res) => {
  const { id } = req.user

  const { filename } = req.file
  const url = `${req.protocol}://${req.headers.host}/uploads/${filename}`
  const result = await Image.create({ filename, url, userId: id })
  return res.status(201).json(result)
})

const remove = catchError(async (req, res) => {
  const { id } = req.params

  const result = await Image.findByPk(id)
  if (!result) return res.sendStatus(404)
  unlinkSync(path.join(__dirname, '..', 'public', 'uploads', `${result.filename}`))

  await result.destroy()

  return res.sendStatus(204)
})

export {
  getAll,
  create,
  remove
}
