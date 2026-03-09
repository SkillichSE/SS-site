import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Comparison = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section id="comparison" ref={ref} className="py-16 md:py-32 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent-silver to-accent-blue bg-clip-text text-transparent"
        >
          {t.comparison.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full bg-space-secondary rounded-lg overflow-hidden">
            <thead className="bg-space-tertiary">
              <tr>
                <th className="px-6 py-4 text-left font-orbitron text-sm text-accent-cyan border-b border-accent-cyan/10">{t.comparison.criterion}</th>
                <th className="px-6 py-4 text-left font-orbitron text-sm text-accent-cyan border-b border-accent-cyan/10">{t.comparison.stk}</th>
                <th className="px-6 py-4 text-left font-orbitron text-sm text-accent-cyan border-b border-accent-cyan/10">{t.comparison.gmat}</th>
                <th className="px-6 py-4 text-left font-orbitron text-sm text-accent-cyan border-b border-accent-cyan/10">{t.comparison.onSiteTraining}</th>
                <th className="px-6 py-4 text-left font-orbitron text-sm text-accent-cyan border-b border-accent-cyan/10">{t.comparison.sputniksim}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-accent-cyan/5 transition-colors">
                <td className="px-6 py-4 border-b border-accent-cyan/10">{t.comparison.licenseCost}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.license[0]}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.license[1]}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.license[2]}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.license[3]}</td>
              </tr>
              <tr className="hover:bg-accent-cyan/5 transition-colors">
                <td className="px-6 py-4 border-b border-accent-cyan/10">{t.comparison.hiddenCosts}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.hidden[0]}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.hidden[1]}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.hidden[2]}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.hidden[3]}</td>
              </tr>
              <tr className="hover:bg-accent-cyan/5 transition-colors">
                <td className="px-6 py-4 border-b border-accent-cyan/10">{t.comparison.complexity}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.complexity[0]}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.complexity[1]}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.complexity[2]}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.complexity[3]}</td>
              </tr>
              <tr className="hover:bg-accent-cyan/5 transition-colors">
                <td className="px-6 py-4 border-b border-accent-cyan/10">{t.comparison.aiAnalysis}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.no}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.no}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.ai[2]}</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">{t.comparison.values.ai[3]}</td>
              </tr>
              <tr className="bg-accent-cyan/10 border-2 border-accent-cyan hover:bg-accent-cyan/20 transition-colors">
                <td className="px-6 py-4 font-semibold">{t.comparison.schoolAccess}</td>
                <td className="px-6 py-4 font-semibold text-gray-400">{t.comparison.no}</td>
                <td className="px-6 py-4 font-semibold text-gray-400">{t.comparison.no}</td>
                <td className="px-6 py-4 font-semibold text-gray-400">{t.comparison.no}</td>
                <td className="px-6 py-4 font-semibold text-accent-cyan">{t.comparison.yes}</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

export default Comparison
