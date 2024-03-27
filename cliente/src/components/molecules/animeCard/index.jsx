import React from 'react'
import StarRating from '../../atoms/starRating'
import MangaCover from '../../atoms/mangaCover'
import { NavLink } from 'react-router-dom'

export default function AnimeCard ({ item }) {
  const posterImage = item.animeImage.find(image => image.category === 'poster')
  if (item) {
    return (
      <>
        <div className='anime-card card'>
          <NavLink
            className='anime-card__link'
            to={
              `/anime/${item.id}`}
          >
            <MangaCover posterImage={{ ...posterImage, title: item.title }}/>
            {
              item.score && (
                <div className='anime-card__rating'>
                  <StarRating itemScore={item.score}/>
                </div>
              )
            }
            <p className='anime-card__title'>{item.title}</p>
          </NavLink>
        </div>
      </>
    )
  }
  return (
    <div className='anime-card card'></div>
  )
}
