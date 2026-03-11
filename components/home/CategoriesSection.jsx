import Link from 'next/link'
import { Droplets, Zap, KeyRound, Wrench } from 'lucide-react'

const categories = [
  { slug: 'fontanero', namePlural: 'Fontaneros', description: 'Reparaciones, instalaciones, desatascos y urgencias 24h.', icon: <Droplets className="h-8 w-8" />, color: 'text-blue-500', count: 7 },
  { slug: 'electricista', namePlural: 'Electricistas', description: 'Instalaciones eléctricas, averías, cuadros y certificados.', icon: <Zap className="h-8 w-8" />, color: 'text-yellow-500', count: 6 },
  { slug: 'cerrajero', namePlural: 'Cerrajeros', description: 'Apertura de puertas, cambio de cerraduras, urgencias 24h.', icon: <KeyRound className="h-8 w-8" />, color: 'text-emerald-500', count: 4 },
  { slug: 'manitas', namePlural: 'Manitas', description: 'Montaje de muebles, pintura, pequeñas reparaciones del hogar.', icon: <Wrench className="h-8 w-8" />, color: 'text-orange-500', count: 6 },
]

export default function CategoriesSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Nuestros servicios</h2>
          <p className="mt-3 text-muted-foreground">Encuentra al profesional que necesitas en tu zona</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(cat => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group relative rounded-xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className={`mb-4 inline-flex rounded-lg bg-secondary p-3 ${cat.color} transition-transform duration-300 group-hover:scale-110`}>
                {cat.icon}
              </div>
              <h3 className="text-lg font-semibold">{cat.namePlural}</h3>
              <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{cat.description}</p>
              <div className="mt-4 text-sm font-medium text-accent">
                {cat.count} profesionales →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
