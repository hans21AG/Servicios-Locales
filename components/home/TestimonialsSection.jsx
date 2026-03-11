'use client'
import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  { name: 'María López', text: 'Encontré un fontanero excelente en menos de 5 minutos. Muy profesional y puntual. ¡Totalmente recomendado!', category: 'Fontanero', rating: 5 },
  { name: 'Juan Carlos Pérez', text: 'El electricista que contacté solucionó el problema en una hora. Servicio rápido y eficiente.', category: 'Electricista', rating: 5 },
  { name: 'Ana García', text: 'Se me quedó la llave dentro de casa y en 20 minutos el cerrajero estaba en mi puerta. Precio justo y sin sorpresas.', category: 'Cerrajero', rating: 5 },
  { name: 'Pedro Martínez', text: 'Contraté un manitas para montar muebles de IKEA y quedó todo perfecto. Muy majo y trabajador.', category: 'Manitas', rating: 4 },
  { name: 'Laura Sánchez', text: 'Necesitaba una reforma de baño urgente y encontré al profesional perfecto aquí. Resultado espectacular.', category: 'Fontanero', rating: 5 },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((current + 1) % testimonials.length)
  const t = testimonials[current]

  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Lo que dicen nuestros usuarios</h2>
          <p className="mt-3 text-muted-foreground">Opiniones reales de personas que encontraron profesionales en CercaPro</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative rounded-xl border border-border bg-white p-8 text-center shadow-card">
            <div className="mb-4 flex justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-lg leading-relaxed">"{t.text}"</blockquote>
            <div className="mt-5">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">Servicio: {t.category}</div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-4">
            <button onClick={prev} className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-colors hover:bg-secondary">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 w-2 rounded-full transition-all ${i === current ? 'w-6 bg-accent' : 'bg-border'}`} />
              ))}
            </div>
            <button onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-colors hover:bg-secondary">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
