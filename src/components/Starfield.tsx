import { useEffect, useState } from 'react'

const Starfield = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([])

  useEffect(() => {
    const newStars = Array.from({ length: 200 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3,
      delay: Math.random() * 3,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Starfield
