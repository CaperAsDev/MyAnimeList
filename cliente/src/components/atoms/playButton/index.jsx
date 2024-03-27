import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
export default function PlayButton () {
  return (
    <>
      <div className="play-button__container">
        <BsPlayCircle></BsPlayCircle>
        <span>Play</span>
      </div>
    </>
  )
}
