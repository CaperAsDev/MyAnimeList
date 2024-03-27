import React, { useEffect, useState } from 'react'
import NavBar from '../../molecules/navbar'
import SearchInput from '../../atoms/searchInput'
import ProfileMenu from '../../molecules/profileMenu'
import { NavLink } from 'react-router-dom'
import { BsList } from 'react-icons/bs'

import { logout, setUser } from '../../../slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

import { LoggedAPI } from '../../../apiConnection'

function Header () {
  const [navbar, setNavbar] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(({ user }) => user.info)

  const [, loggedStatus, loggedFetch] = LoggedAPI()

  useEffect(() => {
    if (user.setted) {
      const now = Date.now()
      const diferenciaMs = now - user.data.loginDate
      const milisegundosEnUnDia = 24 * 60 * 60 * 1000
      if (diferenciaMs > (milisegundosEnUnDia * 7)) {
        dispatch(logout())
      }
      loggedFetch('', {}, { headers: { Authorization: 'Bearer ' + user.token } })
    } else {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        loggedFetch('', {}, { headers: { Authorization: 'Bearer ' + user.token } })

        dispatch(setUser(user))
      }
    }
  }, [])

  useEffect(() => {
    if (loggedStatus.error) {
      dispatch(logout())
    }
  }, [loggedStatus])

  return (
    <header className='header-Container'>
      <p className='header__title'>
        <NavLink to='/'>Radar Anime</NavLink>
      </p>
      <div className='navbar-options'>
        <button className='button_navbar-options' onClick={() => setNavbar(!navbar)}><BsList/></button>
        <NavBar navbar={navbar}/>
        <div className='header__rigth'>
          <SearchInput/>
          <ProfileMenu/>
        </div>
      </div>
    </header>
  )
}

export default Header
