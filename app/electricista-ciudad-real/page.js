import ProfesionalesLista from '../../components/ProfesionalesLista';
import Link from 'next/link';

export const metadata = {
  title: 'Electricista en Ciudad Real - Urgente 24h | Presupuesto Gratis',
  description: 'Electricistas en Ciudad Real. Servicio urgente 24h, presupuesto gratis. Contacto directo sin comisiones. Centro, Larache, Miguelturra.',
  keywords: 'electricista ciudad real, electricista urgente ciudad real, electricista 24 horas ciudad real, averías eléctricas ciudad real, presupuesto gratis',
};

export default function ElectricistaCiudadRealPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-[#4B5563]">
          <Link href="/" className="hover:text-[#F97316] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/electricista" className="hover:text-[#F97316] transition-colors">Electricistas</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111827] font-medium">Ciudad Real</span>
        </div>

        {/* Contenido SEO */}
        <article className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h1 className="text-4xl font-bold text-[#111827] mb-4">
              Electricista en Ciudad Real: Servicio Urgente 24 Horas y Presupuesto Gratis
            </h1>
            <p className="text-xl text-[#4B5563] leading-relaxed">
              ¿Necesitas un <strong className="text-[#1E3A8A]">electricista en Ciudad Real</strong> de forma urgente? Ya sea por un cortocircuito, un cuadro eléctrico que salta constantemente o una instalación nueva, encontrar un profesional de confianza es esencial. En CercaPro puedes contactar directamente con electricistas locales que trabajan en zonas como el Centro, Larache, Los Ángeles, El Torreón o Miguelturra.
            </p>
            <p className="text-lg text-[#4B5563] mt-4">
              Sin intermediarios, sin comisiones ocultas. Llama, pide presupuesto y resuelve la avería eléctrica lo antes posible. Si buscas un <strong className="text-[#1E3A8A]">electricista urgente en Ciudad Real</strong> o quieres comparar precios antes de contratar, aquí encontrarás la información que necesitas.
            </p>
          </div>

          {/* Precios */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              💶 Precios de un Electricista en Ciudad Real (Orientativos)
            </h2>
            <p className="text-[#4B5563] mb-6">
              Los rangos de precio habituales para trabajos eléctricos domésticos en la zona:
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
                    <td className="py-3 px-4 text-[#4B5563]">Reparación de enchufe o interruptor</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">40€ – 70€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Revisión de cuadro eléctrico</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">60€ – 100€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Instalación de punto de luz</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">50€ – 90€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Cambio de cuadro eléctrico</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">200€ – 400€</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-[#4B5563]">Servicio urgente 24 horas</td>
                    <td className="py-3 px-4 font-semibold text-[#F97316]">+40€ – 60€</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#4B5563] mt-4">
              El precio final dependerá de la complejidad del trabajo, materiales necesarios y si se trata de un servicio de urgencia fuera de horario. Para un <strong className="text-[#1E3A8A]">electricista 24 horas en Ciudad Real</strong>, suele aplicarse un recargo.
            </p>
          </div>

          {/* Servicios */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              ⚡ Servicios de Electricidad Más Solicitados
            </h2>
            <p className="text-[#4B5563] mb-4">
              Los electricistas en Ciudad Real suelen realizar desde pequeñas reparaciones hasta instalaciones completas:
            </p>
            <ul className="space-y-2 text-[#4B5563]">
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Averías eléctricas y cortocircuitos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Instalación de enchufes e interruptores
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Cambio de cuadro eléctrico
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Instalación de iluminación LED
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Revisión de instalación eléctrica
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Instalación de sistemas domóticos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Boletín eléctrico y certificados
              </li>
            </ul>
            <p className="text-[#4B5563] mt-4">
              Muchos buscan "<strong className="text-[#1E3A8A]">electricista urgente Ciudad Real</strong>" cuando hay un corte de luz o el diferencial salta constantemente.
            </p>
          </div>

          {/* Por qué usar CercaPro */}
          <div className="bg-gradient-to-br from-[#F9FAFB] to-white border-2 border-[#1E3A8A] rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              ✅ Por Qué Usar CercaPro para Encontrar Electricista
            </h2>
            <p className="text-[#4B5563] mb-4">
              La ventaja es clara: <strong className="text-[#1E3A8A]">contacto directo sin intermediarios</strong>.
            </p>
            <p className="text-[#4B5563] mb-4">
              No hay plataformas que encarezcan el servicio ni comisiones ocultas. Puedes llamar directamente al electricista, explicar el problema y recibir un presupuesto claro. Al trabajar con profesionales locales, el tiempo de respuesta es menor, especialmente en emergencias.
            </p>
            <p className="text-[#4B5563]">
              Nuestro objetivo es que encuentres un electricista en Ciudad Real de forma rápida, transparente y cercana.
            </p>
          </div>

          {/* Zonas */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              📍 Zonas Donde Trabajan los Electricistas
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
              Si vives en estas zonas, puedes encontrar electricistas disponibles para atención el mismo día.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              ❓ Preguntas Frecuentes sobre Electricistas en Ciudad Real
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#F97316] pl-4">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  ¿Cuánto cuesta un electricista en Ciudad Real?
                </h3>
                <p className="text-[#4B5563]">
                  Depende del trabajo. Una reparación simple puede costar entre 40€ y 70€, mientras que un cambio de cuadro eléctrico puede superar los 200€. Los servicios urgentes 24 horas tienen un suplemento adicional.
                </p>
              </div>

              <div className="border-l-4 border-[#F97316] pl-4">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  ¿Hay electricistas 24 horas en Ciudad Real?
                </h3>
                <p className="text-[#4B5563]">
                  Sí. Varios profesionales ofrecen servicio de urgencia para averías graves que no pueden esperar, como cortocircuitos o cortes de luz.
                </p>
              </div>

              <div className="border-l-4 border-[#F97316] pl-4">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  ¿Cómo contactar con un electricista en Ciudad Real?
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
              🔎 Encuentra Electricistas Verificados en Ciudad Real
            </h2>
            <p className="text-xl mb-6">
              Si buscas un <strong>electricista en Ciudad Real con presupuesto claro y contacto directo</strong>, consulta el listado y elige el profesional que mejor se adapte a tu necesidad.
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
            <a href="/cerrajero-ciudad-real" className="text-[#1E3A8A] hover:text-[#F97316] transition-colors flex items-center gap-2">
              <span>→</span> Cerrajeros en Ciudad Real
            </a>
            <a href="/manitas-ciudad-real" className="text-[#1E3A8A] hover:text-[#F97316] transition-colors flex items-center gap-2">
              <span>→</span> Manitas en Ciudad Real
            </a>
          </div>
        </div>

        {/* Listado Profesionales */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-[#111827] mb-6">
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
