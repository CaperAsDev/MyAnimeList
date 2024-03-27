import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const ButtonAllAnimes = ({ allAnimes, setAnimes }) => {
  return (
    <div className='all-animes'>
      {
        !allAnimes && <button className='button-all-animes' onClick={() => setAnimes(!allAnimes)}><BsChevronDown/></button>
      }
    </div>
  )
}

export default ButtonAllAnimes
