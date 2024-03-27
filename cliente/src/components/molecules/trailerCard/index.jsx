import React, { useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsPlayCircle } from 'react-icons/bs'
import Button from '../../atoms/button'
export default function TrailerCard ({ item }) {
  const [isMarked, setIsMarked] = useState(item.isMarked)
  function handleBookmark () {
    setIsMarked(!isMarked)
  }
  return (
    <>
      <div className="trailer card">
        <div className="trailer__image-container">

          <img src={item.image} alt= {`Caratula trailer de ${item.title}`} className="trailer__image" />
          <div className="trailer__image--gradient">
          </div>
          <div className='trailer__button-container'>
            <Button text={'Play'} className='play-button'>
              <BsPlayCircle/>
            </Button>
          </div>
        </div>
        <div className="trailer__title-container">
          <div>
            <p className="trailer__title">{item.title}</p>
          </div>
          <div className="bookmark-icon" onClick={handleBookmark}>

            {isMarked
              ? <BsBookmarkFill />
              : <BsBookmark/>
            }
          </div>

        </div>
      </div>
    </>
  )
}
