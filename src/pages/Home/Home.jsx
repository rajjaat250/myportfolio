import Hero from '../../components/sections/Hero'
import AboutPreview from '../../components/sections/AboutPreview'
import FeaturedProjects from '../../components/sections/FeaturedProjects'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
    </motion.div>
  )
}
