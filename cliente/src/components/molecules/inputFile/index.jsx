import React from 'react'
import { BsBoxArrowUp, BsCheck2 } from 'react-icons/bs'

const InputFile = ({ status }) => {
  const [image, setImage] = status

  const inputFileClick = (e) => {
    e.preventDefault()
    document.querySelector('#input-file').click()
  }

  const handleInput = (files) => {
    setImage(files[0])
  }

  return (
    <div className='input-file'>
      <p>Ingresa una foto de perfil</p>
      {
        image
          ? typeof image === 'string'
            ? <img src={image} className='input-file_preview' alt='profile image selected'/>
            : <img src={URL.createObjectURL(image)} className='input-file_preview'alt='profile image selected'/>
          : <div className='input-file_preview no-image'></div>
      }
      <div className='input-file_button'>
        <button type='button' onClick={inputFileClick}>{!image ? <BsBoxArrowUp/> : <BsCheck2/>}<p>{!image ? 'Seleccionar una imagen' : 'Imagen seleccionada'}</p></button>
        <input
          name='profilePicture'
          onChange={({ target: { files } }) => handleInput(files)}
          type='file'
          id='input-file'
          accept='image/*'
          hidden/>
      </div>
    </div>
  )
}

export default InputFile
