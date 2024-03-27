import React from 'react'
import ItemResult from '../../atoms/itemResult'

const ResultsItem = ({ array }) => {
  return (
    <div className='results-item'>
      <p>{array.length} resultados</p>
      <div className='results-item_list'>
        {
          array.map((item, index) => {
            return <ItemResult key={index} item={item} />
          })
        }
      </div>
    </div>
  )
}

export default ResultsItem
