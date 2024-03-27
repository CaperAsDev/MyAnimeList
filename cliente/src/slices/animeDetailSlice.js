import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: {},
  relation: {
    status: '',
    favorite: null,
    score: null
  },
  setted: false
}

export const animeDetailSlice = createSlice({
  name: 'animeDetail',
  initialState,
  reducers: {
    setAnimeDetail: (state, action) => {
      state.info = action.payload
      state.setted = true
    },
    setAnimeRelation: (state, action) => {
      state.relation = { ...state.relation, ...action.payload }
    },
    reset: (state) => {
      state = initialState
    }
  }
})

export const { setAnimeDetail, reset, setAnimeRelation } = animeDetailSlice.actions

export default animeDetailSlice.reducer
