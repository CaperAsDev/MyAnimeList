import React from 'react'
import { NavLink } from 'react-router-dom'
import StarRating from '../../atoms/starRating'
import ProfilePic from '../../atoms/profilePic'
import LikesCounter from '../../atoms/likesCounter'

function ProfileReviewItem ({ userData, review }) {
  const date = new Date(review.review.date)
  const dateFormated = new Intl.DateTimeFormat('es', { dateStyle: 'full' }).format(date)
  return (
    <li className='profile-review'>
      <picture className='profile-review__cover-container'>
        <img className='profile-review__img' src={review.anime.poster_img} alt={review.anime.name} />
      </picture>
      <div className='profile-review__data-container'>
        <header className='profile-review__header'>
          <div className='profile-review__info'>
            <NavLink className='profile-review__link' to={`/anime/${review.anime.id}`}>
              <p className='profile-review__title'>{review.anime.name}</p>
            </NavLink>
            <StarRating itemScore={review.review.userScore}/>
          </div>
          <p className='profile-review__date'>{dateFormated}</p>
        </header>
        <p className='profile-review__review-text'>{review.review.text}</p>
        <footer className='profile-review__footer'>
          <ProfilePic user={userData} size='small'/>
          <LikesCounter likes={review.review.reviewLikes}/>
        </footer>
      </div>
    </li>
  )
}

export default ProfileReviewItem
