import React from 'react'

const NoticiaItemCommunity = ({ item }) => {
  return (
    <div className="noticia-item-community">
      <picture className='noticia-item-img'>
        <img src={item.img}/>
      </picture>
      <div className='noticia-item-description'>
        <p className='noticia-item-description__date'>{item.date}</p>
        <p className='noticia-item-description__title'>{item.title}</p>
        <p className='noticia-item-description__subtitle'>{item.subtitle}</p>
        <p className='noticia-item-description__author'>{item.author}</p>
      </div>
    </div>
  )
}

export default NoticiaItemCommunity
