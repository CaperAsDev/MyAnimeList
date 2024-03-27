import React, { useEffect, useState } from 'react'
import { MdModeComment } from 'react-icons/md'
import { BsPlusCircle } from 'react-icons/bs'
import { useParams } from 'react-router-dom'

import { setAnimeDetail, reset, setAnimeRelation } from '../../../slices/animeDetailSlice'
import { useDispatch, useSelector } from 'react-redux'

import ItemDetail from '../../organisms/itemDetail'
import InfoBox from '../../molecules/infoBox'
import DetailReviewItem from '../../molecules/detailReviewItem'
import Carousel from '../../molecules/carousel'
import AnimeCard from '../../molecules/animeCard'
import ReviewForm from './reviewForm'

import { GetOneItemApi } from '../../../apiConnection'

import { reviewsSample, recomendationsSample } from './mockData'

import Modal from '../../atoms/modal'

function DetailView () {
  const { id } = useParams()

  const dispatch = useDispatch()

  const user = useSelector(({ user }) => user.info)
  const animeInfo = useSelector(({ animeDetail }) => animeDetail.info)
  // Traigo info de la api del anime ---------------| Check

  const [getItemResponseApi, getItemStatusApi, getItemFetchApi] = GetOneItemApi(id)

  const [reviewFormModalOpen, setReviewFormModalOpen] = useState(false)

  const handleCreateReviewButton = (e) => {
    e.preventDefault()
    setReviewFormModalOpen(true)
  }

  useEffect(() => {
    getItemFetchApi(`${user.setted ? (`?userId=${user.data.id}`) : ''}`)
  }, [user])

  useEffect(() => {
    if (getItemStatusApi.success) {
      dispatch(setAnimeDetail(getItemResponseApi.anime))
      dispatch(setAnimeRelation(getItemResponseApi.relation || null))
    }
  }, [getItemStatusApi])

  // console.log(animeInfo)
  useEffect(() => {
    return () => {
      dispatch(reset())
    }
  }, [])
  return (
    <div className='detail-view'>
      {reviewFormModalOpen && (
        <Modal toClose={setReviewFormModalOpen}>
          <ReviewForm />
        </Modal>
      )}
      {animeInfo.setted
        ? (<p>Cargando...</p>)
        : (
          <>
            <ItemDetail />
            <div className='detail-view__body-container'>
              <InfoBox />
              <section className='detail-view__reviews'>
                <header className='detail-view__reviews-header'>
                  <h3 className='reviews-header__title'>
                    <MdModeComment />
                                Reseñas
                  </h3>
                  <button
                    onClick={handleCreateReviewButton}
                    className='detail-view__add-review-button'
                  >
                    <BsPlusCircle />
                            Escribir reseña
                  </button>
                </header>
                {/* {animeApi?.reviews.length > 0
                  ? (
                    animeApi?.reviews.map((item) => (
                      <DetailReviewItem key={item.id} review={item} />
                    )))
                  : (
                    <div className="empty-reviews">
                      <p className='empty-reviews__message'>No hay reseñas</p>
                    </div>
                  )
                } */}
              </section>
            </div>
            <aside className='detail-view__aside'>
              <h3 className='detail-view__aside-title'>Recomendaciones Similares</h3>
              {/* <Carousel>
                {allAnimeData.recomendations.map((item) => (
                  <AnimeCard key={item.id} item={item}/>
                ))}
              </Carousel> */}
            </aside>
          </>
        )
      }
    </div>
  )
}

export default DetailView
