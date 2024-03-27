import React from 'react'
import { NavLink } from 'react-router-dom'
import MangaCover from '../../atoms/mangaCover'

function ModalListContainer ({ list }) {
  return (
    <div className='modal-content__container'>
      <h2 className='modal-content__title'>{`Estas son las series que tienes en "${list.title}"`}</h2>
      <section className='modal-content__list-container'>
        {list.animes.map((anime) => {
          const imageUrl = anime.anime.animeImage.find(image => image.category === 'poster').url
          const cover = { url: imageUrl, title: anime.anime.title }
          return (
            <NavLink
              key={anime.anime.id}
              to={`/anime/${anime.anime.id}`}
              className='modal-content__item'
            >
              <MangaCover posterImage={cover}/>
            </NavLink>
          )
        })}
      </section>
    </div>
  )
}

export default ModalListContainer
