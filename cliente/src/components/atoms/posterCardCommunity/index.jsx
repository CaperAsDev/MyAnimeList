import React from 'react'

const PosterCardCommunity = ({ item }) => {
  return (
    <div className='poster-community'>
      <img src={item.img} alt=''/>
      <div className='poster-community_description'>
        <p>{item.title}</p>
        <p className='poster-community_description_info'>{item.type} - {item.status}</p>
      </div>
    </div>
  )
}

export default PosterCardCommunity
