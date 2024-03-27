import React from 'react'
import InfoBoxItem from '../../atoms/infoBoxItem'
import { useSelector } from 'react-redux'

function AnimeDetailInfo () {
  const animeState = useSelector(({ animeDetail }) => animeDetail)

  if (animeState.setted) {
    const animeInfo = animeState.info
    const info = {
      type: animeInfo.type,
      episodes: animeInfo.episodes,
      genres: animeInfo.genres.map(genre => ({ title: genre.title, id: genre.id })),
      studios: animeInfo.studios.map(studio => ({ title: studio.title, id: studio.id })),
      producers: animeInfo.producers.map(producer => ({ title: producer.title, id: producer.id })),
      status: animeInfo.status,
      aired: {
        from: new Date(animeInfo.airedfrom).toDateString(),
        to: new Date(animeInfo.airedto).toDateString()
      }
    }

    const infoArray = Object.entries(info)
    return (
      <section className='info-box'>
        <header className='info-box__header'>
          <h3 className='info-box__title'>Información</h3>
        </header>
        <div className='info-box__info-container'>
          {infoArray.map(info => (
            <InfoBoxItem key={info[0]} info={info} />
          ))}
        </div>
      </section>
    )
  } else {
    return (
      <div>
        ...cargando
      </div>
    )
  }
}

export default AnimeDetailInfo
