import { useEffect, useRef } from 'react'

const OrbitalLogo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const angleRef = useRef(0)
  const frameRef = useRef(0)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const img = new Image()
    img.src = './logo.png'
    img.onload = () => { imgRef.current = img }
    imgRef.current = img
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const W = 780, H = 780
    canvas.width = W
    canvas.height = H

    // static stars seeded
    const stars: { x: number; y: number; r: number; a: number }[] = []
    const rng = (seed: number) => {
      let s = seed
      return () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff }
    }
    const rand = rng(42)
    for (let i = 0; i < 90; i++) {
      stars.push({ x: rand() * W, y: rand() * H, r: rand() * 1.2 + 0.4, a: rand() * 0.7 + 0.3 })
    }

    const draw = () => {
      angleRef.current = (angleRef.current + 1.8) % 360
      const angle = angleRef.current
      const rad = (angle * Math.PI) / 180

      ctx.clearRect(0, 0, W, H)

      // background
      ctx.fillStyle = 'transparent'
      ctx.fillRect(0, 0, W, H)

      // stars
      stars.forEach(s => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.a})`
        ctx.fill()
      })

      const cx = W / 2, cy = H / 2
      const Rx = 290, Ry = 110
      const R_logo = 155

      const sat_x = cx + Rx * Math.cos(rad)
      const sat_y = cy + Ry * Math.sin(rad)
      const behind = Math.sin(rad) < 0

      // ── glow under orbit ──
      const glow = ctx.createRadialGradient(cx, cy, R_logo * 0.7, cx, cy, R_logo * 1.6)
      glow.addColorStop(0, 'rgba(40,120,255,0)')
      glow.addColorStop(1, 'rgba(40,120,255,0.18)')
      ctx.beginPath()
      ctx.arc(cx, cy, R_logo * 1.6, 0, Math.PI * 2)
      ctx.fillStyle = glow
      ctx.fill()

      // ── back half orbit (dashed) ──
      ctx.save()
      ctx.setLineDash([6, 7])
      ctx.strokeStyle = 'rgba(80,160,255,0.25)'
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.ellipse(cx, cy, Rx, Ry, 0, Math.PI, Math.PI * 2)
      ctx.stroke()
      ctx.restore()

      // ── satellite behind ──
      if (behind) {
        for (let i = 1; i < 13; i++) {
          const a2 = rad - i * 0.07
          if (Math.sin(a2) >= 0) break
          const tx = cx + Rx * Math.cos(a2)
          const ty = cy + Ry * Math.sin(a2)
          const alpha = Math.round(100 * (1 - i / 13))
          ctx.beginPath()
          ctx.arc(tx, ty, 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0,200,255,${alpha / 255})`
          ctx.fill()
        }
        ctx.save()
        ctx.translate(sat_x, sat_y)
        ctx.rotate(rad)
        ctx.globalAlpha = 0.28
        ctx.fillStyle = 'rgba(200,220,255,1)'
        ctx.fillRect(-6, -3, 12, 6)
        ctx.fillStyle = 'rgba(0,120,255,0.8)'
        ctx.fillRect(-16, -1.5, 9, 3)
        ctx.fillRect(7, -1.5, 9, 3)
        ctx.globalAlpha = 1
        ctx.restore()
      }

      // ── logo circle ──
      // clip circle
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, R_logo, 0, Math.PI * 2)
      ctx.clip()
      if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
        const d = R_logo * 2
        ctx.drawImage(imgRef.current, cx - R_logo, cy - R_logo, d, d)
      } else {
        const grad = ctx.createRadialGradient(cx - 20, cy - 20, 10, cx, cy, R_logo)
        grad.addColorStop(0, '#1e50b4')
        grad.addColorStop(0.6, '#147840')
        grad.addColorStop(1, '#0a2878')
        ctx.fillStyle = grad
        ctx.fillRect(cx - R_logo, cy - R_logo, R_logo * 2, R_logo * 2)
      }
      ctx.restore()

      // border ring
      ctx.beginPath()
      ctx.arc(cx, cy, R_logo, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(60,140,255,0.55)'
      ctx.lineWidth = 1.8
      ctx.stroke()

      // ── front half orbit (dashed) ──
      ctx.save()
      ctx.setLineDash([6, 7])
      ctx.strokeStyle = 'rgba(80,160,255,0.55)'
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.ellipse(cx, cy, Rx, Ry, 0, 0, Math.PI)
      ctx.stroke()
      ctx.restore()

      // second outer orbit ring (tilted feel)
      ctx.save()
      ctx.setLineDash([3, 10])
      ctx.strokeStyle = 'rgba(0,255,136,0.12)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.ellipse(cx, cy, Rx * 1.28, Ry * 1.28, 0.3, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()

      // ── satellite in front ──
      if (!behind) {
        for (let i = 1; i < 15; i++) {
          const a2 = rad - i * 0.07
          const tx = cx + Rx * Math.cos(a2)
          const ty = cy + Ry * Math.sin(a2)
          const alpha = 180 * (1 - i / 15)
          const r2 = 3 * (1 - i / 15)
          ctx.beginPath()
          ctx.arc(tx, ty, r2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0,200,255,${alpha / 255})`
          ctx.fill()
        }
        // satellite body
        ctx.save()
        ctx.translate(sat_x, sat_y)
        ctx.rotate(rad)
        // body
        ctx.fillStyle = 'rgba(210,225,255,1)'
        ctx.strokeStyle = 'rgba(100,180,255,0.9)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.rect(-6, -3.5, 12, 7)
        ctx.fill()
        ctx.stroke()
        // solar panels
        ctx.fillStyle = 'rgba(0,120,255,0.85)'
        ctx.fillRect(-17, -2, 10, 4)
        ctx.fillRect(7, -2, 10, 4)
        // panel divider lines
        ctx.strokeStyle = 'rgba(0,200,255,0.5)'
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(-12, -2); ctx.lineTo(-12, 2)
        ctx.moveTo(12, -2);  ctx.lineTo(12, 2)
        ctx.stroke()
        ctx.restore()
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    frameRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', maxWidth: '780px', height: 'auto', imageRendering: 'crisp-edges' }}
    />
  )
}

export default OrbitalLogo
