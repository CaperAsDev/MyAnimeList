import React from 'react'
import { NavLink } from 'react-router-dom'
/* El componente funciona pero falta revisar navegacion con teclado porque no redirecciona al hacer enter o espacio */
function ProfileMenu ({ mouseHandler, controls }) {
  const { mouseEnter, mouseLeave } = mouseHandler
  return (
    <nav
      className='session-panel'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <ul className='session-panel__list'>
        {controls.map((control) => (
          <li key={control.name} className='session-panel__item'>
            {control.link
              ? (
                <NavLink
                  to={control.link}
                >
                  {control.name}
                </NavLink>
              )
              : (
                <button
                  className='session-panel__item'
                  onClick={control.action}
                >
                  {control.name}
                </button>
              )
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ProfileMenu
