import React, { useRef } from 'react'
import CarouselArrow from '../../atoms/carouselArrow'
/* Pendiente revisar accesibilidad de navegacion con teclado, los items que estan fuera de vista no deberian ser seleccionables con el tab, remover tabIndex cuando salgan de vista y poner cuando entren */

function Carousel ({ children }) {
  const container = useRef(null)
  const handleLeftArrow = (e) => {
    e.preventDefault()
    const carouselWidth = container.current.clientWidth
    container.current.scrollLeft -= carouselWidth
  }
  const handleRightArrow = (e) => {
    e.preventDefault()
    const carouselWidth = container.current.clientWidth
    container.current.scrollLeft += carouselWidth
  }
  return (
    <section className='carousel'>
      <CarouselArrow direction='left' handler={handleLeftArrow}/>
      <div className='carousel__content-container' ref={container}>
        {children}
      </div>
      <CarouselArrow direction='right' handler={handleRightArrow} />
    </section>
  )
}

export default Carousel
