import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ProfessionalCTA() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          ¿Eres profesional?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-primary-foreground opacity-70">
          Únete a CercaPro y llega a más clientes en Ciudad Real. Registro gratuito, sin comisiones.
        </p>
        <a
          href="mailto:hola@cercapro.es?subject=Quiero%20unirme%20a%20CercaPro&body=Hola%2C%0A%0AMe%20llamo%20%5Bnombre%5D%20y%20soy%20%5Bfontanero%2Felectricista%2Fcerrajero%2Fmanitas%5D%20en%20%5Bciudad%5D.%20Me%20gustar%C3%ADa%20aparecer%20en%20vuestro%20directorio."
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
        >
          Registrar mi negocio <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
