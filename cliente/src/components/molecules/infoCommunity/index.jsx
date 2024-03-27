import React from 'react'

const InfoCommunity = () => {
  const data = [
    {
      type: 'anime',
      name: 'Animes',
      total: 1000
    },
    {
      type: 'manga',
      name: 'Mangas',
      total: 100
    },
    {
      type: 'users',
      name: 'Usuarios',
      total: 300
    }
  ]

  return (
    <div className='info-community'>
      {
        data.map(data => {
          return (
            <div className={`info-community__data ${data.type}`} key={data.type}>
              <p className='info-community__data_total'>{data.total}</p>
              <p className='info-community__data_title'>{data.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default InfoCommunity
