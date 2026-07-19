import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import LenisWrapper from '../common/LenisWrapper'
import AnimatedCursor from '../cursor/AnimatedCursor'

export default function MainLayout() {
  return (
    <LenisWrapper>
      <AnimatedCursor />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </LenisWrapper>
  )
}
