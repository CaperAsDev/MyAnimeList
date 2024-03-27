import React, { useState } from 'react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

const TopItem = ({ item, index }) => {
  const [save, setSave] = useState(false)

  const handleClick = () => {
    setSave(!save)
  }

  return (
    <div className='top-item'>
      <p className='top-item_index'>{index}</p>
      <img src={item.image}alt='poster'/>
      <div className='top-item_info'>
        <p className='top-item_info_title'>{item.title}</p>
        <p className='top-item_info_more'>{'12 episodios'}, {'2020'}</p>
      </div>
      <button className='top-item_button-save' onClick={handleClick}>{!save ? <BsBookmark/> : <BsBookmarkFill/> }</button>
    </div>
  )
}

export default TopItem
