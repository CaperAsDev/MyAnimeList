import React, { useState } from 'react'
import { useSearchParams, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ProfileListsItem from '../../atoms/profileListsItem'
import ProfileReviewItem from '../profileReviewItem'

function ProfileListContent ({ children }) {
  const [searchParams] = useSearchParams()
  const userLists = useSelector(({ user }) => user.custom.lists)
  const [reviews] = useState([])

  const renderLists = () => {
    if (userLists.array.length > 0) {
      return (userLists.array.map((item) => (
        <ProfileListsItem key={item.title} list={item} />
      )))
    }
    return (
      <div className='empty-lists'>
        <h3>No tienes listas creadas</h3>
        {children}
      </div>
    )
  }
  const renderReviews = () => {
    if (reviews.length > 0) {
      return (reviews.map((item) => (
        <ProfileReviewItem
          key={item.id}
          review={item}
        />
      )))
    }
    //! El NavLink Podria redirijir a la lista de anime vistos
    return (
      <div className='empty-reviews'>
        <h3>No tienes reseñas creadas</h3>
        <div className='empty-reviews__link-container'>
          <NavLink to='/' className='empty-reviews__link' >
                        Ir al Catalogo
          </NavLink>
        </div>
      </div>
    )
  }
  return (
    <ul className='profile-lists__list'>
      {searchParams.get('menu') === 'lists'
        ? (renderLists())
        : (renderReviews())
      }
    </ul>
  )
}

export default ProfileListContent
