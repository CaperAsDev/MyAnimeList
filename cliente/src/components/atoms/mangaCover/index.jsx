import React from 'react'
export default function MangaCover ({ posterImage }) {
  console.log(posterImage)
  return (
    <div className='cover'>
      <img className='cover__image' src={posterImage?.url} alt={`portada de ${posterImage?.title}`} />
      <div className="cover__gradient">

      </div>
    </div>
  )
}
