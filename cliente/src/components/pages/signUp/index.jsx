import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

import BackToTop from '../../atoms/BackToTop'
import Form from '../../organisms/Form'
import FormNextSignUp from '../../organisms/formNextSignUp'
import { UserSignUpContext } from '../../../context/UseSignUpContext'
import { SignUpAPI } from '../../../apiConnection'

const SignUp = () => {
  const {
    name,
    setName,
    mail,
    setMail,
    password,
    setPassword,
    nickname,
    setNickname,
    birthday,
    profileImg
  } = useContext(UserSignUpContext)

  const [signupResponse, signupStatus, signupFetch] = SignUpAPI()

  const [confirmPassword, setConfirmPassword] = useState(null)
  const [next, setNext] = useState(false)

  const signupForm = {
    type: 'signup',
    title: 'Crea una cuenta',
    description: 'Descubre anime y manga, sigue tu progreso, obtén recomendaciones y lee las reseñas.',
    form: [
      {
        name: 'name-signup',
        type: 'text',
        value: 'Ingresar nombre',
        onChange: setName
      },
      {
        name: 'mail-signup',
        type: 'email',
        value: 'Ingresar mail',
        onChange: setMail
      },
      {
        name: 'password-signup',
        type: 'password',
        value: 'Ingresar contraseña',
        onChange: setPassword
      },
      {
        name: 'confirm_password-signup',
        type: 'password',
        value: 'Confirmar contraseña',
        onChange: setConfirmPassword
      }
    ],
    button: {
      submit: 'Siguiente',
      span: '¿Ya estás registrado?',
      link: 'Inicia sesión',
      path: '/login'
    }
  }

  const handleNext = (e) => {
    e.preventDefault()

    if ((password === confirmPassword) && (name, mail, password) != null) {
      setNext(true)
    } else alert('Los datos ingresados no son correctos')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const dataColected = {
      name,
      email: mail,
      password,
      profilePicture: profileImg,
      nickname,
      birthday
    }
    console.log('Data colected from signup form:', dataColected)

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', mail)
    formData.append('password', password)
    formData.append('profilePicture', profileImg)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    signupFetch('/', formData, config)
    console.log(signupStatus, signupResponse)
    console.log('Registrado :)')
  }

  return (
    <section id='sign-up'>
      <div className='sign-up_page'>
        {signupStatus.success && (
          <Navigate to='/Login'/>
        )}
        {signupStatus.error && (
          toast.error('No logramos registrarte')
        )}
        <Toaster />
        <BackToTop/>
        {
          !next
            ? <Form
              type={signupForm.type}
              title={signupForm.title}
              description={signupForm.description}
              form={signupForm.form}
              button={signupForm.button}
              onSubmit={handleNext}
              key={signupForm.title}/>
            : <FormNextSignUp setNickname={setNickname} handleSubmit={handleSubmit}/>
        }
      </div>
    </section>
  )
}

export default SignUp
