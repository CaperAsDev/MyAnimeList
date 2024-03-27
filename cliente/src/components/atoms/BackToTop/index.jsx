import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BackToTop = () => {
  return (
    <Link to={'/'} className='back-to-top'>
      <BsArrowLeft/>
      <p>Volver al inicio</p>
    </Link>
  )
}

export default BackToTop
