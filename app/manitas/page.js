import Link from 'next/link';
import { Wrench } from 'lucide-react';
import ProfesionalesLista from '../../components/ProfesionalesLista';

export const metadata = {
  title: 'Manitas en Ciudad Real - Reparaciones del Hogar',
  description: 'Encuentra manitas profesionales en Ciudad Real. Presupuestos gratis, montaje de muebles, pintura y reparaciones del hogar sin intermediarios.',
  keywords: 'manitas ciudad real, manitas a domicilio, reparaciones hogar ciudad real, montaje muebles ciudad real',
};

export default function ManitasPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-[#4B5563]">
          <Link href="/" className="hover:text-[#F97316] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111827] font-medium">Manitas</span>
        </div>

        {/* Header SEO */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#111827] mb-4 flex items-center gap-3">
            <Wrench className="h-9 w-9 text-orange-500" />
            Manitas en Ciudad Real
          </h1>

          <p className="text-xl text-[#4B5563] leading-relaxed">
            ¿Necesitas un manitas en Ciudad Real? Encuentra profesionales verificados
            para montaje de muebles, pintura, pequeñas reparaciones del hogar y mucho más.
            Presupuestos gratis y sin intermediarios.
          </p>
        </div>

        {/* CTA Guía Completa */}
        <div className="mb-8 bg-gradient-to-r from-[#1E3A8A] to-[#F97316] rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="text-4xl">📖</div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">Guía Completa: Manitas en Ciudad Real</h2>
              <p className="text-white/90 mb-3">
                Precios orientativos, zonas de cobertura, servicios más solicitados y preguntas frecuentes
              </p>
              <Link
                href="/manitas-ciudad-real"
                className="inline-block px-6 py-3 bg-white text-[#1E3A8A] font-semibold rounded-lg hover:bg-[#F9FAFB] transition-colors"
              >
                Leer guía completa →
              </Link>
            </div>
          </div>
        </div>

        {/* Listado */}
        <ProfesionalesLista categoriaSlug="manitas" mostrarFiltros={true} />
      </div>
    </div>
  );
}
