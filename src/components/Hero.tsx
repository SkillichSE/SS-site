import { motion } from 'framer-motion'

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
          className="relative h-96 hidden md:flex items-center justify-center"
        >
          {/* Orbital rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-72 h-72 border-2 border-accent-cyan/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-96 h-96 border-2 border-accent-green/15 rounded-full"
          />
          
          {/* Logo in center */}
          <div className="absolute w-32 h-32 rounded-full overflow-hidden border-2 border-accent-cyan/40 shadow-2xl shadow-accent-cyan/30 flex items-center justify-center bg-space-dark/80">
            <img src="/logo.png" alt="SputnikSim" className="w-full h-full object-cover" />
          </div>

          {/* Satellite dot */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute w-3 h-3 bg-accent-cyan rounded-full shadow-lg shadow-accent-cyan"
            style={{ top: '0', left: '50%', transform: 'translateX(-50%)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
