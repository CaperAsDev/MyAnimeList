import React, { useContext, useState } from 'react'
import InputSelect from '../../atoms/inputSelect'
import { UserSignUpContext } from '../../../context/UseSignUpContext'

const InputBirthDate = () => {
  const { setBirthday } = useContext(UserSignUpContext)
  const [day, setDay] = useState('Día')
  const [month, setMonth] = useState('Mes')
  const [year, setYear] = useState('Año')

  function For (first, last) {
    const forArray = []
    for (let i = first; i <= last; i++) {
      forArray.push(i)
    }
    return forArray
  }

  const options = [
    {
      key: 'dia',
      value: 'Día',
      options: For(1, 31),
      status: [day, setDay, setBirthday]
    },
    {
      key: 'mes',
      value: 'Mes',
      options: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      status: [month, setMonth, setBirthday]
    },
    {
      key: 'año',
      value: 'Año',
      options: For(1930, new Date().getFullYear()).reverse(),
      status: [year, setYear, setBirthday]
    }
  ]

  return (
    <div className='input-birthdate'>
      <p>Fecha de nacimiento</p>
      <div className='input-birthdate_options'>
        {
          options.map(option => (
            <InputSelect
              keyName={option.key}
              status={option.status}
              value={option.value}
              options={option.options}
              key={option.value}/>
          )
          )
        }
      </div>
    </div>
  )
}

export default InputBirthDate
