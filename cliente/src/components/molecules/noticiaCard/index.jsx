import React from 'react'
function NoticiaCard ({ item }) {
  return (
    <a href="#">
      <div className="news">
        <div className="news__flex">
          <img className='news__image'src={item.image} alt='Portada de noticia' />
          <div className="news__text">
            <h3 className="news__title">{item.title}</h3>
            <p className="news__content">{item.content}</p>
          </div>
        </div>
      </div>
    </a>
  )
}
export default NoticiaCard
