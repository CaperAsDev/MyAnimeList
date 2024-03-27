import React from 'react'
import { TbEdit } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

function ProfileListsItem ({ list }) {
  return (
    <li className='listsItem'>
      <div className='listsItem__left-container'>
        <p className='listsItem__text--big'>{list.animes.length}</p>
        <small className='listsItem__text listsItem__text--small'>Items</small>
      </div>
      <NavLink className='listsItem__link' to={`/profile/list/${list.id}`}>
        <p className='listsItem__text listsItem__text--medium'>{list.title}</p>
        <p className='listsItem__text listsItem__text--small listsItem__text--shorted'>{list.description}</p>
        {/* <p className='listsItem__text listsItem__text--small listsItem__text--shorted'>{list.animes.map((item) => item.name).join(', ')}</p> */}
      </NavLink>
      <button
        aria-label={`edit ${list.title} list`}
        className='listsItem__button'
      >
        <TbEdit className='listsItem__buton-icon' />
      </button>
    </li>
  )
}

export default ProfileListsItem
