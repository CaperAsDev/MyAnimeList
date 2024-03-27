import React from 'react'
import { useSearchParams } from 'react-router-dom'

function ProfileListNav ({ children }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const clickHandler = (e) => {
    e.preventDefault()
    const buttonRef = e.target.dataset.list
    setSearchParams({ menu: buttonRef })
  }

  return (
    <nav className='profile-lists__navigation'>
      <ul className='profile-lists__lists-container'>
        <li className='profile-lists__item'>
          <button
            data-list='lists'
            className={`profile-lists__button ${searchParams.get('menu') === 'lists' && 'active'}`}
            onClick={clickHandler}
          >
                        Listas
          </button>
        </li>
        <li className='profile-lists__item'>
          <button
            data-list='reviews'
            className={`profile-lists__button ${searchParams.get('menu') === 'reviews' && 'active'}`}
            onClick={clickHandler}
          >
                        Reseñas
          </button>
        </li>
      </ul>
      {children}
    </nav>
  )
}

export default ProfileListNav
