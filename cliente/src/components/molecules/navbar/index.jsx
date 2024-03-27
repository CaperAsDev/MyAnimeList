import React from 'react'
import NavItem from '../../atoms/NavItem'
export default function NavBar ({ navbar }) {
  const navItems = [
    {
      name: 'Anime',
      link: '/Anime'
    },
    {
      name: 'Manga',
      link: '/Manga'
    },
    {
      name: 'Comunidad',
      link: '/Comunidad'
    }
  ]
  return (
    <nav className={`navbar-container ${navbar && 'isActive'}`}>
      <ul className='navbar__list'>
        {navItems.map(navItem =>
          (<NavItem name={navItem.name} link={navItem.link} key={navItem.name}/>)
        )}
      </ul>
    </nav>
  )
}
