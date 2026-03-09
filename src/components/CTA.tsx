import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      className="py-16 md:py-32 px-4 md:px-6 relative z-10 bg-gradient-to-r from-accent-cyan/5 to-accent-green/5 border-y border-accent-cyan/20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-accent-silver to-accent-blue bg-clip-text text-transparent"
        >
          {t.cta.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <a
            href="https://github.com/SkillichSE/SputnikSim/releases/tag/beta"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-gradient-to-r from-accent-blue to-accent-cyan text-space-dark font-mono font-semibold text-lg rounded hover:shadow-2xl hover:shadow-accent-blue/50 transition-all duration-300 hover:-translate-y-1"
          >
            {t.cta.download}
          </a>
          <a
            href="https://github.com/SkillichSE/SputnikSim"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 border-2 border-accent-cyan text-accent-cyan font-mono font-semibold text-lg rounded hover:bg-accent-cyan/10 hover:shadow-xl hover:shadow-accent-cyan/30 transition-all duration-300 hover:-translate-y-1"
          >
            {t.cta.github}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
