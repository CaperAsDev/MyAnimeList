import React from 'react'
import FormInput from './formInput'

function CreateAnimeForm ({ handleSubmit }) {
  return (
    <article className='forms-container'>
      <form className='creator__form' onSubmit={handleSubmit}>
        <FormInput type='text' name='title' label='Nombre' />
        <label className='creator__label'>
            Sinopsis
          <textarea
            className='creator__textArea'
            name='synopsis'
            rows='5'
            cols='20'
          />
        </label>
        <fieldset>
          <legend className='creator__legend'>Estado del anime</legend>
          <div className='creator__radio-container'>
            <FormInput
              type='radio'
              name='status'
              label='Finalizada'
              value='Finished Airing'
              className='creator__label-radio'
            />
            <FormInput
              type='radio'
              name='status'
              label='En emisión'
              value='Airing'
              className='creator__label-radio'
            />
          </div>
        </fieldset>
        <label>
        Temporada
          <select name="season">
            <option value="">--Selecciona la temporada--</option>
            <option value="winter">Invierno</option>
            <option value="summer">Verano</option>
            <option value="autumn">Otoño</option>
            <option value="spring">Primavera</option>
          </select>
        </label>
        <FormInput type="date" name='airedfrom' label='Emitido desde' />
        <FormInput type="date" name='airedto' label='Emitido hasta' />
        <FormInput type="file" name='poster' label='Poster' />
        <FormInput type="file" name='banner' label='Banner' />
        <FormInput type="url" name='trailer' label='Trailer Link' />
        <FormInput type="number" name='episodes' label='Episodes' />

        <button
          className='creator__submit-button'
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* <article>
        <form className='creator__form secondary' ref={genreFormref} >
          <fieldset className='genres-container'>
            <legend>Generos</legend>
            {genres.length > 0
              ? (genres.map((genre, index) => (
                <label key={index} className='genre-label'>
                  {genre.title}
                  <input type='checkbox' name={genre.title} value={genre.title} className='creator__label-radio' />
                </label>
              )))
              : <span>Agrega generos para seleccionar</ span>
            }
          </fieldset>
        </form>
        <form className='creator__form secondary' onSubmit={handleAddGenre}>
          <label className='creator__label'>
            <span>Titulo del genero</span>
            <input
              type="text"
              name='title'
              value={genreTitle}
              onChange={(e) => setGenreTitle(e.target.value)}
            />
          </label>
          <button
            className='secondary-button'
            type="submit"
          >
        Agregar Genero
          </button>
        </form>
      </article> */}
    </article>
  )
}

export default CreateAnimeForm
