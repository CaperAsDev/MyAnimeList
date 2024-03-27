import React from 'react'
import StarRating from '../starRating'
import { month } from './Months'

const LastReviewItem = ({ item }) => {
  return (
    <div className='last-review-item'>
      <div className="last-review-item_rating">
        <StarRating itemScore={item.score}/>
      </div>
      <img className='last-review-item_poster' src={item.image}/>
      <div className="last-review-item_info">
        <div className='last-review-item_info_review'>
          <p className="last-review-item_info_review_title">{item.titleAnime}</p>
          <p className='last-review-item_info_review_opinion'>{item.review}</p>
        </div>
        <div className='last-review-item_info_data'>
          <div className='last-review-item_info_data_user'>
            <img src={item.imgUser} />
            <p className='last-review-item_info_data_user'>@{item.user}</p>
          </div>
          <p className='last-review-item_info_data_date'>{item.date.getDate()} de {month[item.date.getMonth() - 1]}, {item.date.getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}

export default LastReviewItem
