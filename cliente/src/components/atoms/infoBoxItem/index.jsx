import React from 'react'

const dataIs = (input) => {
  let typeOfData
  if (typeof (input) === 'string') {
    typeOfData = 'string'
  } else if (typeof (input) === 'number') {
    typeOfData = 'number'
  } else if (typeof (input) === 'object') {
    if (Array.isArray(input)) {
      typeOfData = 'array'
    } else {
      typeOfData = 'object'
    }
  }
  return typeOfData
}
const formatData = (data) => {
  const type = dataIs(data)
  if (type === 'string' || type === 'number') {
    return (
      <p className='info-item__data'>{data}</p>
    )
  } else if (type === 'array') {
    const typeOfcontent = dataIs(data[0])
    if (typeOfcontent === 'object') {
      const string = data.map(item => item.title).join(', ')
      return (
        <p className='info-item__data'>{string}</p>
      )
    }
  } else if (type === 'object') {
    const dataArray = Object.entries(data)
    return (
      <div className='info-item__data'>
        {dataArray.map(item => (
          <p
            key={item[0]}
            className='info-item__data--item'
          >
            <span>{item[0]}: </span>
            {item[1]}
          </p>
        ))}
      </div>
    )
  }
  return (
    <p className='info-item__data'>sin data</p>
  )
}

const capitalizeFirstLetter = (string) => {
  const firstLetter = string.charAt(0).toUpperCase()
  const newString = Array(...string).toSpliced(0, 1, firstLetter).join('')
  return newString
}

function InfoBoxItem ({ info }) {
  return (
    <div className='info-item'>
      <p className='info-item__title'>{capitalizeFirstLetter(info[0])}</p>
      {formatData(info[1])}
    </div>
  )
}

export default InfoBoxItem
