import React from 'react'
import CommunityInfo from '../../molecules/heroCommunityInfo'
import SliderCommunityInfinite from '../../molecules/sliderCommunityInfinite'

// slider presentacion y slider infinito
const HeroCommunity = () => {
  return (
    <div className='community-hero'>
      <CommunityInfo />
      <SliderCommunityInfinite />
    </div>
  )
}

export default HeroCommunity
