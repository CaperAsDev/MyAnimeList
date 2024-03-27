import React, { useState } from 'react'
import CatalogSearch from '../../molecules/catalogSearch'
import ResultsItem from '../../molecules/resultsItem'
import AsideCard from '../../molecules/asideCard'
import MangaDetail from '../../organisms/mangaDetail'
import { mangas, review } from './mockData'
import { filterItem } from './utils'

const Manga = () => {
  const [search, setSearch] = useState(false)
  const [value, setValue] = useState('')
  const [genre, setGenre] = useState('Genero')
  const [year, setYear] = useState('Año')
  const [listManga, setListManga] = useState([''])

  const topManga = mangas.slice(mangas.length - 5)
  const lastReviews = review.sort((a, b) => b.date - a.date).slice(review.length - 5)

  const handleChange = (e) => {
    setValue(e.target.value)
    if (e.target.value.length > 0) {
      setSearch(true)
      setListManga(filter(e.target.value))
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
        setListManga(filterItem(genre, year, searchArray))
      } else {
        setListManga(filterItem(genre, year, mangas))
      }
    }
  }

  const filter = (valueFilter) => {
    const filterArray = mangas.filter(manga => {
      return manga.title.toLowerCase().includes(valueFilter.toLowerCase()) ||
            manga.author.toLowerCase().includes(valueFilter.toLowerCase()) ||
            manga.genre.toLowerCase().includes(valueFilter.toLowerCase()) ||
            manga.year.toString().includes(valueFilter.toString())
    })
    return filterArray
  }

  return (
    <section id='manga-section'>
      <div className='manga-section__container'>
        <CatalogSearch value={value} handleChange={handleChange} genre={genre} setGenre={setGenre} year={year} setYear={setYear} handleSubmit={handleSubmit}/>
        {
          !search
            ? <MangaDetail/>
            : <ResultsItem array={listManga} />
        }
      </div>
      <div className='manga-section__aside'>
        <AsideCard title={'Top Manga'} format={'top'} array={topManga}/>
        <AsideCard title={'Últimas reseñas'} format={'last-review'} array={lastReviews}/>
      </div>
    </section>
  )
}

export default Manga
