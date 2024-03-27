import React from 'react'
import FormInput from '../../atoms/formInput'
import ButtonSubmit from '../../atoms/buttonSubmit'
import { Link } from 'react-router-dom'

const Form = ({ type, title, description, form, button, onSubmit }) => {
  return (
    <div className={`form form-${type}`}>
      <p className={`form-title form-${type}_title`}>{title}</p>
      <p className={`form-description form-${type}_description`}>{description}</p>
      <form onSubmit={onSubmit}>
        {
          form && form.map(input => {
            return <FormInput name={input.name} type={input.type} value={input.value} onChange={input.onChange} key={input.name}/>
          })
        }
        <ButtonSubmit value={button.submit}/>
      </form>
      <div className={`button-form button-${type}`}>
        <p>{button.span}</p>
        <Link to={button.path}>{button.link}</Link>
      </div>
    </div>
  )
}

export default Form
