import { createSlice } from '@reduxjs/toolkit'

export const rotatedSlice = createSlice({
  name: 'rotated',
  initialState: {
    value: false,
  },
  reducers: {
    toggleRotated: (state) => {
      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleRotated } = rotatedSlice.actions

export default rotatedSlice.reducer