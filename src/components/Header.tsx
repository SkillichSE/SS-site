import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const { t, lang, setLang } = useLanguage()

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
      {/* Three-column grid: logo | menu | lang switcher — each column independent, no shifting */}
      <nav className="max-w-7xl mx-auto px-4 md:px-6 grid items-center"
        style={{ gridTemplateColumns: '1fr auto 1fr' }}
      >
        {/* Left: Logo */}
        <div className="flex items-center">
          <span className="font-orbitron text-lg font-bold bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">SputnikSim</span>
        </div>

        {/* Center: Nav menu (desktop) + mobile download */}
        <div className="flex items-center">
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 whitespace-nowrap">
                {t.header.about}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('technology')} className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 whitespace-nowrap">
                {t.header.technology}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('comparison')} className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 whitespace-nowrap">
                {t.header.comparison}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('team')} className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 whitespace-nowrap">
                {t.header.team}
              </button>
            </li>
            <li>
              <a
                href="https://github.com/SkillichSE/SputnikSim/releases/tag/beta"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-accent-blue to-accent-cyan text-space-dark font-mono font-semibold text-sm rounded hover:shadow-lg hover:shadow-accent-blue/40 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                {t.header.download}
              </a>
            </li>
          </ul>

          {/* Mobile: download button */}
          <a
            href="https://github.com/SkillichSE/SputnikSim/releases/tag/beta"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden px-4 py-2 bg-gradient-to-r from-accent-blue to-accent-cyan text-space-dark font-mono font-semibold text-xs rounded"
          >
            {t.header.download}
          </a>
        </div>

        {/* Right: Language switcher — always pinned to the right edge, never moves */}
        <div className="flex justify-end">
          <div className="flex border border-accent-cyan/30 rounded overflow-hidden" style={{ width: '76px' }}>
            <button
              onClick={() => setLang('en')}
              className={`w-9 py-1.5 text-sm font-mono transition-colors text-center ${lang === 'en' ? 'bg-accent-cyan text-space-dark' : 'text-gray-400 hover:text-accent-cyan'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ru')}
              className={`w-9 py-1.5 text-sm font-mono transition-colors text-center ${lang === 'ru' ? 'bg-accent-cyan text-space-dark' : 'text-gray-400 hover:text-accent-cyan'}`}
            >
              RU
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
