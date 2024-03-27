import React from 'react'

const ButtonsSectionsCommunity = ({ section, setSection, setSelectedSection }) => {
  const handleSections = (sectionName) => {
    setSection(!section)
    if (sectionName === 'noticias') setSelectedSection('noticias')
    else if (sectionName === 'reseñas') setSelectedSection('reviews')
    else setSection(false)
  }

  return (
    <div className='sections-community__buttons'>
      <button className='sections-community__buttons_noticias' onClick={() => handleSections('noticias')}>Noticias</button>
      <button className='sections-community__buttons_reseñas' onClick={() => handleSections('reseñas')}>Reseñas</button>
    </div>
  )
}

export default ButtonsSectionsCommunity
