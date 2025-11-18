import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: 'tr',
  theme: 'light',
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'tr' ? 'en' : 'tr'
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
  },
})

export const { toggleLanguage, toggleTheme } = preferencesSlice.actions
export default preferencesSlice.reducer


