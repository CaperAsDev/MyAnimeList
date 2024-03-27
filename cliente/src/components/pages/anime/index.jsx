import React, { useState } from 'react'
import AsideCard from '../../molecules/asideCard'
import { anime, review } from './mockData'
import { animes } from '../../organisms/animeDetail/mockData'
import AnimeDetail from '../../organisms/animeDetail'
import CatalogSearch from '../../molecules/catalogSearch'
import ResultsItem from '../../molecules/resultsItem'
import { filterItem } from './utils'

const Anime = () => {
  const [search, setSearch] = useState(false)
  const [value, setValue] = useState('')
  const [genre, setGenre] = useState('Genero')
  const [year, setYear] = useState('Año')
  const [listAnime, setListAnime] = useState([''])

  const topAnime = anime.slice(anime.length - 5)
  const lastReviews = review.sort((a, b) => b.date - a.date).slice(review.length - 5)

  const handleChange = (e) => {
    setValue(e.target.value)
    if (e.target.value.length > 0) {
      setSearch(true)
      setListAnime(filter(e.target.value))
    } else {
      setSearch(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (genre !== 'Genero' || year !== 'Año') {
      setSearch(true)
      if (value.length > 0) {
        const searchArray = filter(value)
        setListAnime(filterItem(genre, year, searchArray))
      } else {
        setListAnime(filterItem(genre, year, animes))
      }
    }
  }

  const filter = (valueFilter) => {
    const filterArray = animes.filter(anime => {
      return anime.title.toLowerCase().includes(valueFilter.toLowerCase()) ||
            anime.author.toLowerCase().includes(valueFilter.toLowerCase()) ||
            anime.genre.toLowerCase().includes(valueFilter.toLowerCase()) ||
            anime.year.toString().includes(valueFilter.toString())
    })
    return filterArray
  }

  return (
    <section id='anime-section'>
      <div className='anime-section__container'>
        <CatalogSearch value={value} handleChange={handleChange} genre={genre} setGenre={setGenre} year={year} setYear={setYear} handleSubmit={handleSubmit}/>
        {
          !search
            ? <AnimeDetail/>
            : <ResultsItem array={listAnime} />
        }
      </div>
      <div className='anime-section__aside'>
        <AsideCard title={'Top Anime'} format={'top'} array={topAnime}/>
        <AsideCard title={'Últimas reseñas'} format={'last-review'} array={lastReviews}/>
      </div>
    </section>
  )
}

export default Anime
