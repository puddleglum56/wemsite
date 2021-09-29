import { createSlice } from '@reduxjs/toolkit'

export const hoveredMenuItemSlice = createSlice({
  name: 'hoveredMenuItem',
  initialState: {
    value: 'about',
  },
  reducers: {
    setHoveredMenuItem: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setHoveredMenuItem } = hoveredMenuItemSlice.actions

export default hoveredMenuItemSlice.reducer