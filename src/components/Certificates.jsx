import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Award, X, ExternalLink } from 'lucide-react'

const certificates = [
  { id: 1, title: 'Web Development Internship', issuer: 'Cognifyz Technologies', src: '/images/certificates/cognifyz.png' },
  { id: 2, title: 'Introduction to Cyber Security', issuer: 'Infosys Springboard', src: '/images/certificates/infoysescybersecurity.png' },
  { id: 3, title: 'Hacknovate 7.0 Participant (Team Code4Coders)', issuer: 'ABES Institute of Technology', src: '/images/certificates/abesithackthone.png' },
  { id: 4, title: 'Software Engineering Job Simulation', issuer: 'JPMorgan Chase & Co.', src: '/images/certificates/jpmorganforage.png' },
]

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  useEffect(() => {
    if (selectedCert) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [selectedCert])

  return (
    <div className="py-32 bg-slate-50 min-h-screen">
      <div className="section-container max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
            <Award size={16} className="text-brand-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-700">Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Licenses & <span className="text-brand-600">Certifications</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Professional credentials validating my expertise in software development, cybersecurity, and problem-solving.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200 p-4 flex items-center justify-center">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-brand-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-600 font-medium">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative w-full aspect-auto md:aspect-[4/3] max-h-[70vh] bg-slate-100 p-4 md:p-8 flex items-center justify-center border-b border-slate-200">
                <img
                  src={selectedCert.src}
                  alt={selectedCert.title}
                  className="max-w-full max-h-full object-contain filter drop-shadow-xl"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-slate-600 font-medium">
                    Issued by <span className="text-brand-600 font-bold">{selectedCert.issuer}</span>
                  </p>
                </div>
                
                <a
                  href={selectedCert.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-brand-600 transition-colors shrink-0"
                >
                  <ExternalLink size={18} />
                  Open Image
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
