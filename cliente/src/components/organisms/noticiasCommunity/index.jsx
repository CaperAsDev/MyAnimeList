import React from 'react'
import NoticiaListCommunity from '../../molecules/noticiaListCommunity'
import NoticiaItemCommunity from '../../atoms/noticiaItemCommunity'
import { noticias } from '../../pages/community/mockData'

const NoticiasCommunity = () => {
  return (
    <div className='noticias-community'>
      <div className='noticias-community__presentation'>
        <p className='noticias-community__presentation_title'>Noticias</p>
        <p className='noticias-community__presentation_description'>Mantente al día en el mundo del anime con nuestras últimas noticias.</p>
      </div>
      <div className='noticias-community__container'>
        <div className='noticias-community__container_main'>
          <p className='noticias-community__container_main_title'>Principales</p>
          <div className='noticias-community__container_main_list'>
            {
              noticias.map(item => {
                return <NoticiaItemCommunity key={item.id} item={item}/>
              })
            }
          </div>
        </div>
        <div className='noticias-community__container_last-news'>
          <p className='noticias-community__container_last-news_title'>Últimas noticias</p>
          <NoticiaListCommunity noticias={noticias}/>
        </div>
      </div>
    </div>
  )
}

export default NoticiasCommunity
