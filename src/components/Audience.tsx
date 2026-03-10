import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Audience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const audiences = [
    {
      title: 'Вузы',
      items: [
        'Satbayev University',
        'Евразийский национальный университет',
        'КазНУ им. аль-Фараби',
        'Подготовка инженеров-баллистиков',
      ],
    },
    {
      title: 'Операторы спутников',
      items: [
        'РЦКС (управление KazSat)',
        'Обучение персонала',
        'Снижение рисков',
        'Отработка сценариев',
      ],
    },
    {
      title: 'Школы и кружки',
      items: [
        'Дополнительное образование',
        'Молодёжные космические лаборатории',
        'Профориентация',
        'Доступно школьникам',
      ],
    },
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
          Для кого
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-space-secondary p-10 rounded-lg border border-accent-cyan/10 hover:border-accent-green hover:shadow-xl hover:shadow-accent-green/20 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="font-orbitron text-2xl text-accent-green mb-6">
                {audience.title}
              </h3>
              <ul className="space-y-3">
                {audience.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="text-accent-cyan mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Audience
