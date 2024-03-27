import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: {
    data: {},
    token: '',
    setted: false
  },
  custom: {
    lists: {
      array: [],
      setted: false
    }
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, ...restdata } = action.payload
      state.info.token = state.info.token || token
      state.info.data = restdata
      state.info.setted = true
    },
    updateUserInfo: (state, action) => {
      state.info.data = { ...state.info.data, ...action.payload }
    },
    setUserList: (state, action) => {
      state.custom.lists.array = action.payload
      state.custom.lists.setted = true
    },
    updateUserList: (state, action) => {
      const userList = state.custom.lists.array
      const indexListToUpdate = userList.findIndex(userList => userList.id === action.payload.id)
      if (indexListToUpdate >= 0) {
        userList.splice(indexListToUpdate, 1, action.payload)
      }

      state.custom.lists.array = userList
    },
    logout: (state) => {
      state = initialState
      localStorage.removeItem('user')
    }
  }
})

export const { setUser, setUserList, logout, updateUserInfo, updateUserList } = userSlice.actions

export default userSlice.reducer
