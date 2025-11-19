import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { sendApiRequest } from './components/ApiTester.jsx'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const theme = useSelector((state) => state.preferences.theme)

  useEffect(() => {
    sendApiRequest()
  }, [])

  return (
    <div className="min-h-screen bg-white text-ink transition-colors duration-300 dark:bg-[#252128] dark:text-[#AEBCCF]">
      <div className="mx-auto flex max-w-6xl flex-col gap-[1px] px-4 pb-16 pt-10 sm:px-6 lg:px-0">
        <Navbar />
        <Hero />
        <Skills />
        <div className="h-[1px] bg-[#BAB2E7]" />
        <Profile />
        <div className="h-[1px] bg-[#BAB2E7]" />
        <Projects />
      </div>
      <Footer />
      <ToastContainer
        theme={theme === 'dark' ? 'dark' : 'light'}
        position="top-right"
        className="!text-xs"
        toastClassName="!text-xs !p-2 !min-h-0"
        bodyClassName="!text-xs !p-2"
      />
    </div>
  )
}

export default App
