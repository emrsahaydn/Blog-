import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const theme = useSelector((state) => state.preferences.theme)

  return (
    <div className="min-h-screen bg-white text-ink transition-colors duration-300 dark:bg-[#0c0f1f] dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-16 pt-10 sm:px-6 lg:px-0">
        <Navbar />
        <Hero />
        <Skills />
        <div className="h-px bg-[#dedee5]" />
        <Profile />
        <div className="h-px bg-[#dedee5]" />
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
