import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Comparison = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="comparison" ref={ref} className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent-silver to-accent-blue bg-clip-text text-transparent"
        >
          Сравнение с конкурентами
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
                <th className="px-6 py-4 text-left font-orbitron text-sm text-accent-cyan border-b border-accent-cyan/10">Критерий</th>
                <th className="px-6 py-4 text-left font-orbitron text-sm text-accent-cyan border-b border-accent-cyan/10">STK (Ansys)</th>
                <th className="px-6 py-4 text-left font-orbitron text-sm text-accent-cyan border-b border-accent-cyan/10">GMAT (NASA)</th>
                <th className="px-6 py-4 text-left font-orbitron text-sm text-accent-cyan border-b border-accent-cyan/10">Обучение на месте</th>
                <th className="px-6 py-4 text-left font-orbitron text-sm text-accent-cyan border-b border-accent-cyan/10">SputnikSim</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-accent-cyan/5 transition-colors">
                <td className="px-6 py-4 border-b border-accent-cyan/10">Стоимость лицензии</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">$15-50k/год</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Бесплатно</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">$50-150k/оператор</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">$2-5k/год для вуза</td>
              </tr>
              <tr className="hover:bg-accent-cyan/5 transition-colors">
                <td className="px-6 py-4 border-b border-accent-cyan/10">Скрытые затраты</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Обучение $5-20k</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Разработка сценариев</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Риск потери спутника</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Минимальны</td>
              </tr>
              <tr className="hover:bg-accent-cyan/5 transition-colors">
                <td className="px-6 py-4 border-b border-accent-cyan/10">Сложность</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Очень высокая</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Требует программирования</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Только для избранных</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Понятно новичку</td>
              </tr>
              <tr className="hover:bg-accent-cyan/5 transition-colors">
                <td className="px-6 py-4 border-b border-accent-cyan/10">ИИ-анализ</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Нет</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Нет</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Только опыт</td>
                <td className="px-6 py-4 border-b border-accent-cyan/10 text-gray-400">Да (Vega 1.0)</td>
              </tr>
              <tr className="bg-accent-cyan/10 border-2 border-accent-cyan hover:bg-accent-cyan/20 transition-colors">
                <td className="px-6 py-4 font-semibold">Доступно школьникам</td>
                <td className="px-6 py-4 font-semibold text-gray-400">Нет</td>
                <td className="px-6 py-4 font-semibold text-gray-400">Нет</td>
                <td className="px-6 py-4 font-semibold text-gray-400">Нет</td>
                <td className="px-6 py-4 font-semibold text-accent-cyan">Да</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

export default Comparison
