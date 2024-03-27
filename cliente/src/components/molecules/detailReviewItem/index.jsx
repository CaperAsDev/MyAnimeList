import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import StarRating from '../../atoms/starRating'
import LikesCounter from '../../atoms/likesCounter'

function DetailReviewItem ({ review }) {
  const [buttonClicked, setButtonClicked] = useState(false)
  const clickHandler = (e) => {
    e.preventDefault()
    setButtonClicked((prev) => !prev)
  }
  const clickReportHandler = (e) => {
    e.preventDefault()
    alert('reportado')
  }
  const blurHandler = () => {
    setButtonClicked(false)
  }
  return (
    <article className='detail-review-item'>
      <picture className='detail-review-item__img-container'>
        <img
          className='detail-review-item__img'
          src={review.user_img}
          alt={`${review.user_name} user profile image`}
          loading='lazy'
        />
      </picture>
      <div className='detail-review-item__body'>
        <header className='detail-review-item__header'>
          <div>
            <p className='detail-review-item__user-name'>{review.user_name}</p>
            <p className='detail-review-item__date'>{review.date}</p>
          </div>
          <StarRating itemScore={review.user_score}/>
        </header>
        <div className='detail-review-item__text-container'>
          {review.text.map((paragraph) => (
            <p
              className='detail-review-item__text'
              key={paragraph.length}
            >{paragraph}</p>
          ))}
        </div>
        <footer className='detail-review-item__footer'>
          <LikesCounter likes={review.likes}/>
          <button
            className='detail-review-item__options-button'
            aria-label='options'
            onClick={clickHandler}
          >
            <BsThreeDots/>
          </button>
          {buttonClicked && (
            <button
              onClick={clickReportHandler}
              autoFocus
              onBlur={blurHandler}
              className='report-button'
            >
                                Report
            </button>
          )}
        </footer>
      </div>
    </article>
  )
}

export default DetailReviewItem
