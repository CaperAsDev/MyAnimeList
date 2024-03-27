import React from 'react'
import NoticiaItemCommunity from '../../atoms/noticiaItemCommunity'

const NoticiaListCommunity = ({ noticias }) => {
  return (
    <div className='noticias-list-community'>
      {
        noticias && noticias.map(item => {
          return <NoticiaItemCommunity key={item.id} item={item}/>
        })
      }
    </div>
  )
}

export default NoticiaListCommunity
