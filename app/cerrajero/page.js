import ProfesionalesLista from '../../components/ProfesionalesLista';
import Link from 'next/link';

export const metadata = {
  title: 'Cerrajeros en Ciudad Real - Urgencias 24h | Servicios Locales',
  description: 'Cerrajeros de confianza en Ciudad Real. Apertura de puertas, cambio de cerraduras y duplicado de llaves. Servicio rápido 24 horas.',
};

export default function CerrajeroPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Cerrajeros</span>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            🔑 Cerrajeros en Ciudad Real
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            ¿Cerrado fuera de casa? Cerrajeros profesionales en Ciudad Real disponibles 24 horas 
            para apertura de puertas, cambio de bombines y cerraduras de seguridad. Servicio 
            rápido sin roturas.
          </p>
        </div>

        <ProfesionalesLista categoriaSlug="cerrajero" mostrarFiltros={true} />
      </div>
    </div>
  );
}
