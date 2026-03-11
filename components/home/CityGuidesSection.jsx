import Link from 'next/link'
import { MapPin } from 'lucide-react'

const cityGuides = [
  { slug: 'fontanero-ciudad-real', title: 'Fontaneros en Ciudad Real', city: 'Ciudad Real' },
  { slug: 'electricista-ciudad-real', title: 'Electricistas en Ciudad Real', city: 'Ciudad Real' },
  { slug: 'cerrajero-ciudad-real', title: 'Cerrajeros en Ciudad Real', city: 'Ciudad Real' },
  { slug: 'manitas-ciudad-real', title: 'Manitas en Ciudad Real', city: 'Ciudad Real' },
  { slug: 'fontanero-miguelturra', title: 'Fontaneros en Miguelturra', city: 'Miguelturra' },
  { slug: 'electricista-miguelturra', title: 'Electricistas en Miguelturra', city: 'Miguelturra' },
]

export default function CityGuidesSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Guías por ciudad</h2>
          <p className="mt-3 text-muted-foreground">Información detallada de profesionales en tu localidad</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cityGuides.map(guide => (
            <Link
              key={guide.slug}
              href={`/${guide.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-border bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-200 group-hover:scale-110">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">{guide.title}</div>
                <div className="text-sm text-muted-foreground">{guide.city}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
