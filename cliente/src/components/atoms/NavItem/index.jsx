import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem ({ name, link }) {
  return (
    <li>
      <NavLink to={link} className='navbar__item' >
        {name}
      </NavLink>
    </li>
  )
}

export default NavItem
