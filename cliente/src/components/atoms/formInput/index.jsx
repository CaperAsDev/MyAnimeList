import React, { useState } from 'react'

const FormInput = ({ name, value, type, onChange }) => {
  const [inputFocused, setInputFocused] = useState(false)

  return (
    <div className='form-input'>
      <input type={type} id={name} name={name} onChange={(e) => onChange(e.target.value)} onFocus={() => setInputFocused(true)} onSelect={() => setInputFocused(true)}/>
      <label htmlFor={name} className={`label-input ${inputFocused ? 'label-input-focused' : ''}`}>{value}</label>
    </div>
  )
}

export default FormInput
