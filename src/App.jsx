import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import CertificatesPage from './pages/CertificatesPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen bg-bg-main text-text-primary transition-colors duration-300 selection:bg-accent-blue/30 selection:text-text-primary flex flex-col">
        <Navbar />
        <main className="w-full flex-grow pt-[44px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
