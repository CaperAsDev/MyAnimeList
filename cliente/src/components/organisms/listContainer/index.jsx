import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { BsArrowLeft } from 'react-icons/bs'
import { TbEdit } from 'react-icons/tb'

import AnimeCard from '../../molecules/animeCard'

const ListContainer = ({ list }) => {
  const { data } = useSelector(({ user }) => user.info)
  return (
    <>
      <header className='list-container'>
        <Link to={`/profile/${data.id}`} className='back-to-profile'><BsArrowLeft/> Volver al perfil</Link>
        {/* para editar la lista */}
        <button className='edit-list'><TbEdit /></button>
        <div className='list-container_info'>
          <p className='list-container_title'>{list.title}</p>
          <p className='list-container_description'>{list.description}</p>
        </div>
      </header>
      <section className='list-container_items'>
        {
          list.animes.map(item => {
            return <AnimeCard key={item.id} item={item} />
          })
        }
      </section>
    </>
  )
}

export default ListContainer
