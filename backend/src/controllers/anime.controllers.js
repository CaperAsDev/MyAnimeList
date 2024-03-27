import catchError from '../utils/catchError.js'
import Anime from '../models/Anime.js'
import Genre from '../models/Genre.js'
import Image from '../models/Image.js'
import Studio from '../models/Studio.js'
import Producer from '../models/Producer.js'
import UserAnime from '../models/User_Anime.js'

import { Op } from 'sequelize'
import ListAnime from '../models/ListAnime.js'

const getAll = catchError(async (req, res) => {
  const results = await Anime.findAll({
    attributes: ['title', 'id'],
    include: {
      model: Image,
      as: 'animeImage',
      attributes: ['category', 'url']
    }
  })
  return res.json(results)
})

const create = catchError(async (req, res) => {
  const { id } = req.user
  const { title, synopsis, trailer, status, episodes, airedfrom, airedto, season, genres, studios, producers } = req.body
  const animeId = crypto.randomUUID()

  const createAnime = async () => {
    try {
      const result = await Anime.create({
        title,
        synopsis,
        trailer,
        status,
        episodes,
        airedfrom,
        airedto,
        season,
        type: 'anime',
        userId: id,
        id: animeId
      })
      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  const animeCreated = await createAnime()

  if (animeCreated && req.files) {
    // Verifica si existe un archivo de poster
    if (req.files.poster && req.files.poster[0]) {
      const { filename } = req.files.poster[0]
      linkImage({
        file: req.files.poster[0],
        animeId,
        url: `${req.protocol}://${req.headers.host}/uploads/${filename}`,
        category: 'poster'
      })
    }
    // Verifica si existe un archivo de banner
    if (req.files.banner && req.files.banner[0]) {
      const { filename } = req.files.banner[0]
      linkImage({
        file: req.files.banner[0],
        animeId,
        url: `${req.protocol}://${req.headers.host}/uploads/${filename}`,
        category: 'banner'
      })
    }
  }
  const findOrCreateGenres = async (item) => {
    const [genre] = await Genre.findOrCreate({
      where: { title: item }
    })
    animeCreated.addGenre(genre)
    return genre
  }

  const genrePromises = JSON.parse(genres).map(genre => findOrCreateGenres(genre))
  const studioPromises = JSON.parse(studios).map(studio => findOrCreate({ title: studio, model: Studio, instance: (item) => animeCreated.addStudio(item) }))
  const producerPromises = JSON.parse(producers).map(producer => findOrCreate({ title: producer, model: Producer, instance: (item) => animeCreated.addProducer(item) }))

  try {
    await Promise.all([...genrePromises, ...studioPromises, ...producerPromises])
  } catch (error) {
    console.error('Ocurrio u error', error)
  }

  const completeAnime = await Anime.findByPk(animeId, {
    include: [
      {
        model: Image,
        as: 'animeImage',
        attributes: ['filename', 'url', 'category']
      },
      {
        model: Genre,
        attributes: ['title', 'id']
      }
    ]
  })
  return res.status(201).json(completeAnime)
})

const findOrCreate = async ({ title, model, instance }) => {
  const [item] = await model.findOrCreate({
    where: { title }
  })
  instance(item)
  return item
}

const linkImage = async ({ file, animeId, category, url }) => {
  try {
    const { filename } = file
    await Image.create({
      filename,
      url,
      entityType: 'anime',
      entityId: animeId,
      category
    })
  } catch (error) {
    throw new Error(error)
  }
}

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const userId = req.query?.userId
  const result = await Anime.findByPk(id, {
    include: [
      {
        model: Image,
        as: 'animeImage',
        attributes: ['filename', 'url', 'category']
      },
      {
        model: Genre,
        attributes: ['title', 'id']
      },
      {
        model: Producer,
        attributes: ['title', 'id']
      },
      {
        model: Studio,
        attributes: ['title', 'id']
      }
    ]
  })
  if (!result) return res.sendStatus(404)
  if (!userId) return res.json({ anime: result })
  const userAnimeRelation = await UserAnime.findOne({
    where: {
      [Op.and]: [
        { userId },
        { animeId: id }
      ]
    }
  })
  if (result && userAnimeRelation) return res.json({ anime: result, relation: userAnimeRelation })
  else return res.json({ anime: result })
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

const AddToList = catchError(async (req, res) => {
  const userId = req.user
  const { id } = req.params
  const { listId } = req.query

  const anime = await Anime.findByPk(id)
  if (!anime) return res.status(404).send('Anime not found')

  const list = await ListAnime.findOne({
    where: { userId, id: listId },
    include: {
      model: Anime,
      attributes: ['title', 'id'],
      include: {
        model: Image,
        as: 'animeImage',
        attributes: ['category', 'url']
      }
    }
  })
  if (!list) return res.status(404).send('List not found')

  await list.addAnime(anime)
  await list.reload()

  return res.json(list)
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
  AddToList,
  AddGenre,
  AddListaPre
}
