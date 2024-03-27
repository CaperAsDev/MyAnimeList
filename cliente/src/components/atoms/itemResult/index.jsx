import React from 'react'

const ItemResult = ({ item }) => {
  return (
    <div className='item-result'>
      <div className='item-result_poster'><img src={item.image} alt="" /></div>
      <p className='item-result_title'>{item.title}</p>
    </div>
  )
}

export default ItemResult
