import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Form from '../../organisms/Form'
import BackToTop from '../../atoms/BackToTop'
import { LoginAPI } from '../../../apiConnection'

import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../../slices/userSlice'

const Login = () => {
  const dispatch = useDispatch()
  const isUserLogged = useSelector(({ user }) => user.info.setted)

  const [userInput, setUserInput] = useState(null)
  const [password, setPassword] = useState(null)
  const [loginResponse, loginStatus, loginFetch] = LoginAPI()

  const logIn = {
    type: 'login',
    title: 'Inicio de sesión',
    description: 'Descubre anime y manga, sigue tu progreso, obtén recomendaciones y lee las reseñas.',
    form: [
      {
        name: 'mail-or-user',
        type: 'text',
        value: 'Ingresar correo o nombre de usuario',
        onChange: setUserInput
      },
      {
        name: 'password',
        type: 'password',
        value: 'Ingresar contraseña',
        onChange: setPassword
      }
    ],
    button: {
      submit: 'Iniciar sesión',
      span: '¿No tienes una cuenta?',
      link: 'Regístrate',
      path: '/signup'
    }
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if ((userInput, password) != null) {
      const JSONData = JSON.stringify({
        email: userInput,
        password
      })
      const configJson = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      loginFetch('', JSONData, configJson)
    } else alert('Ingrese los datos correctamente')
  }
  useEffect(() => {
    if (loginStatus.success) {
      const userToLocal = { ...loginResponse.user, loginDate: Date.now(), token: loginResponse.token }

      dispatch(setUser(userToLocal))

      localStorage.setItem('user', JSON.stringify(userToLocal))
    }
  }, [loginResponse])

  return (
    <section id='login'>
      {isUserLogged && (
        <Navigate to='/' replace={true}/>
      )}
      <div className='login-page'>
        <BackToTop/>
        <Form
          type={logIn.type}
          title={logIn.title}
          description={logIn.description}
          form={logIn.form}
          button={logIn.button}
          onSubmit={onSubmit}
          key={logIn.title}/>
      </div>
    </section>
  )
}

export default Login
