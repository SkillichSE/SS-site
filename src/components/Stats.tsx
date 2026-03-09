import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const StatCard = ({ stat, index, isInView }: { stat: { value: number; label: string; suffix: string }; index: number; isInView: boolean }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = stat.value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          setCount(stat.value)
          clearInterval(timer)
        } else {
          setCount(current)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, stat.value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-6 md:p-12 bg-space-secondary rounded-lg border border-accent-cyan/20 hover:border-accent-cyan hover:shadow-xl hover:shadow-accent-cyan/30 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="font-orbitron text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-accent-silver to-accent-blue bg-clip-text text-transparent">
        {stat.suffix === '<' && '<'}
        {Math.floor(count).toLocaleString()}
        {stat.suffix === '+' && '+'}
      </div>
      <div className="text-gray-400 text-lg">{stat.label}</div>
    </motion.div>
  )
}

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section ref={ref} className="py-16 md:py-32 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent-silver to-accent-blue bg-clip-text text-transparent"
        >
          {t.stats.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.items.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
