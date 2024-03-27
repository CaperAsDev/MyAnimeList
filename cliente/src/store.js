import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import animeDetailReducer from './slices/animeDetailSlice'

export const store = configureStore(
  {
    reducer: {
      user: userReducer,
      animeDetail: animeDetailReducer
    }
  }
)
