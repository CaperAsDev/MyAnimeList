import React from 'react'
import Button from '../../atoms/button'

function HomeBottomBanner () {
  return (
    <section className='banner'>
      <picture className='banner__image-container'>
        <img className='banner__image' src="../../../../image 27.png" alt="Luffy" />
      </picture>
      <div className='banner__content-container'>
        <header className='banner__header'>
          <h3 className='banner__title'>Revisa todo nuestro catálogo</h3>
        </header>
        <div className='banner__buttons-container'>
          <Button text='Anime' type='light' className='button-banner' ></Button>
          <Button text='Manga' type='light' className='button-banner' ></Button>
        </div>
      </div>
    </section>
  )
}

export default HomeBottomBanner
