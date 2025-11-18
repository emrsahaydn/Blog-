import { configureStore } from '@reduxjs/toolkit'
import preferencesReducer from './preferencesSlice.js'
import contentReducer from './contentSlice.js'

const store = configureStore({
  reducer: {
    preferences: preferencesReducer,
    content: contentReducer,
  },
})

export default store


