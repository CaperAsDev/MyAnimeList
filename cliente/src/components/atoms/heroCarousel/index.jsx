import React, { useContext } from 'react'
import { HomeContext } from '../../../context/homecontext'

/* aria-current: para comunicar cual slider esta seleccionado */
function HeroCarousel () {
  const {
    carouselItems,
    indexItemSelected,
    setIndexItemSelected
  } = useContext(HomeContext)
  const clickHandler = ({ e, index }) => {
    e.preventDefault()
    setIndexItemSelected(index)
  }
  const isSelected = (index) => {
    if (index === indexItemSelected) return true
    else return false
  }
  return (
    <article className='carousel-hero'>
      <picture className='carousel-hero__image-container'>
        <img className='carousel-hero__image' src={carouselItems[indexItemSelected].image} alt="" />
      </picture>
      <div className='carousel-hero__sliders-container'>
        {carouselItems.map((item, index) => (
          <button
            key={item.title}
            aria-label={`show slide ${index + 1} of ${carouselItems.length}`}
            className={`carousel-hero__slider ${isSelected(index) && 'selected'}`}
            onClick={(e) => clickHandler({ e, index })}
          ></button>
        ))}
      </div>
    </article>
  )
}

export default HeroCarousel
