import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function SecondaryForm ({ apiConnection, title, reference }) {
  const { token } = useSelector(({ user }) => user.info)
  const [response, status, fetch] = apiConnection()
  const [itemTitle, setItemTitle] = useState('')
  const [apiInfo, setApiInfo] = useState('')

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  useEffect(() => {
    if (token) {
      fetch('', {}, config)
    }
  }, [token])

  useEffect(() => {
    if (status.success) {
      setApiInfo(response)
    }
  }, [status])

  const handleAddItem = (e) => {
    e.preventDefault()
    setApiInfo((prev) => [...prev, { title: itemTitle }])
    setItemTitle('')
  }

  return (
    <article>
      <form className='creator__form secondary' ref={reference}>
        <fieldset className='genres-container'>
          <legend>{title}</legend>
          {apiInfo.length > 0
            ? (
              apiInfo.map((item) => (
                <label key={item.title} className='genre-label'>
                  {item.title}
                  <input type='checkbox' name={item.title} value={item.title} className='creator__label-radio' />
                </label>
              ))
            )
            : (
              <span>Ingresa un nuevo Item</span>
            )}
        </fieldset>
      </form>
      <form className='creator__form secondary' onSubmit={handleAddItem}>
        <label className='creator__label'>
          <span>Nuevo Item</span>
          <input
            type="text"
            name='title'
            value={itemTitle}
            onChange={(e) => setItemTitle(e.target.value)}
          />
        </label>
        <button
          className='secondary-button'
          type="submit"
        >
        Agregar Item
        </button>
      </form>
    </article>

  )
}

export default SecondaryForm
