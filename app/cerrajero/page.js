import ProfesionalesLista from '../../components/ProfesionalesLista';
import Link from 'next/link';

export const metadata = {
  title: 'Cerrajeros en Ciudad Real - Urgencias 24h | CercaPro',
  description: 'Encuentra cerrajeros profesionales en Ciudad Real. Presupuestos gratis, servicio rápido y sin intermediarios. 7 profesionales verificados.',
  keywords: 'cerrajero ciudad real, cerrajeria urgente, cerrajero 24 horas ciudad real, presupuesto cerrajero',
};

export default function CerrajeroPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-[#4B5563]">
          <Link href="/" className="hover:text-[#F97316] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111827] font-medium">Cerrajeros</span>
        </div>

        {/* Header SEO */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#111827] mb-4 flex items-center gap-3">
            🔑 Cerrajeros en Ciudad Real
          </h1>
          <p className="text-xl text-[#4B5563] leading-relaxed">
            ¿Necesitas un cerrajero urgente en Ciudad Real? Encuentra profesionales verificados 
            para aperturas, cambio de bombines y emergencias 24 horas. Presupuestos gratis 
            y sin intermediarios.
          </p>
        </div>

        {/* CTA Guía Completa */}
        <div className="mb-8 bg-gradient-to-r from-[#1E3A8A] to-[#F97316] rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="text-4xl">📖</div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">Guía Completa: Cerrajeros en Ciudad Real</h2>
              <p className="text-white/90 mb-3">
                Precios orientativos, zonas de cobertura, servicios más solicitados y preguntas frecuentes
              </p>
              <Link 
                href="/cerrajero-ciudad-real"
                className="inline-block px-6 py-3 bg-white text-[#1E3A8A] font-semibold rounded-lg hover:bg-[#F9FAFB] transition-colors"
              >
                Leer guía completa →
              </Link>
            </div>
          </div>
        </div>

        {/* Listado */}
        <ProfesionalesLista categoriaSlug="cerrajero" mostrarFiltros={true} />
      </div>
    </div>
  );
}
