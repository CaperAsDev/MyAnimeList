import React from 'react'
import { createPortal } from 'react-dom'

export default function Modal ({ children, toClose }) {
  const target = document.querySelector('#modal')
  if (target) {
    return createPortal(
      <div className="modal">
        {children}
        <div
          className="modal__background"
          onClick={() => { toClose(false) }}
        />
      </div>,
      target
    )
  } return null
}
