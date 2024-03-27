import React, { useState } from 'react'
import { BsSearch, BsSliders2 } from 'react-icons/bs'
import { genres, years } from './utils'

const CatalogSearch = ({ value, handleChange, genre, setGenre, year, setYear, handleSubmit }) => {
  const [filter, setFilter] = useState(false)

  return (
    <form className='catalog-search' onSubmit={handleSubmit}>
      <div className='catalog-search_container'>
        <span>Buscar</span>
        <div className='catalog-search_container_input'>
          <BsSearch/>
          <input type="text" value={value} placeholder='Buscar' onChange={handleChange}/>
        </div>
      </div>
      <button className='catalog-search_button-filters' onClick={() => setFilter(!filter)}><BsSliders2/></button>
      <div className={!filter ? 'filters' : 'isActive'}>
        <div className='catalog-search_container'>
          <span>Géneros</span>
          <div className='catalog-search_container_select'>
            <select value={genre} name='Géneros' onChange={(e) => setGenre(e.target.value)}>
              <option>Género</option>
              {
                genres.map((genre, index) => <option key={index} value={genre}>{genre}</option>)
              }
            </select>
          </div>
        </div>
        <div className='catalog-search_container'>
          <span>Año</span>
          <div className='catalog-search_container_select'>
            <select name='Año' value={year} onChange={(e) => setYear(e.target.value)}>
              <option>Año</option>
              {
                years.map((year, index) => <option key={index} value={year}>{year}</option>)
              }
            </select>
          </div>
        </div>
        <button className='catalog-search_button-submit' type="submit"><BsSearch/></button>
      </div>
    </form>
  )
}

export default CatalogSearch
