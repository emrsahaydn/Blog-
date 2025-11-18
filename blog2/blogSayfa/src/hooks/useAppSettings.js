import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { toggleLanguage, toggleTheme } from '../store/preferencesSlice.js'
import { localizeContent, selectContent } from '../store/contentSlice.js'

const useAppSettings = () => {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.preferences.language)
  const theme = useSelector((state) => state.preferences.theme)
  const content = useSelector(selectContent)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    document.body.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const handleToggleLanguage = () => {
    const next = language === 'tr' ? 'en' : 'tr'
    toast.info(next === 'en' ? 'Dil İngilizce oldu.' : 'Dil Türkçe oldu.')
    dispatch(toggleLanguage())
    dispatch(localizeContent(next))
  }

  const handleToggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    toast.success(next === 'dark' ? 'Dark mode aktif.' : 'Light mode aktif.')
    dispatch(toggleTheme())
  }

  return {
    language,
    theme,
    content,
    toggleLanguage: handleToggleLanguage,
    toggleTheme: handleToggleTheme,
  }
}

export default useAppSettings
