import React, { useContext, useEffect } from 'react'
import { HomeContext } from '../../../context/homecontext'
import HeroInfo from '../../molecules/heroHomeInfo'
import HeroCarousel from '../../atoms/heroCarousel'

import { mockData } from './mockData'

function HeroHomePage () {
  const { setCarouselItems, carouselItems, setIndexItemSelected, indexItemSelected } = useContext(HomeContext)
  const itemSelected = carouselItems[indexItemSelected]
  useEffect(() => {
    setCarouselItems(() => [...mockData])
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexItemSelected((prevIndex) =>
        ((prevIndex + 1) % mockData?.length)
      )
    }, 10000)
    return () => clearInterval(interval)
  }, [indexItemSelected])
  if (carouselItems.length > 0) {
    return (
      <section className='hero'>
        <div className='hero__bottom'>
          <HeroInfo/>
          <HeroCarousel />
        </div>
        <picture className='hero__img-container'>
          <img
            className='hero__img'
            src={itemSelected.banner_img}
            alt={itemSelected.title} />
        </picture>
      </section>
    )
  }
}

export default HeroHomePage
