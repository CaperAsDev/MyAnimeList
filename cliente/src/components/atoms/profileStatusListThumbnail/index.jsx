import React from 'react'

function ProfileStatusListThumbnail ({ status, list, clickhandler }) {
  return (
    <button
      data-list={list.title}
      className='statusThumbnail'
      onClick={clickhandler}
    >
      <div className='statusThumbnail__text-container'>
        <p className='statusThumbnail__text statusThumbnail__text--big'>{list.animes.length}</p>
        <p className='statusThumbnail__text statusThumbnail__text--small' >{list.title}</p>
      </div>
      <picture className='statusThumbnail__img-container'>
        <img
          className='statusThumbnail__img'
          src={
            status?.background_img ||
            'https://e1.pxfuel.com/desktop-wallpaper/369/604/desktop-wallpaper-awesome-anime-banner-cool-anime-banners.jpg'
          }
          alt=" top 1 status list background image" />
      </picture>
    </button>
  )
}

export default ProfileStatusListThumbnail
