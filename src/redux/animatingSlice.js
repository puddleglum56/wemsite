import { createSlice } from '@reduxjs/toolkit'

export const animatingSlice = createSlice({
  name: 'animating',
  initialState: {
    value: false,
  },
  reducers: {
    setAnimating: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAnimating } = animatingSlice.actions

export default animatingSlice.reducer