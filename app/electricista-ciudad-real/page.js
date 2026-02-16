import ProfesionalesLista from '../../components/ProfesionalesLista';
import Link from 'next/link';

export const metadata = {
  title: 'Electricista en Ciudad Real - Urgente 24h | Presupuesto Gratis',
  description: 'Electricistas en Ciudad Real. Servicio urgente 24h, boletines oficiales. Contacto directo sin comisiones. Centro, Larache, Miguelturra.',
  keywords: 'electricista ciudad real, electricista urgente ciudad real, electricista 24 horas ciudad real, boletin electrico ciudad real, instalador autorizado',
};

export default function ElectricistasCiudadRealPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/electricista" className="hover:text-blue-600">Electricistas</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Ciudad Real</span>
        </div>

        {/* Contenido SEO */}
        <article className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Electricista en Ciudad Real: Servicio Urgente 24 Horas y Presupuesto Sin Comisiones
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              ¿Se ha ido la luz en casa y no sabes por qué? ¿Salta el diferencial cada dos por tres? Cuando necesitas un <strong>electricista en Ciudad Real</strong> de confianza, no quieres perder tiempo rellenando formularios ni pagar comisiones a intermediarios. En Servicios Locales conectamos directamente con profesionales que trabajan en el Centro histórico, Larache, Los Ángeles, El Torreón, Barrio Pío XII, Miguelturra y Poblete.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Aquí no hay empresas que cobren por ponerte en contacto. Ves el perfil del electricista, llamas directamente, pides presupuesto y decides. Simple, rápido y sin sorpresas. Muchos de nuestros profesionales ofrecen servicio urgente 24 horas para esas averías que no pueden esperar. Si necesitas reparar un cortocircuito, instalar un cuadro eléctrico o conseguir el boletín eléctrico, estás en el sitio correcto.
            </p>
          </div>

          {/* Precios */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              💶 ¿Cuánto Cuesta un Electricista en Ciudad Real?
            </h2>
            <p className="text-gray-600 mb-6">
              Los precios varían según el tipo de trabajo, pero aquí tienes una referencia orientativa de lo que suelen cobrar los electricistas en la zona:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-bold">Servicio</th>
                    <th className="text-left py-3 px-4 font-bold">Precio aproximado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Cambio de enchufe o interruptor</td>
                    <td className="py-3 px-4 font-semibold">40€ – 70€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Reparación de avería eléctrica puntual</td>
                    <td className="py-3 px-4 font-semibold">60€ – 120€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Sustitución o revisión de cuadro eléctrico</td>
                    <td className="py-3 px-4 font-semibold">150€ – 300€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Instalación de puntos de luz</td>
                    <td className="py-3 px-4 font-semibold">70€ – 150€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Boletín eléctrico (certificado)</td>
                    <td className="py-3 px-4 font-semibold">80€ – 150€</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Servicio urgente 24 horas</td>
                    <td className="py-3 px-4 font-semibold text-red-600">+30€ – 60€</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Estos precios son aproximados. Lo mejor es que contactes directamente con el electricista para que valore tu caso concreto. Sin intermediarios, sin comisiones por medio, sin letra pequeña.
            </p>
          </div>

          {/* Servicios */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ⚡ Servicios Más Solicitados
            </h2>
            <p className="text-gray-600 mb-4">
              Los electricistas de Ciudad Real que encontrarás en el directorio ofrecen estos trabajos:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Reparación de averías eléctricas en viviendas y locales</li>
              <li>✓ Cortocircuitos y saltos de diferencial (ese maldito "clac" que te deja a oscuras)</li>
              <li>✓ Instalación y renovación de cuadros eléctricos</li>
              <li>✓ Instalación de iluminación interior y exterior (salón, jardín, portal...)</li>
              <li>✓ Montaje de lámparas y focos LED (para ahorrar en la factura)</li>
              <li>✓ Certificados eléctricos (boletín) obligatorios para alquilar o vender</li>
              <li>✓ Instalaciones eléctricas en reformas completas</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Si necesitas algo más específico, muchos electricistas también hacen domótica básica, instalación de videoporteros o carga de coches eléctricos.
            </p>
          </div>

          {/* Por qué Servicios Locales */}
          <div className="bg-yellow-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ✅ Por Qué Usar Servicios Locales (Y No Otras Plataformas)
            </h2>
            <p className="text-gray-700 mb-4">
              Porque aquí el contacto es directo. Nada de rellenar formularios para que te llamen tres empresas distintas y luego cobrar comisión al profesional que contrates. Nosotros te mostramos los perfiles, tú eliges y contactas. El electricista no paga nada por aparecer en el directorio, así que tampoco tiene que "recuperar" esa comisión subiéndote el precio.
            </p>
            <p className="text-gray-700 mb-4">
              Además, son profesionales locales. Si vives en Larache y llamas a un electricista que trabaja por la zona, puede estar en tu casa en menos de una hora. Esa rapidez no la consigues con plataformas que operan a nivel nacional y que igual te mandan a alguien desde otra provincia.
            </p>
            <p className="text-gray-700">
              Transparencia total: ves reseñas (cuando las hay), zonas donde trabajan y formas de contacto. Tú decides, sin presiones.
            </p>
          </div>

          {/* Zonas - CORREGIDO */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              📍 Zonas de Cobertura en Ciudad Real
            </h2>
            <p className="text-gray-600 mb-4">
              Los electricistas del directorio trabajan principalmente en:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-gray-50 p-3 rounded">📍 Ciudad Real Centro</div>
              <div className="bg-gray-50 p-3 rounded">📍 Larache</div>
              <div className="bg-gray-50 p-3 rounded">📍 Los Ángeles</div>
              <div className="bg-gray-50 p-3 rounded">📍 El Torreón</div>
              <div className="bg-gray-50 p-3 rounded">📍 Barrio Pío XII</div>
              <div className="bg-gray-50 p-3 rounded">📍 Miguelturra</div>
              <div className="bg-gray-50 p-3 rounded">📍 Poblete</div>
            </div>
            <p className="text-gray-600 mt-4">
              Si vives en zonas cercanas, consulta disponibilidad directamente con el profesional al llamar.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ❓ Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ¿Cuánto cuesta un electricista en Ciudad Real?
                </h3>
                <p className="text-gray-600">
                  Depende del trabajo. Un cambio de enchufe puede salir por 40-70€, mientras que renovar un cuadro eléctrico completo puede irse a 150-300€. Si necesitas servicio de urgencia fuera de horario, suma entre 30 y 60€ extra. Lo mejor es pedir presupuesto sin compromiso antes de empezar.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ¿Hay electricistas 24 horas en Ciudad Real?
                </h3>
                <p className="text-gray-600">
                  Sí, varios de los profesionales del directorio ofrecen atención urgente las 24 horas. Útil si salta el diferencial de madrugada o si tienes una avería que te deja sin luz un sábado por la noche. Llama directamente para confirmar disponibilidad y precio del servicio nocturno.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ¿Cómo contactar con un electricista en Ciudad Real?
                </h3>
                <p className="text-gray-600">
                  Entra en Servicios Locales, busca "electricista" y verás los perfiles disponibles. Cada profesional tiene su teléfono o formulario de contacto. Llamas, explicas qué necesitas, pides presupuesto y ya está. Sin formularios de "solicitud de presupuesto" que te hacen esperar días para que te llamen cinco empresas distintas.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-lg p-8 text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🔎 ¿Necesitas un Electricista Ahora?
            </h2>
            <p className="text-xl mb-6">
              Explora los perfiles, compara y contacta directamente. Sin intermediarios, sin comisiones. Solo profesionales locales que conocen Ciudad Real tan bien como tú.
            </p>
          </div>
        </article>

        {/* Listado Profesionales */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Electricistas Disponibles en Ciudad Real
          </h2>
          <ProfesionalesLista 
            categoriaSlug="electricista" 
            mostrarFiltros={false} 
          />
        </div>
      </div>
    </div>
  );
}