import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Footer () {
  return (
    <footer className='footer'>
      <p className='footer__title'>MyListManager</p>
      <nav className='footer__nav'>
        <ul className='footer__list'>
          <li className='footer__item'><NavLink to='/terminos_de_uso'>Términos de uso</NavLink></li>
          <li className='footer__item'><NavLink to='/politica'>Politica de privacidad</NavLink></li>
          <li className='footer__item'><NavLink to='/ayuda' >Ayuda</NavLink></li>
          <li className='footer__item'><NavLink to='/nosotros' >Sobre nosotros</NavLink></li>
        </ul>
      </nav>
      <p className='footer__note'>© 2023. Todos los derechos reservados</p>
    </footer>
  )
}
