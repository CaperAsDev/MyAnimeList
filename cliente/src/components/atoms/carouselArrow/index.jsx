import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

function CarouselArrow ({ direction, handler }) {
  return (
    <button
      className={`carousel__arrow arrow-${direction}`}
      onClick={handler}
    >
      {direction === 'left'
        ? (<IoIosArrowBack className='carousel__icon' />)
        : (<IoIosArrowForward className='carousel__icon' />)}

    </button>
  )
}

export default CarouselArrow
