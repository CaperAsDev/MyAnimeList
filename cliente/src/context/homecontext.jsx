import React, { createContext, useState } from 'react'

export const HomeContext = createContext({})

export function HomeProvider ({ children }) {
  const [carouselItems, setCarouselItems] = useState([])
  const [indexItemSelected, setIndexItemSelected] = useState(0)

  const values = {
    carouselItems,
    setCarouselItems,
    indexItemSelected,
    setIndexItemSelected
  }
  return (
    <HomeContext.Provider value={values}>
      {children}
    </HomeContext.Provider>
  )
}
