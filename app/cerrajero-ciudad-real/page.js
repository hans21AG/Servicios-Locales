import ProfesionalesLista from '../../components/ProfesionalesLista';
import Link from 'next/link';

export const metadata = {
  title: 'Cerrajero en Ciudad Real - Urgente 24h | Presupuesto Gratis',
  description: 'Cerrajeros en Ciudad Real. Servicio urgente 24h, presupuesto gratis. Contacto directo sin comisiones. Centro, Larache, Miguelturra.',
  keywords: 'cerrajero ciudad real, cerrajero urgente ciudad real, cerrajero 24 horas ciudad real, apertura puerta ciudad real, presupuesto gratis',
};

export default function CerrajeroCiudadRealPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-[#4B5563]">
          <Link href="/" className="hover:text-[#F97316] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/cerrajero" className="hover:text-[#F97316] transition-colors">Cerrajeros</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111827] font-medium">Ciudad Real</span>
        </div>

        {/* Contenido SEO */}
        <article className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h1 className="text-4xl font-bold text-[#111827] mb-4">
              Cerrajero en Ciudad Real: Servicio Urgente 24 Horas y Presupuesto Gratis
            </h1>
            <p className="text-xl text-[#4B5563] leading-relaxed">
              ¿Has perdido las llaves o se te ha roto dentro de la cerradura? Necesitas un <strong className="text-[#1E3A8A]">cerrajero en Ciudad Real</strong> que pueda atenderte rápido y sin complicaciones. En CercaPro encontrarás profesionales de cerrajería que trabajan en barrios como el Centro, Larache, Los Ángeles, El Torreón, Pío XII, Miguelturra y zonas cercanas.
            </p>
            <p className="text-lg text-[#4B5563] mt-4">
              Sin intermediarios ni plataformas que eleven el precio. Puedes llamar directamente, explicar el problema y recibir un presupuesto claro. Si buscas un <strong className="text-[#1E3A8A]">cerrajero urgente en Ciudad Real</strong> disponible 24 horas, aquí encontrarás opciones de confianza.
            </p>
          </div>

          {/* Precios */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              💶 Precios de un Cerrajero en Ciudad Real (Orientativos)
            </h2>
            <p className="text-[#4B5563] mb-6">
              Rangos de precio habituales para servicios de cerrajería en la zona:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#1E3A8A]">
                    <th className="text-left py-3 px-4 font-bold text-[#111827]">Servicio</th>
                    <th className="text-left py-3 px-4 font-bold text-[#111827]">Precio aproximado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Apertura de puerta sin daños</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">60€ – 100€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Cambio de bombín</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">50€ – 90€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Cambio de cerradura completa</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">80€ – 150€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Copia de llaves</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">5€ – 15€</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-[#4B5563]">Servicio urgente 24 horas</td>
                    <td className="py-3 px-4 font-semibold text-[#F97316]">+30€ – 50€</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#4B5563] mt-4">
              El precio final depende de la complejidad del trabajo y del tipo de cerradura. Para un <strong className="text-[#1E3A8A]">cerrajero 24 horas en Ciudad Real</strong>, suele aplicarse un recargo por urgencia.
            </p>
          </div>

          {/* Servicios */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              🔑 Servicios de Cerrajería Más Solicitados
            </h2>
            <p className="text-[#4B5563] mb-4">
              Los cerrajeros en Ciudad Real realizan desde aperturas urgentes hasta instalaciones de seguridad:
            </p>
            <ul className="space-y-2 text-[#4B5563]">
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Apertura de puertas sin daños
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Cambio de cerraduras y bombines
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Copia y duplicado de llaves
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Instalación de cerraduras de seguridad
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Reparación de persianas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Apertura de cajas fuertes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Cerrajería de automóviles
              </li>
            </ul>
            <p className="text-[#4B5563] mt-4">
              Muchos buscan "<strong className="text-[#1E3A8A]">cerrajero urgente Ciudad Real</strong>" cuando se quedan fuera de casa o tienen un problema con la cerradura.
            </p>
          </div>

          {/* Por qué usar CercaPro */}
          <div className="bg-gradient-to-br from-[#F9FAFB] to-white border-2 border-[#1E3A8A] rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              ✅ Por Qué Usar CercaPro para Encontrar Cerrajero
            </h2>
            <p className="text-[#4B5563] mb-4">
              La ventaja es simple: <strong className="text-[#1E3A8A]">contacto directo sin comisiones ocultas</strong>.
            </p>
            <p className="text-[#4B5563] mb-4">
              No hay plataformas intermediarias que encarezcan el servicio. Llamas directamente al cerrajero, explicas el problema y recibes un presupuesto transparente. Al trabajar con profesionales locales, el tiempo de llegada suele ser menor, especialmente en urgencias.
            </p>
            <p className="text-[#4B5563]">
              Nuestro objetivo es que encuentres un cerrajero en Ciudad Real de forma rápida, transparente y cercana.
            </p>
          </div>

          {/* Zonas */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              📍 Zonas Donde Trabajan los Cerrajeros
            </h2>
            <p className="text-[#4B5563] mb-4">
              Los profesionales del listado cubren habitualmente:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-[#F9FAFB] border border-[#1E3A8A]/20 p-3 rounded hover:border-[#F97316] transition-colors">📍 Ciudad Real Centro</div>
              <div className="bg-[#F9FAFB] border border-[#1E3A8A]/20 p-3 rounded hover:border-[#F97316] transition-colors">📍 Larache</div>
              <div className="bg-[#F9FAFB] border border-[#1E3A8A]/20 p-3 rounded hover:border-[#F97316] transition-colors">📍 Los Ángeles</div>
              <div className="bg-[#F9FAFB] border border-[#1E3A8A]/20 p-3 rounded hover:border-[#F97316] transition-colors">📍 El Torreón</div>
              <div className="bg-[#F9FAFB] border border-[#1E3A8A]/20 p-3 rounded hover:border-[#F97316] transition-colors">📍 Barrio Pío XII</div>
              <div className="bg-[#F9FAFB] border border-[#1E3A8A]/20 p-3 rounded hover:border-[#F97316] transition-colors">📍 Miguelturra</div>
              <div className="bg-[#F9FAFB] border border-[#1E3A8A]/20 p-3 rounded hover:border-[#F97316] transition-colors">📍 Poblete</div>
            </div>
            <p className="text-[#4B5563] mt-4">
              Si vives en estas zonas, puedes encontrar cerrajeros disponibles para atención urgente.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              ❓ Preguntas Frecuentes sobre Cerrajeros en Ciudad Real
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#F97316] pl-4">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  ¿Cuánto cuesta un cerrajero en Ciudad Real?
                </h3>
                <p className="text-[#4B5563]">
                  Una apertura simple puede costar entre 60€ y 100€. Un cambio de cerradura completa puede ir de 80€ a 150€. Los servicios urgentes 24 horas suelen tener un recargo adicional.
                </p>
              </div>

              <div className="border-l-4 border-[#F97316] pl-4">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  ¿Hay cerrajeros 24 horas en Ciudad Real?
                </h3>
                <p className="text-[#4B5563]">
                  Sí. Varios profesionales ofrecen servicio de urgencia para aperturas cuando te quedas fuera de casa o tienes un problema con la cerradura.
                </p>
              </div>

              <div className="border-l-4 border-[#F97316] pl-4">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  ¿Cómo contactar con un cerrajero en Ciudad Real?
                </h3>
                <p className="text-[#4B5563]">
                  Puedes llamar directamente desde el listado, sin registros ni intermediarios. Explica el problema y solicita presupuesto personalizado.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-[#1E3A8A] to-[#F97316] text-white rounded-lg p-8 text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🔎 Encuentra Cerrajeros Verificados en Ciudad Real
            </h2>
            <p className="text-xl mb-6">
              Si buscas un <strong>cerrajero en Ciudad Real con presupuesto claro y contacto directo</strong>, consulta el listado y elige el profesional que mejor se adapte a tu necesidad.
            </p>
            <p className="text-lg">
              Sin comisiones. Sin intermediarios. Contacto directo con profesionales locales.
            </p>
          </div>
        </article>

        {/* Servicios Relacionados */}
        <div className="bg-white border border-[#1E3A8A]/20 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-[#111827] mb-3">Servicios Relacionados</h3>
          <div className="space-y-2">
            <a href="/fontanero-ciudad-real" className="text-[#1E3A8A] hover:text-[#F97316] transition-colors flex items-center gap-2">
              <span>→</span> Fontaneros en Ciudad Real
            </a>
            <a href="/electricista-ciudad-real" className="text-[#1E3A8A] hover:text-[#F97316] transition-colors flex items-center gap-2">
              <span>→</span> Electricistas en Ciudad Real
            </a>
            <a href="/manitas-ciudad-real" className="text-[#1E3A8A] hover:text-[#F97316] transition-colors flex items-center gap-2">
              <span>→</span> Manitas en Ciudad Real
            </a>
          </div>
        </div>

        {/* Listado Profesionales */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-[#111827] mb-6">
            Cerrajeros Disponibles en Ciudad Real
          </h2>
          <ProfesionalesLista 
            categoriaSlug="cerrajero" 
            mostrarFiltros={false} 
          />
        </div>
      </div>
    </div>
  );
}
