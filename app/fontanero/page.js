import ProfesionalesLista from '../../components/ProfesionalesLista';
import Link from 'next/link';


export const metadata = {
  title: 'Fontaneros en Ciudad Real - Urgencias 24h | Servicios Locales',
  description: 'Encuentra fontaneros profesionales en Ciudad Real. Presupuestos gratis, servicio rápido y sin intermediarios. 9 profesionales verificados.',
  keywords: 'fontanero ciudad real, fontaneria urgente, fontanero 24 horas ciudad real, presupuesto fontanero',
};


export default function FontaneroPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Fontaneros</span>
        </div>


        {/* Header SEO */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            🔧 Fontaneros en Ciudad Real
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            ¿Necesitas un fontanero urgente en Ciudad Real? Encuentra profesionales verificados 
            para reparaciones, instalaciones y emergencias 24 horas. Presupuestos gratis 
            y sin intermediarios.
          </p>
        </div>


        {/* Listado */}
        <ProfesionalesLista categoriaSlug="fontanero" mostrarFiltros={true} />
      </div>
    </div>
  );
}
