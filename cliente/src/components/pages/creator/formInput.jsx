import React from 'react'

function FormInput ({ name, type, label, value, className = 'creator__label', accept = 'image/*' }) {
  return (
    <label className={className}>
      <span>{label}</span>
      {type === 'file'
        ? (
          <input type={type} name={name} accept={accept} required />
        )
        : (
          <input type={type} name={name} value={value} required min='1' />
        ) }
    </label>
  )
}

export default FormInput
