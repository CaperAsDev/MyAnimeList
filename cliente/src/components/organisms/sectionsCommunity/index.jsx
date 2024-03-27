import React, { useState } from 'react'
import NoticiaListCommunity from '../../molecules/noticiaListCommunity'
import { reseñas } from '../../pages/home/mockData'
import ReviewCard from '../../molecules/reviewCard'
import { animes, mangas, noticias } from '../../pages/community/mockData'
import PosterCardCommunity from '../../atoms/posterCardCommunity'
import { arrayLimit } from './functions'
import ButtonAllAnimes from '../../atoms/buttonAllAnimes'

const SectionsCommunity = () => {
  const [allAnimes, setAnimes] = useState(false)

  const animeArray = arrayLimit(animes, 4)
  const mangaArray = arrayLimit(mangas, 4)
  const noticiasArray = arrayLimit(noticias, 6)

  return (
    <div className='community-general'>
      <div className='community-general__presentation'>
        <p className='community-general__presentation_title'>Lo último de lo último</p>
        <p className='community-general__presentation_description'>Siempre fresco, siempre nuevo: las últimas sorpresas en nuestro mundo de anime.</p>
      </div>
      <div className='community-general-container'>
        {/* principal */}
        <div className='community-general__main'>
          <p className='community-general__main_title'>Últimas noticias</p>
          <NoticiaListCommunity noticias={!allAnimes ? noticiasArray : noticias} />
          <ButtonAllAnimes allAnimes={allAnimes} setAnimes={setAnimes}/>
        </div>
        {/* secundario */}
        <div className="community-general__aside">
          <div className='community-general__aside_reviews'>
            <p className='community-general__aside_reviews_title'>Últimas Reseñas</p>
            <div className='community-general__aside_reviews_list'>
              {
                reseñas.map(item => {
                  return <ReviewCard key={item.id} item={item}/>
                })
              }
            </div>
          </div>
          <div className="community-general__aside_animes">
            <p className='community-general__aside_animes_title'>Últimos animes añadidos</p>
            <div className='community-general__aside_animes_list'>
              {
                animeArray.map(item => {
                  return <PosterCardCommunity key={item.id} item={item} />
                })
              }
            </div>
          </div>
          <div className="community-general__aside_mangas">
            <p className='community-general__aside_mangas_title'>Últimos mangas añadidos</p>
            <div className="community-general__aside_mangas_list">
              {
                mangaArray.map(item => {
                  return <PosterCardCommunity key={item.id} item={item} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionsCommunity
