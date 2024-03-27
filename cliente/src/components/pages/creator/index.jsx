import React, { useEffect, useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

import CreateAnimeForm from './createAnimeForm'
import SecondaryForm from './secondaryForm'

import { CreateItemApi, GetAllGenresApi, GetAllProducersApi, GetAllStudiosApi } from '../../../apiConnection'
import getFormValues from '../../../utils/getFormValues'

function Creator () {
  const { token } = useSelector(({ user }) => user.info)

  const [createItemResponse, createItemStatus, createItemFetch] = CreateItemApi()

  const genresFormref = useRef(null)
  const producersFormref = useRef(null)
  const studiosFormref = useRef(null)

  useEffect(() => {
    if (createItemStatus.success) {
      toast.success('informacion Base Agregada')
      console.log('animeCreated', createItemResponse)
    }
  }, [createItemStatus])

  const getSecondaryData = ({ ref, title }) => {
    try {
      const { data } = getFormValues(ref.current)
      const array = Array.from(Object.values(data))

      if (!array.length) {
        throw new Error(`Agrega al menos ${title}`)
      }
      const stringified = JSON.stringify(array)
      return stringified
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleMainSubmit = (e) => {
    e.preventDefault()

    const genresData = getSecondaryData({ ref: genresFormref, title: 'un Genero' })
    const producersData = getSecondaryData({ ref: producersFormref, title: 'una Productora' })
    const studiosData = getSecondaryData({ ref: studiosFormref, title: 'un Estudio' })

    const { isEmpty, formData } = getFormValues(e.currentTarget)

    if (isEmpty) return

    formData.append('genres', genresData)
    formData.append('producers', producersData)
    formData.append('studios', studiosData)

    // ---POST REQUEST-------
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    }
    createItemFetch('/', formData, config)

    // clear inputs
    // e.currentTarget.reset()
  }
  return (
    <main className='creator'>
      <Toaster />
      <CreateAnimeForm handleSubmit={handleMainSubmit} genreFormref={genresFormref} />
      <SecondaryForm apiConnection={GetAllGenresApi} reference={genresFormref} title={'Generos'} />
      <SecondaryForm apiConnection={GetAllProducersApi} reference={producersFormref} title={'Productores'} />
      <SecondaryForm apiConnection={GetAllStudiosApi} reference={studiosFormref} title={'Estudios'} />
    </main>
  )
}

export default Creator
