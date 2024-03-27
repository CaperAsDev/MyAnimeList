import React, { useContext } from 'react'
import FormInput from '../../atoms/formInput'
import ButtonSubmit from '../../atoms/buttonSubmit'
import InputFile from '../../molecules/inputFile'
import InputBirthDate from '../../molecules/inputBirthDate'
import { UserSignUpContext } from '../../../context/UseSignUpContext'

const FormNextSignUp = ({ setNickname, handleSubmit }) => {
  const { profileImg, setProfileImg } = useContext(UserSignUpContext)
  const nextStep = {
    type: 'signup_next-step',
    title: 'Paso 2',
    description: '¡Ya casi terminamos! Solo unos datos más y tu perfil ya estará listo...',
    form: {
      name: 'user-signup',
      type: 'text',
      value: 'Crea tu usuario',
      onChange: setNickname
    },
    button: {
      submit: 'Registrarse'
    }
  }

  return (
    <div className={`form form-signup form-${nextStep.type}`}>
      <p className={`form-title form-${nextStep}_title`}>Paso 2</p>
      <p className={'form-description form-nextsignup_description'}>{nextStep.description}</p>
      <form onSubmit={handleSubmit}>
        <FormInput name={nextStep.form.name} type={nextStep.form.type} value={nextStep.form.value} onChange={nextStep.form.onChange}/>
        <InputBirthDate/>
        <InputFile status={[profileImg, setProfileImg]}/>
        <ButtonSubmit value={nextStep.button.submit}/>
      </form>
    </div>
  )
}

export default FormNextSignUp
