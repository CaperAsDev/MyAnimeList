import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

function SearchInput () {
  const [searchText, setSearchText] = useState('')
  const [isinputFocused, setIsInputFocused] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchText.trim() === '') { return }
    console.log(`Buscando: ${searchText}`)
  }

  const handleInputFocus = () => { setIsInputFocused(true) }
  const handleInputBlur = () => { setIsInputFocused(false) }
  const handleInputChange = (e) => { setSearchText(e.target.value) }

  return (
    <form className={`search-form ${isinputFocused && 'active'}`}>
      <label
        htmlFor="search"
        className='search-form__label'
      >
        <input
          type="text"
          name="search"
          id="search"
          value={searchText}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className='search-form__input'
        />
      </label>
      <button
        className='search-form__button'
        onClick={handleSearch}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      >
        <BsSearch/>
      </button>
    </form>
  )
}

export default SearchInput
