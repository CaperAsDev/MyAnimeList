import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlinePlayCircle } from 'react-icons/ai'

import MangaCover from '../../atoms/mangaCover'
import StarRating from '../../atoms/starRating'
import Button from '../../atoms/button'
import ItemStatusSelector from '../../molecules/itemStatusSelector'
import Modal from '../../atoms/modal'
import AddToListForm from './addToListForm'

import { useSelector } from 'react-redux'

function ItemDetail () {
  const animeState = useSelector(({ animeDetail }) => animeDetail)
  const user = useSelector(({ user }) => user.info)

  const [addToListModalOpen, setAddToListModalOpen] = useState(false)

  const addToListHandler = () => {
    setAddToListModalOpen(true)
  }

  if (animeState.setted) {
    const animeInfo = animeState.info
    return (
      <main className='item-detail'>
        {addToListModalOpen && (
          <Modal toClose={setAddToListModalOpen}>
            <AddToListForm
              toCloseModal={setAddToListModalOpen}
            />
          </Modal>
        )}
        <MangaCover posterImage={{
          url: animeInfo.animeImage.find(image => image.category === 'poster').url,
          title: animeInfo.title
        }}/>
        <section className='item-detail__rigth-section'>
          <div className='item-detail__upper'>
            <header className=' item-detail__header'>
              <h2 className='item-detail__title' >{animeInfo.title}</h2>
              <div className='item-detail__short-info'>
                <StarRating itemScore={animeInfo?.score || 5.0 }/>
                <p className='item-detail__genres'>
                  {animeInfo.genres.map(genre => genre.title).join(', ')}
                </p>
              </div>
              {user.setted && (
                <div className='item-detail__buttons' >
                  <ItemStatusSelector />
                  <Button
                    type='filled'
                    text='Agregar a lista'
                    clickHandler={addToListHandler}
                  >
                    <AiOutlinePlus />
                  </Button>
                </div>
              )}
            </header>
            <picture className='item-detail__trailer'>
              <img className='item-detail__trailer-img'
                src={animeInfo.animeImage.find(image => image.category === 'banner').url}
                alt={`trailer de ${animeInfo.title}`} />
              <Button className='play-button' text='Play'>
                <AiOutlinePlayCircle />
              </Button>
            </picture>
          </div>
          <section className='item-detail__synopsis'>
            {/* {anime.description.map((paragraph) => (
                        <p key={paragraph.length} className='item-detail__text'>
                            {paragraph}
                        </p>
                    ))} */}
            <p className='item-detail__text'>{animeInfo.synopsis}</p>
          </section>
        </section>
      </main>
    )
  } else {
    return (
      <div>...cargando</div>
    )
  }
}

export default ItemDetail
