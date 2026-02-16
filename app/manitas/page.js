import ProfesionalesLista from '../../components/ProfesionalesLista';
import Link from 'next/link';


export const metadata = {
  title: 'Manitas en Ciudad Real - Reparaciones y Reformas | Servicios Locales',
  description: 'Manitas profesionales en Ciudad Real para pequeñas reparaciones, montajes de muebles y reformas del hogar. Presupuestos sin compromiso.',
  keywords: 'manitas ciudad real, reparaciones hogar ciudad real, manitas a domicilio, montaje muebles',
};


export default function ManitasPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Manitas</span>
        </div>


        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            🛠️ Manitas en Ciudad Real
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Manitas expertos en Ciudad Real para reparaciones del hogar, montaje de muebles, 
            bricolaje y pequeñas reformas. Servicio rápido, precios económicos y acabados 
            profesionales.
          </p>
        </div>


        <ProfesionalesLista categoriaSlug="manitas" mostrarFiltros={true} />
      </div>
    </div>
  );
}
