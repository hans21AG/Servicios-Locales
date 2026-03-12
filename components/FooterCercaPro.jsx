import Link from 'next/link'

const categories = [
  { slug: 'fontanero', namePlural: 'Fontaneros' },
  { slug: 'electricista', namePlural: 'Electricistas' },
  { slug: 'cerrajero', namePlural: 'Cerrajeros' },
  { slug: 'manitas', namePlural: 'Manitas' },
]

export default function FooterCercaPro() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <span className="text-lg font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Cerca<span className="text-accent">Pro</span>
            </span>
            <p className="mt-3 text-sm opacity-70">
              Tu directorio de profesionales de confianza en Ciudad Real. Fontaneros, electricistas, cerrajeros y manitas verificados.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider opacity-50">Servicios</h4>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}`} className="text-sm opacity-70 transition-colors hover:text-accent hover:opacity-100">
                    {cat.namePlural}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider opacity-50">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/aviso-legal" className="text-sm opacity-70 transition-colors hover:text-accent">Aviso Legal</Link></li>
              <li><Link href="/politica-privacidad" className="text-sm opacity-70 transition-colors hover:text-accent">Política de Privacidad</Link></li>
              <li><Link href="/politica-cookies" className="text-sm opacity-70 transition-colors hover:text-accent">Política de Cookies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider opacity-50">Contacto</h4>
            <p className="text-sm opacity-70">Ciudad Real, España</p>
            <p className="mt-1 text-sm opacity-70">hola@cercapro.es</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs opacity-40">
          © {new Date().getFullYear()} CercaPro. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
