import React, { useState } from 'react'
import { BsHeart, BsThreeDots } from 'react-icons/bs'
import StarRating from '../../atoms/starRating'

const ReviewCardCommunity = () => {
  const [moreOptions, setMoreOptions] = useState(false)

  const review = [
    {
      id: 1,
      img: 'https://i.redd.it/zft6p1teey7b1.jpg',
      titleAnime: 'Berserk (1989)',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis mi at est cursus, sed lacinia tellus pulvinar. In elit purus, dictum id auctor vel, sodales et est. Etiam facilisis leo sed mi tincidunt, sed interdum risus aliquam. Sed quis maximus orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis mi at est cursus, sed lacinia tellus pulvinar. In elit purus, dictum id auctor vel, sodales et est. Etiam facilisis leo sed mi tincidunt, sed interdum risus aliquam. Sed quis maximus orci.',
      user: '@usuario_1',
      imgUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU',
      date: '8 de octubre, 2023',
      score: 9.7
    },
    {
      id: 2,
      img: 'https://i.redd.it/zft6p1teey7b1.jpg',
      titleAnime: 'Berserk (1989)',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis mi at est cursus, sed lacinia tellus pulvinar. In elit purus, dictum id auctor vel, sodales et est. Etiam facilisis leo sed mi tincidunt, sed interdum risus aliquam. Sed quis maximus orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis mi at est cursus, sed lacinia tellus pulvinar. In elit purus, dictum id auctor vel, sodales et est. Etiam facilisis leo sed mi tincidunt, sed interdum risus aliquam. Sed quis maximus orci.',
      user: '@usuario_2',
      imgUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU',
      date: '8 de octubre, 2023',
      score: 3
    },
    {
      id: 3,
      img: 'https://i.redd.it/zft6p1teey7b1.jpg',
      titleAnime: 'Berserk (1989)',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis mi at est cursus, sed lacinia tellus pulvinar.',
      user: '@usuario_1',
      imgUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU',
      date: '8 de octubre, 2023',
      score: 6.7
    }
  ]

  return (
    <div className='reviews-community-list'>
      {
        review.map(review => {
          return <div className='review-card-community' key={review.id}>
            <div className='review-card-community__poster'>
              <img src={review.img} alt=""/>
            </div>
            <div className='review-card-community__info'>
              {
                review.score &&
                                <div className='review-card-community__info_score'>
                                  <StarRating itemScore={review.score}/>
                                </div>
              }
              <div className='review-card-community__info_review'>
                <p className='review-card-community__info_titleAnime'>{review.titleAnime}</p>
                <p className='review-card-community__info_descriptionReview'>{review.review}</p>
              </div>
              <div className='review-card-community__info_data'>
                <div className='review-card-community__info_user'>
                  <div className='review-card-community__info_user_profile'>
                    <img src={review.imgUser}/>
                    <p>Reseña por <a href="#">{review.user}</a></p>
                  </div>
                  <p className='review-card-community__info_user_date'>{review.date}</p>
                </div>
                <div className='review-card-community__info_more-info'>
                  <div className='review-card-community__info_likes'>
                    <BsHeart />
                    <p>
                      {
                        review.like
                          ? review.like + ''
                          : '0 '
                      }
                                            likes
                    </p>
                  </div>
                  <div className='review-card-community__info_button'>
                    <button onClick={() => setMoreOptions(!moreOptions)}><BsThreeDots/></button>
                    {
                      moreOptions &&
                                            <div className='more-options'>
                                              <p>Reportar</p>
                                            </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default ReviewCardCommunity
