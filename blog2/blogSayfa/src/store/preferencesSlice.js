import { createSlice } from '@reduxjs/toolkit'

const getStoredValue = (key, fallback) => {
  if (typeof window === 'undefined') return fallback
  try {
    return window.localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

const persistValue = (key, value) => {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(key, value)
  } catch {
    /* ignore persistence failures */
  }
}

const initialState = {
  language: getStoredValue('preferredLanguage', 'tr'),
  theme: getStoredValue('preferredTheme', 'light'),
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'tr' ? 'en' : 'tr'
      persistValue('preferredLanguage', state.language)
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      persistValue('preferredTheme', state.theme)
    },
  },
})

export const { toggleLanguage, toggleTheme } = preferencesSlice.actions
export default preferencesSlice.reducer


