import { motion } from 'framer-motion'
import OrbitalLogo from './OrbitalLogo'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-orbitron text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-accent-silver via-accent-blue to-accent-cyan bg-clip-text text-transparent"
          >
            SputnikSim
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-10 font-light"
          >
            Тренажёр анализа орбит спутников на основе реальных данных и ИИ
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="https://github.com/SkillichSE/SputnikSim/releases/tag/beta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-accent-blue to-accent-cyan text-space-dark font-mono font-semibold text-lg rounded hover:shadow-2xl hover:shadow-accent-blue/50 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              Скачать
            </a>
            <button
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border-2 border-accent-cyan text-accent-cyan font-mono font-semibold text-lg rounded hover:bg-accent-cyan/10 hover:shadow-xl hover:shadow-accent-cyan/30 transition-all duration-300 hover:-translate-y-1"
            >
              Смотреть демо
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex items-center justify-center -mr-16 lg:-mr-24"
        >
          <OrbitalLogo />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
