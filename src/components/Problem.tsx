import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Problem = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const problems = [
    {
      title: 'Высокая стоимость ошибки',
      description: 'Потеря KazSat-1 обошлась в $65 млн и 2 года судебных разбирательств со страховщиками.',
    },
    {
      title: 'Нехватка опытных кадров',
      description: 'Учиться на реальных спутниках — значит рисковать ими. Система подготовки специалистов только формируется.',
    },
    {
      title: 'Сложность прогнозирования',
      description: 'Инцидент с KazSat-3: прогнозируемое явление привело к отключению связи по всей стране.',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent-silver to-accent-blue bg-clip-text text-transparent"
        >
          Проблема
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-space-secondary p-10 rounded-lg border border-accent-cyan/10 hover:border-accent-cyan hover:shadow-xl hover:shadow-accent-cyan/20 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="font-orbitron text-xl text-accent-cyan mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
