import Link from 'next/link';
import { KeyRound } from 'lucide-react';
import ProfesionalesLista from '../../components/ProfesionalesLista';

export const metadata = {
  title: 'Cerrajeros en Ciudad Real - Urgencias 24h',
  description: 'Encuentra cerrajeros profesionales en Ciudad Real. Apertura de puertas, cambio de cerraduras y urgencias 24h. Presupuestos gratis.',
  keywords: 'cerrajero ciudad real, cerrajero urgente, cerrajero 24 horas ciudad real, apertura puertas',
};

export default function CerrajeroPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-[#4B5563]">
          <Link href="/" className="hover:text-[#F97316] transition-colors">Inicio</Link>
          <span className="text-[#9CA3AF]">›</span>
          <span className="text-[#111827] font-medium">Cerrajeros</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#111827] mb-4 flex items-center gap-3">
            <KeyRound className="h-9 w-9 text-green-500" />
            Cerrajeros en Ciudad Real
          </h1>
          <p className="text-xl text-[#4B5563] leading-relaxed">
            ¿Necesitas un cerrajero urgente en Ciudad Real? Encuentra profesionales verificados
            para apertura de puertas, cambio de cerraduras y emergencias 24 horas.
            Presupuestos gratis y sin intermediarios.
          </p>
        </div>

        {/* CTA Guía */}
        <div className="mb-8 bg-gradient-to-r from-[#1E3A8A] to-[#F97316] rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="text-4xl">📖</div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">Guía Completa: Cerrajeros en Ciudad Real</h2>
              <p className="text-white/90 mb-3">Precios orientativos, zonas de cobertura, servicios más solicitados y preguntas frecuentes</p>
              <Link href="/cerrajero-ciudad-real"
                className="inline-block px-6 py-3 bg-white text-[#1E3A8A] font-semibold rounded-lg hover:bg-[#F9FAFB] transition-colors">
                Leer guía completa →
              </Link>
            </div>
          </div>
        </div>

        <ProfesionalesLista categoriaSlug="cerrajero" mostrarFiltros={true} />
      </div>
    </div>
  );
}
