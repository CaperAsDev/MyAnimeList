import React from 'react'
import { useParams } from 'react-router-dom'
import { CreateReviewApi } from '../../../apiConnection'

function ReviewForm () {
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  const { id } = useParams()

  const [createReviewResponse, createReviewStatus, createReviewFetch] = CreateReviewApi()

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
  const handleReviewSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    const userParsed = JSON.parse(user)

    const dataToSend = { ...data, animeId: id, userId: userParsed.id }
    console.log('DatatoSend from review Form: ', dataToSend)

    createReviewFetch('', JSON.stringify(dataToSend), config)
  }
  return (
    <form onSubmit={handleReviewSubmit} className='review-form'>
      <label className='review-form__label'>
        <span>Ingresa la reseña para este anime</span>
        <textarea name="content" cols="30" rows="5"></textarea>
      </label>
      <label className='review-form__label'>
        <span>Ingresa el puntaje del anime</span>
        <input name="rating" type='number' step="0.1" min='0' max='10'></input>
      </label>
      <button type='submit'>
              Añadir Reseña
      </button>
    </form>
  )
}

export default ReviewForm
