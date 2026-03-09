import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Solution = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    { icon: '🛰️', title: 'Загрузка спутников по NORAD ID', desc: '14 000+ спутников из каталога Celestrak' },
    { icon: '🧠', title: 'ИИ-анализ аномалий', desc: 'Нейросеть Vega 1.0 с точностью 91.3%' },
    { icon: '⚙️', title: 'Коррекция орбиты', desc: 'Delta-V бюджет и симуляция манёвров' },
    { icon: '📊', title: 'Симуляция траектории', desc: 'Физика SGP4, ускоренное время' },
    { icon: '🔴', title: 'Живое отслеживание', desc: 'Обновление позиции каждые 30 секунд' },
    { icon: '💻', title: 'Работает на обычном ПК', desc: 'Не требует дорогостоящего оборудования' },
  ]

  return (
    <section ref={ref} className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent-silver to-accent-blue bg-clip-text text-transparent"
        >
          Решение
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-2xl flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-mono font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solution
