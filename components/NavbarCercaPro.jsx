'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const categories = [
    { slug: 'fontanero', namePlural: 'Fontaneros' },
    { slug: 'electricista', namePlural: 'Electricistas' },
    { slug: 'cerrajero', namePlural: 'Cerrajeros' },
    { slug: 'manitas', namePlural: 'Manitas' },
]

export default function NavbarCercaPro() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-lg">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/cercapro-icon.png"
                        alt="CercaPro"
                        width={36}
                        height={36}
                        className="rounded-lg"
                    />
                    <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Cerca<span className="text-accent">Pro</span>
                    </span>
                </Link>

                {/* Desktop links */}
                <div className="hidden items-center gap-1 md:flex">
                    {categories.map(cat => (
                        <Link
                            key={cat.slug}
                            href={`/${cat.slug}`}
                            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                            {cat.namePlural}
                        </Link>
                    ))}
                    <a
                        href="mailto:hola@cercapro.es?subject=Quiero%20unirme%20a%20CercaPro&body=Hola%2C%0A%0AMe%20llamo%20%5Bnombre%5D%20y%20soy%20%5Bfontanero%2Felectricista%2Fcerrajero%2Fmanitas%5D%20en%20%5Bciudad%5D.%20Me%20gustar%C3%ADa%20aparecer%20en%20vuestro%20directorio."
                        className="ml-3 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90"
                    >
                        ¿Eres profesional?
                    </a>
                </div>

                {/* Mobile toggle */}
                <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menú">
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="border-t border-border bg-white md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
                        {categories.map(cat => (
                            <Link
                                key={cat.slug}
                                href={`/${cat.slug}`}
                                onClick={() => setOpen(false)}
                                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                            >
                                {cat.namePlural}
                            </Link>
                        ))}
                        <Link
                            href="/registro-profesional"
                            onClick={() => setOpen(false)}
                            className="mt-2 rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
                        >
                            ¿Eres profesional?
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
