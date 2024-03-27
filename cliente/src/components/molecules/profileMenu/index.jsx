import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoPersonOutline } from 'react-icons/io5'
import ProfileOptions from '../../atoms/profileOptions'

import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../slices/userSlice'

function ProfileMenu () {
  const [isHovered, setIsHovered] = useState(false)
  const userInfo = useSelector(({ user }) => user.info)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isProfiliImgAvailable = () => {
    const userJSON = localStorage.getItem('user')
    if (userJSON) {
      const user = JSON.parse(userJSON)
      if (user.userImage.length) {
        const profileImage = user.userImage[0].url
        return (
          <img
            className='profile__img'
            src={profileImage}
            alt='profile picture'
          />
        )
      } else {
        return (
          <img
            className='profile__img'
            src='/defaultProfileImg.png'
            alt='default profile picture'
          />
        )
      }
    }
    return (
      <IoPersonOutline className='profile-icon' />
    )
  }
  const dualMouseHandler = () => {
    let closeMenuTimeOut
    const handleMouseEnter = () => {
      clearTimeout(closeMenuTimeOut)
      setIsHovered(true)
    }
    const handleMouseLeave = () => {
      closeMenuTimeOut = setTimeout(() => setIsHovered(false), 500)
    }
    return {
      mouseEnter: handleMouseEnter,
      mouseLeave: handleMouseLeave
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      e.preventDefault()
      setIsHovered(!isHovered)
    }
  }
  const { mouseEnter, mouseLeave } = dualMouseHandler()
  const toLogControls = [
    {
      name: 'Iniciar Sesión',
      link: '/LogIn'
    },
    {
      name: 'Registrarse',
      link: '/Signup'
    }
  ]
  const loggedControls = [
    {
      name: 'Perfil',
      link: `/profile/${userInfo.data?.id}`
    },
    {
      name: 'Cerrar Sesion',
      action: () => {
        dispatch(logout())
        navigate('/')
      }
    },
    {
      name: 'Creator',
      link: '/creator'
    }
  ]
  return (
    <div className='profileMenu'>
      <button
        aria-label='profile button'
        className='profile-icon-container'
        onClick={mouseEnter}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onKeyDown={handleKeyDown}
      >
        {isProfiliImgAvailable()}
      </button>
      {isHovered && (
        <ProfileOptions
          controls={userInfo.setted ? loggedControls : toLogControls}
          mouseHandler={{ mouseEnter, mouseLeave }} />
      )}
    </div>
  )
}

export default ProfileMenu
