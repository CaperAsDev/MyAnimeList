import React from 'react'
import StarRating from '../../atoms/starRating'
import MangaCover from '../../atoms/mangaCover'
import ProfilePic from '../../atoms/profilePic'
import { cards, users } from '../../pages/home/mockData'

export default function ReviewCard ({ item }) {
  const user = users.filter(u => u.id === item.idUser)[0]
  const manga = cards.filter(u => u.id === item.idManga)[0]
  const date = new Date(Date.parse(item.date))
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  return (
    <>
      <div className='review-card card'>
        <a className='review-card__link' href="#">
          <div className="review-card__cover">

            <MangaCover item ={manga}/>
          </div>
          <div className="review-card__data">
            <div className="review-card__title">
              <div className='review-card__title--trunc'>
                {manga.title}
              </div>
              {manga.score && (
                <div className='review-card__rating'>
                  <StarRating itemScore={manga.score}/>
                </div>
              )
              }
            </div>
            <p className="review-card__content">
              {item.content}
            </p>
            <div className="review-card__user-info">
              <ProfilePic user={user} size='small'></ProfilePic>
              { <span>{`${date.getDate()} de ${monthNames[date.getMonth()]}, ${date.getFullYear()}`}</span> }
            </div>
          </div>

        </a>
      </div>
    </>
  )
}
