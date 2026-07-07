import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Default to dark theme unless user has explicitly set light theme in localStorage
    return localStorage.getItem('theme') !== 'light'
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div className="w-full min-h-screen bg-bg-main text-text-primary transition-colors duration-300 selection:bg-accent-blue/30 selection:text-white flex flex-col">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="w-full flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
