import React from 'react'
import { animes } from '../../pages/community/mockData'
import PosterCardCommunity from '../../atoms/posterCardCommunity'
import ReviewCardCommunity from '../../molecules/reviewCardCommunity'

const ReviewsCommunity = () => {
  return (
    <div className='reviews-community'>
      <div className='reviews-community__presentation'>
        <p className='reviews-community__presentation_title'>Reseñas</p>
        <p className='reviews-community__presentation_description'>Opiniones, críticas y recomendaciones para los amantes del anime.</p>
      </div>
      <div className='reviews-community__container'>
        <div className="reviews-community__container_last-reviews">
          <p className='reviews-community__container_last-reviews_title'>Últimas reseñas</p>
          <ReviewCardCommunity />
        </div>
        <div className="reviews-community__container_more-opinions">
          <p className='reviews-community__container_more-opinions_title'>Con más opiniones</p>
          <div className="reviews-community__container_more-opinions_list">
            {
              animes.map(item => <PosterCardCommunity key={item.id} item={item}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCommunity
