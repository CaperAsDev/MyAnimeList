import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'

function CreateListForm ({ createListHandler }) {
  return (
    <form className='create-list-form' onSubmit={createListHandler}>
      <label>
        <span>
                      Nombre de la lista
        </span>
        <input
          name='title'
          type="text"
          placeholder='Best anime list!'
        />
      </label>
      <label>
        <span>
                      Una corta descripcion
        </span>
        <textarea
          name='description'
          placeholder='Best animes ever!'
        />
      </label>
      <button
        className='button filled'
        type='submit'
      >
        <BsPlusCircle />
        Crear nueva lista
      </button>
    </form>
  )
}

export default CreateListForm
