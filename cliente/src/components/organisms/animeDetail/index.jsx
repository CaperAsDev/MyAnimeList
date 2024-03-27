import React from 'react'
import Section from '../../molecules/section'
import Carousel from '../../molecules/carousel'
import AnimeCard from '../../molecules/animeCard'
import { animes } from './mockData'
import ItemResult from '../../atoms/itemResult'

const AnimeDetail = () => {
  const newAnimes = animes.sort((a, b) => b.year - a.year)
  const adventureAnimes = animes.filter(item => item.genre === 'Aventura')
  const romanceAnimes = animes.filter(item => item.genre === 'Romance')
  const oldAnimes = animes.filter(item => item.year < 2003).reverse()

  return (
    <div className='anime-detail'>
      <Section title='Últimos añadidos'>
        <Carousel>
          {newAnimes.map((item, index) => (
            <AnimeCard key={index} item={item}/>
          ))}
        </Carousel>
      </Section>
      <Section title='Aventuras que no te puedes perder'>
        <Carousel>
          {adventureAnimes.map((item, index) => (
            <AnimeCard key={index} item={item}/>
          ))}
        </Carousel>
      </Section>
      <Section title='Clásicos infaltables'>
        <Carousel>
          {oldAnimes.map((item, index) => (
            <AnimeCard key={index} item={item}/>
          ))}
        </Carousel>
      </Section>
      <Section title='Romance en el aire...'>
        <Carousel>
          {romanceAnimes.map((item, index) => (
            <AnimeCard key={index} item={item}/>
          ))}
        </Carousel>
      </Section>
      <Section title='Todos los animes'>
        <div className='all-animes'>
          {
            animes.map((anime, index) => {
              return <ItemResult key={index} item={anime}/>
            })
          }
        </div>
      </Section>
    </div>
  )
}

export default AnimeDetail
