import React from 'react'
export default function Section ({ title, children }) {
  const firstWord = title?.split(' ')[0]
  return (
    <section className='section'id={`section-${title}`} >
      <header className='section__header'>
        <span className='section-title__shadow'>
          {firstWord}
        </span>
        <h3 className='section-title'>{title}</h3>
      </header>
      <div className='section__content-container'>
        {children}
      </div>
    </section>
  )
}
