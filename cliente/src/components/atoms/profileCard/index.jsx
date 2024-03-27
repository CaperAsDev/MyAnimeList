import React, { useState } from 'react'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { TbEdit } from 'react-icons/tb'
import UpdateProfileForm from './updateProfileForm'

import { useSelector } from 'react-redux'

function ProfileCard ({ userId, canEdit }) {
  const userData = useSelector(({ user }) => user.info.data)

  const [editing, setEditing] = useState(false)

  /* '{
    "name":"Caper",
    "email":"caper@gmail.com",
    "biografy":null,
    "id":"ed1bee12-d979-41ac-9270-edfd1e67d291",
    "createdAt":"2024-03-09T20:59:05.000Z",
    "updatedAt":"2024-03-09T20:59:05.000Z",
    "rolId":null,
  "userImage":[
    {
    "filename":"sammy.png",
    "url":"http://localhost:1234/uploads/sammy.png",
    "category":"profile"
  }
  ],"loginDate":1710170243312}' */

  return (
    <section className='profile-card'>
      {editing || (
        <button
          onClick={() => setEditing(true)}
          className='profile-card__button'
          aria-label='edit profile'
        >
          <TbEdit className='profile-card__icon'/>
        </button>
      )}
      {editing
        ? <UpdateProfileForm editControl={setEditing} />
        : (
          <>
            <picture className='profile-card__img-container'>
              <img
                className='profile-card__img'
                src={userData?.userImage[0].url || '../../../../public/defaultProfileImg.png'}
                alt="User profile image"
              />
            </picture>
            <div className='profile-card__text-container'>
              <h2 className='profile-card__nickname'>{userData.name}</h2>
              <p className='profile-card__biography'>{userData.biografy || 'Este usuario aun no ha escrito su biografia'}</p>
            </div>
          </>
        )}
      {/* No existe pagina para ir a favoritos y tampoco hay UI para definir anime como favorito, asi que puede quitarse hasta que no tengamos */}
      <NavLink to='/profile/favorites' className='profile-card__link'>
        <span className='profile-card__link-text'>Mis Favoritos</span>
        <BsFillBookmarkFill className='profile-card__link-icon' />
      </NavLink>
    </section>
  )
}

export default ProfileCard
