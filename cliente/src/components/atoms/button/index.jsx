import React from 'react'

function Button ({ text, type = 'light', children, className = '', clickHandler }) {
  const insideClickHandler = (e) => {
    e.preventDefault()
    clickHandler(e)
  }
  return (
    <button
      className={`button ${type} ${className}`}
      onClick={insideClickHandler}
    >
      {children}{/* ICON */}
      <span className='button__text'>
        {text}
      </span>
    </button>
  )
}

export default Button
