import { legacy_createStore as createStore, combineReducers } from 'redux'
import preferencesReducer from './preferencesSlice.js'
import contentReducer from './contentSlice.js'

const rootReducer = combineReducers({
  preferences: preferencesReducer,
  content: contentReducer,
})

const store = createStore(
  rootReducer,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)

export default store


