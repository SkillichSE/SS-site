import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const hotspots = [
  {
    id: 1,
    x: 64,   // % from left on image
    y: 22,   // % from top on image
    title: 'Карта мира',
    description: 'Положение спутника точечным маркером в реальном времени. Координаты: TEME → ECEF → широта/долгота. Проекция Меркатора.',
    color: '#00D4FF',
  },
  {
    id: 2,
    x: 87,
    y: 62,
    title: 'TLE Data',
    description: 'Панель орбитальных параметров: наклонение, RAAN, эксцентриситет, аргумент перигея, среднее движение. Обновляется при каждой загрузке спутника.',
    color: '#00FF88',
  },
  {
    id: 3,
    x: 47,
    y: 75,
    title: 'Vega 1.0 (AI)',
    description: 'Окно нейросети-автоэнкодера. Анализ орбиты, ошибка реконструкции, рекомендуемые коррекции и Delta-V бюджет. Точность классификатора — 91.3%.',
    color: '#7B61FF',
  },
  {
    id: 4,
    x: 15,
    y: 55,
    title: 'Консоль',
    description: 'Основной интерфейс управления: sat — загрузить спутник, simulate — симуляция трека, delta — коррекция орбиты, live — режим реального времени.',
    color: '#FFD700',
  },
]

const Demo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayedLines, setDisplayedLines] = useState<number>(0)
  const [active, setActive] = useState<number | null>(null)

  const terminalLines = [
    { type: 'prompt', text: '> sat 25544' },
    { type: 'success', text: '[OK] Satellite found: ISS (ZARYA)' },
    { type: 'info', text: '[TLE] Connecting to Celestrak...' },
    { type: 'success', text: '[TLE] Download complete' },
    { type: 'empty', text: '' },
    { type: 'success', text: '[POS] 17:02:14 UTC LAT 51.6 LON 138.9 ALT 426 km' },
    { type: 'info', text: '[LEO] быстрое движение, ~90 мин/оборот.' },
    { type: 'empty', text: '' },
    { type: 'prompt', text: '> simulate 2 1' },
    { type: 'success', text: '[SIM] Симуляция запущена: 2 часа с шагом 1 мин' },
    { type: 'info', text: 'Траектория построена успешно' },
  ]

  useEffect(() => {
    if (isInView && displayedLines < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => prev + 1)
      }, 350)
      return () => clearTimeout(timer)
    }
  }, [isInView, displayedLines])

  const getLineColor = (type: string) => {
    switch (type) {
      case 'prompt': return 'text-accent-cyan'
      case 'success': return 'text-accent-green'
      case 'info': return 'text-gray-400'
      default: return 'text-gray-400'
    }
  }

  const activeSpot = hotspots.find(h => h.id === active)

  return (
    <section id="demo" ref={ref} className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent-silver to-accent-blue bg-clip-text text-transparent"
        >
          Демо
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-space-secondary rounded-lg overflow-hidden border border-accent-cyan/20 shadow-2xl"
          >
            <div className="bg-space-tertiary px-6 py-3 flex items-center gap-2 border-b border-accent-cyan/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 font-mono text-xs text-gray-500">console</span>
            </div>
            <div className="p-8 font-mono text-sm leading-relaxed min-h-[400px]">
              {terminalLines.slice(0, displayedLines).map((line, index) => (
                <div
                  key={index}
                  className={`mb-2 ${getLineColor(line.type)}`}
                >
                  {line.text || '\u00A0'}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — annotated screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p className="font-orbitron text-xs text-gray-500 uppercase tracking-widest">
              Интерфейс программы — нажмите на зону
            </p>

            {/* Image with hotspots */}
            <div className="relative rounded-lg overflow-hidden border border-accent-cyan/20 shadow-2xl">
              <img
                src="/interface.png"
                alt="SputnikSim Interface"
                className="w-full block"
                draggable={false}
              />

              {hotspots.map(spot => (
                <button
                  key={spot.id}
                  onClick={() => setActive(active === spot.id ? null : spot.id)}
                  style={{
                    position: 'absolute',
                    left: `${spot.x}%`,
                    top: `${spot.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="group focus:outline-none"
                >
                  {/* Pulse ring */}
                  <span
                    className="absolute inset-0 rounded-full animate-ping opacity-60"
                    style={{ backgroundColor: spot.color, animationDuration: '2s' }}
                  />
                  {/* Dot */}
                  <span
                    className="relative flex items-center justify-center w-8 h-8 rounded-full font-orbitron font-bold text-sm text-space-dark shadow-lg transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: spot.color }}
                  >
                    {spot.id}
                  </span>
                </button>
              ))}
            </div>

            {/* Info card */}
            <div className="min-h-[80px]">
              {activeSpot ? (
                <motion.div
                  key={activeSpot.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-lg border p-4 font-mono text-sm"
                  style={{ borderColor: activeSpot.color + '55', backgroundColor: activeSpot.color + '11' }}
                >
                  <span className="font-orbitron font-bold text-base" style={{ color: activeSpot.color }}>
                    {activeSpot.id}. {activeSpot.title}
                  </span>
                  <p className="mt-2 text-gray-300 leading-relaxed">{activeSpot.description}</p>
                </motion.div>
              ) : (
                <p className="font-mono text-xs text-gray-600 text-center pt-4">
                  ↑ нажмите на пронумерованную точку для описания
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Demo
