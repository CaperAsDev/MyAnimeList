import React from 'react'
import StarSlider from '../../atoms/starSlider'

const SliderCommunityInfo = () => {
  const sliderInfo = [
    'anime',
    'manga',
    'comunidades',
    'reseñas',
    'noticias',
    'tendencias'
  ]

  return (
    <div className='slider-community'>
      <div className='slider-community-infinite'>
        <div className='slider-community-infinite__track'>
          {
            sliderInfo.map(info => {
              return (
                <div className='slider-community-infinite__slide' key={info}>
                  <p>{info}</p>
                  <StarSlider />
                </div>
              )
            })
          }
          {
            sliderInfo.map(info => {
              return (
                <div className='slider-community-infinite__slide' key={info}>
                  <p>{info}</p>
                  <StarSlider />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='slider-community-secondary'></div>
    </div>
  )
}

export default SliderCommunityInfo
