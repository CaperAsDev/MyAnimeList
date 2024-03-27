import React from 'react'

const InputSelect = ({ value, options, status, keyName }) => {
  const [selectedValue, setSelectedValue, setGeneralStatus] = status
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value)
    setGeneralStatus((prev) => ({ ...prev, [keyName]: e.target.value }))
    // console.log(selectedValue)
  }
  return (
    <select
      value={selectedValue}
      onChange={handleSelectChange}
      className={`input-select select-${value}`}
    >
      <option>{value}</option>
      {
        options.map(option => {
          return <option key={option}>{option}</option>
        })
      }
    </select>
  )
}

export default InputSelect
