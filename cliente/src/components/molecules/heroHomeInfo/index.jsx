import React, { useContext } from 'react'
import { HomeContext } from '../../../context/homecontext'
import Button from '../../atoms/button'
import StarRating from '../../atoms/starRating'

import { AiOutlinePlus, AiOutlinePlayCircle } from 'react-icons/ai'

function HeroInfo () {
  const { indexItemSelected, carouselItems } = useContext(HomeContext)
  const itemSelected = carouselItems ? carouselItems[indexItemSelected] : false
  // console.log(itemSelected)
  if (itemSelected) {
    return (
      <article className='hero-info'>
        <p className='hero-info__title'>{itemSelected.title.toUpperCase()}</p>
        <div className='hero-info__data'>
          <StarRating itemScore={itemSelected.score} />
          <p className='hero-info__genres'>
            {itemSelected.genres.join(', ')}
          </p>
        </div>
        <p className='hero-info__synopsis'>{itemSelected.description}</p>
        <div className='hero-info__buttons'>
          <Button text={'Agregar a la lista'} type='filled'>
            <AiOutlinePlus/>
          </Button>
          <Button text={'Ver trailer'} type='light'>
            <AiOutlinePlayCircle/>
          </Button>
        </div>
      </article>
    )
  }
}

export default HeroInfo
