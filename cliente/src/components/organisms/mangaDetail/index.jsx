import React from 'react'
import Section from '../../molecules/section'
import Carousel from '../../molecules/carousel'
import AnimeCard from '../../molecules/animeCard'
import ItemResult from '../../atoms/itemResult'
import { mangas } from '../../pages/manga/mockData'

const MangaDetail = () => {
  const finishedMangas = mangas.filter(item => item.status === 'Finished')
  const adventureMangas = mangas.filter(item => item.genre === 'Misterio')
  const oldMangas = mangas.sort((a, b) => b.year - a.year)

  return (
    <div className='manga-detail'>
      <Section title='Mangas terminados'>
        <Carousel>
          {finishedMangas.map((item, index) => (
            <AnimeCard key={index} item={item}/>
          ))}
        </Carousel>
      </Section>
      <Section title='Misterio y más misterio'>
        <Carousel>
          {adventureMangas.map((item, index) => (
            <AnimeCard key={index} item={item}/>
          ))}
        </Carousel>
      </Section>
      <Section title='Últimos lanzamientos'>
        <Carousel>
          {oldMangas.map((item, index) => (
            <AnimeCard key={index} item={item}/>
          ))}
        </Carousel>
      </Section>
      <Section title='Todos los animes'>
        <div className='all-mangas'>
          {
            mangas.map((anime, index) => {
              return <ItemResult key={index} item={anime}/>
            })
          }
        </div>
      </Section>
    </div>
  )
}

export default MangaDetail
