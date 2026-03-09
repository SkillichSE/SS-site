import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const RICK_SEQUENCE = ['Хлызов Максим', 'Андин Артём', 'Гончар Фёдор']

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [rickStep, setRickStep] = useState(0)
  const [rickOpen, setRickOpen] = useState(false)

  const team = [
    {
      name: 'Хлызов Максим',
      role: 'Капитан, Физик',
      description: 'Архитектура системы и физическая модель',
    },
    {
      name: 'Гончар Фёдор',
      role: 'Frontend',
      description: 'Интерфейс на PyQt5 и визуализация',
    },
    {
      name: 'Волочай Даниил',
      role: 'Backend и AI',
      description: 'Нейросеть Vega 1.0 и обработка данных',
    },
    {
      name: 'Андин Артём',
      role: 'Маркетинг',
      description: 'Документация и развитие продукта',
    },
  ]

  const handleCardClick = (name: string) => {
    if (name === 'Волочай Даниил') return
    if (name === RICK_SEQUENCE[rickStep]) {
      const next = rickStep + 1
      if (next === RICK_SEQUENCE.length) {
        setRickStep(0)
        setRickOpen(true)
      } else {
        setRickStep(next)
      }
    } else {
      // wrong order — reset, check if this click starts a new sequence
      setRickStep(name === RICK_SEQUENCE[0] ? 1 : 0)
    }
  }

  return (
    <section id="team" ref={ref} className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent-silver to-accent-blue bg-clip-text text-transparent"
        >
          Команда RUDnik
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
            const isLinked = member.name === 'Волочай Даниил'
            const stepIndex = RICK_SEQUENCE.indexOf(member.name)
            const isActivated = stepIndex !== -1 && stepIndex < rickStep

            const cardContent = (
              <>
                <h3 className="font-orbitron text-xl mb-2">{member.name}</h3>
                <div className="text-accent-cyan font-mono text-sm mb-4">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.description}</p>
                {isActivated && (
                  <div className="mt-3 text-xs font-mono text-accent-green opacity-70">✓</div>
                )}
              </>
            )

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                {isLinked ? (
                  <a
                    href="https://skillichse.github.io/portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-space-secondary p-8 rounded-lg border border-accent-cyan/10 hover:border-pink-500 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div
                    onClick={() => handleCardClick(member.name)}
                    className={`bg-space-secondary p-8 rounded-lg border transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none ${
                      isActivated
                        ? 'border-accent-green/50 shadow-lg shadow-accent-green/10'
                        : 'border-accent-cyan/10 hover:border-pink-500 hover:shadow-xl hover:shadow-pink-500/20'
                    }`}
                  >
                    {cardContent}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Rick player overlay */}
      <AnimatePresence>
        {rickOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setRickOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative w-full max-w-3xl mx-4 rounded-xl overflow-hidden border-2 border-accent-cyan shadow-2xl shadow-accent-cyan/30"
              onClick={e => e.stopPropagation()}
            >
              {/* Title bar */}
              <div className="bg-space-tertiary px-5 py-3 flex items-center justify-between border-b border-accent-cyan/20">
                <span className="font-orbitron text-sm text-accent-cyan tracking-widest">
                  🛰 SYSTEM OVERRIDE — RUDNIK CLASSIFIED
                </span>
                <button
                  onClick={() => setRickOpen(false)}
                  className="text-gray-400 hover:text-white text-xl leading-none transition-colors"
                >
                  ✕
                </button>
              </div>
              <video
                src="./rick.mp4"
                autoPlay
                controls
                className="w-full block"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Team
