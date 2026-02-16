import ProfesionalesLista from '../../components/ProfesionalesLista';
import Link from 'next/link';


export const metadata = {
  title: 'Electricistas en Ciudad Real - Instalaciones y Reparaciones | Servicios Locales',
  description: 'Electricistas profesionales autorizados en Ciudad Real. Instalaciones, averías y boletines eléctricos. Presupuestos gratis.',
  keywords: 'electricista ciudad real, electricista urgente, instalador autorizado ciudad real, boletin electrico',
};


export default function ElectricistaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Electricistas</span>
        </div>


        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            ⚡ Electricistas en Ciudad Real
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Encuentra electricistas autorizados en Ciudad Real para instalaciones eléctricas, 
            reparación de averías y certificados oficiales. Profesionales con experiencia y 
            garantía en todos los trabajos.
          </p>
        </div>


        <ProfesionalesLista categoriaSlug="electricista" mostrarFiltros={true} />
      </div>
    </div>
  );
}
