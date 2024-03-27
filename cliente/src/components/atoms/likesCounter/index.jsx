import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

function LikesCounter ({ likes }) {
  return (
    <div className='likes-counter'>
      <AiFillHeart className='heart-icon'/>
      <p className='likes-counter__text'><span>{likes}</span> Likes</p>
    </div>
  )
}

export default LikesCounter
