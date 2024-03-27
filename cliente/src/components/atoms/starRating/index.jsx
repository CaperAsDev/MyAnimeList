import React from 'react'
import { BsStarFill } from 'react-icons/bs'

function StarRating ({ itemScore }) {
  const rateScale = [
    {
      name: 'bad',
      points: 4
    },
    {
      name: 'average',
      points: 6
    },
    {
      name: 'good',
      points: 7
    },
    {
      name: 'very-good',
      points: 9
    },
    {
      name: 'excelent',
      points: 10
    }
  ]

  const status = rateScale
    .find(level => {
      return level.points >= itemScore
    })
  return (
  // <div className="rating">
    <div className={`rating rating--${status?.name}`}>
      <BsStarFill className='rating__star'/>
      <span className='rating__points'>
        {Number(itemScore).toFixed(1)}
      </span>
    </div>
  )
}

export default StarRating
