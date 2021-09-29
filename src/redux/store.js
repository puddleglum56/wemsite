import { configureStore } from '@reduxjs/toolkit'
import rotatedReducer from './rotatedSlice'
import animatingReducer from './animatingSlice'
import hoveredMenuItemReducer from './hoveredMenuItemSlice'

export default configureStore({
  reducer: {
    rotated: rotatedReducer,
    animating: animatingReducer,
    hoveredMenuItem: hoveredMenuItemReducer
  },
})