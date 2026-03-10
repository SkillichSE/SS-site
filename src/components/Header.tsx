import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-space-dark/95 backdrop-blur-xl py-4 border-b border-accent-blue/30'
          : 'bg-space-dark/80 backdrop-blur-lg py-6 border-b border-accent-cyan/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-orbitron text-lg font-bold bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">SputnikSim</span>
        </div>

        <ul className="hidden md:flex gap-10 items-center">
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-accent-cyan transition-colors duration-300"
            >
              О программе
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('technology')}
              className="text-gray-400 hover:text-accent-cyan transition-colors duration-300"
            >
              Технология
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('comparison')}
              className="text-gray-400 hover:text-accent-cyan transition-colors duration-300"
            >
              Сравнение
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-400 hover:text-accent-cyan transition-colors duration-300"
            >
              Команда
            </button>
          </li>
          <li>
            <a
              href="https://github.com/SkillichSE/SputnikSim/releases/tag/beta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-gradient-to-r from-accent-blue to-accent-cyan text-space-dark font-mono font-semibold text-sm rounded hover:shadow-lg hover:shadow-accent-blue/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Скачать
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header
