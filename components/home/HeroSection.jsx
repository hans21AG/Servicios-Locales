'use client'
import { useEffect, useState } from 'react'

function AnimatedCounter({ target, label, suffix = '+' }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let frame
    const duration = 1500
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target])

  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-accent">{count}{suffix}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, hsl(213 37% 15%) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        <span className="inline-block rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
          🏠 Directorio de profesionales en Ciudad Real
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Encuentra profesionales{' '}
          <span className="text-gradient">de confianza</span>{' '}
          cerca de ti
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Fontaneros, electricistas, cerrajeros y manitas verificados en Ciudad Real. Contacta directamente, sin intermediarios.
        </p>

        <div className="mx-auto mt-10 flex max-w-sm justify-center gap-8">
          <AnimatedCounter target={28} label="Profesionales" />
          <AnimatedCounter target={4} label="Categorías" />
          <AnimatedCounter target={100} label="Contacto directo" suffix="%" />
        </div>
      </div>
    </section>
  )
}
