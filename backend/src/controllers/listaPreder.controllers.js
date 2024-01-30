import catchError from '../utils/catchError.js'
import Anime from '../models/Anime.js'
import ListAnime from '../models/ListAnime.js'

const getAll = catchError(async (req, res) => {
  const results = await ListAnime.findAll({
    include: [
      {
        model: Anime,
        attributes: ['title'],
        through: {
          attributes: []
        }
      }
    ]
  })
  return res.json(results)
})

const remove = catchError(async (req, res) => {
  const { id } = req.params
  const result = await ListAnime.destroy({ where: { id } })
  if (!result) return res.sendStatus(404)
  return res.sendStatus(204)
})

export {
  getAll,
  remove
}
