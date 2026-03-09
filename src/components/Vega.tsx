import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Vega = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section id="technology" ref={ref} className="py-16 md:py-32 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent-silver to-accent-blue bg-clip-text text-transparent"
        >
          {t.vega.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-space-secondary p-12 rounded-lg border border-accent-cyan/20 mb-12"
        >
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div className="bg-space-tertiary px-6 py-4 rounded border border-accent-cyan/30 font-mono text-center flex-1 min-w-[100px]">
              {t.vega.input}
            </div>
            <div className="text-accent-cyan text-3xl">→</div>
            <div className="bg-space-tertiary px-6 py-4 rounded border border-accent-cyan/30 font-mono text-center flex-1 min-w-[100px]">
              {t.vega.encoder}
            </div>
            <div className="text-accent-cyan text-3xl">→</div>
            <div className="bg-space-tertiary px-6 py-4 rounded border border-accent-cyan/30 font-mono text-center flex-1 min-w-[100px]">
              {t.vega.latent}
            </div>
            <div className="text-accent-cyan text-3xl">→</div>
            <div className="bg-space-tertiary px-6 py-4 rounded border border-accent-cyan/30 font-mono text-center flex-1 min-w-[100px]">
              {t.vega.decoder}
            </div>
            <div className="text-accent-cyan text-3xl">→</div>
            <div className="bg-space-tertiary px-6 py-4 rounded border border-accent-cyan/30 font-mono text-center flex-1 min-w-[100px]">
              {t.vega.error}
            </div>
          </div>
          <p className="text-gray-400 text-center">
            {t.vega.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {t.vega.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-8 bg-space-tertiary rounded-lg border border-accent-green/20"
            >
              <div className="font-orbitron text-4xl font-bold text-accent-green mb-2">
                {metric.value}
              </div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-400 text-center"
        >
          {t.vega.validation}
        </motion.p>
      </div>
    </section>
  )
}

export default Vega
