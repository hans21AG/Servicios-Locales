import ProfesionalesLista from '../../components/ProfesionalesLista';
import Link from 'next/link';

export const metadata = {
  title: 'Fontanero en Ciudad Real - Urgente 24h | Presupuesto Gratis',
  description: 'Fontaneros en Ciudad Real. Servicio urgente 24h, presupuesto gratis. Contacto directo sin comisiones. Centro, Larache, Miguelturra.',
  keywords: 'fontanero ciudad real, fontanero urgente ciudad real, fontanero 24 horas ciudad real, desatascos ciudad real, presupuesto gratis',
};

export default function FontaneroCiudadRealPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-[#4B5563]">
          <Link href="/" className="hover:text-[#F97316] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/fontanero" className="hover:text-[#F97316] transition-colors">Fontaneros</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111827] font-medium">Ciudad Real</span>
        </div>

        {/* Contenido SEO */}
        <article className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h1 className="text-4xl font-bold text-[#111827] mb-4">
              Fontanero en Ciudad Real: Servicio Urgente 24 Horas y Presupuesto Gratis
            </h1>
            <p className="text-xl text-[#4B5563] leading-relaxed">
              ¿Necesitas un <strong className="text-[#1E3A8A]">fontanero en Ciudad Real</strong> y lo necesitas ahora? Una fuga en el baño, un desatasco en la cocina o un termo que deja de funcionar no pueden esperar. En CercaPro encontrarás profesionales de fontanería en Ciudad Real que trabajan en barrios como el Centro, Larache, Los Ángeles, El Torreón o Pío XII, además de zonas cercanas como Miguelturra y Poblete.
            </p>
            <p className="text-lg text-[#4B5563] mt-4">
              Aquí no hay intermediarios ni formularios eternos. Puedes contactar directamente con el profesional, pedir presupuesto y resolver la avería lo antes posible. Si buscas un <strong className="text-[#1E3A8A]">fontanero urgente en Ciudad Real</strong>, comparar precios orientativos y llamar sin comisiones ocultas, estás en el lugar adecuado.
            </p>
          </div>

          {/* Precios */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              💶 Precios de un Fontanero en Ciudad Real (Orientativos)
            </h2>
            <p className="text-[#4B5563] mb-6">
              Estos son los rangos habituales en la zona para servicios de fontanería doméstica:
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
                    <td className="py-3 px-4 text-[#4B5563]">Reparación de grifo o cisterna</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">40€ – 80€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Desatasco de fregadero o ducha</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">60€ – 120€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Reparación de fuga en tubería</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">80€ – 150€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Cambio de calentador o termo</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">150€ – 300€</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-[#4B5563]">Servicio urgente 24 horas</td>
                    <td className="py-3 px-4 font-semibold text-[#F97316]">+30€ – 50€</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#4B5563] mt-4">
              El precio final puede variar según la complejidad, materiales y horario (noche o festivo). Si necesitas un <strong className="text-[#1E3A8A]">fontanero 24 horas en Ciudad Real</strong>, es normal que exista un pequeño suplemento por urgencia.
            </p>
          </div>

          {/* Servicios */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              🔧 Servicios de Fontanería Más Solicitados
            </h2>
            <p className="text-[#4B5563] mb-4">
              Los fontaneros en Ciudad Real suelen cubrir tanto pequeñas reparaciones como trabajos más completos en viviendas y locales:
            </p>
            <ul className="space-y-2 text-[#4B5563]">
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Reparación de fugas y goteos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Desatascos urgentes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Cambio e instalación de grifería
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Reparación de cisternas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Instalación de termos eléctricos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Sustitución de tuberías
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Reformas de baño y cocina
              </li>
            </ul>
            <p className="text-[#4B5563] mt-4">
              Muchos usuarios buscan "<strong className="text-[#1E3A8A]">desatascos en Ciudad Real urgente</strong>" o "fontanero presupuesto gratis", especialmente cuando el problema aparece de forma inesperada.
            </p>
          </div>

          {/* Por qué usar CercaPro */}
          <div className="bg-gradient-to-br from-[#F9FAFB] to-white border-2 border-[#1E3A8A] rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              ✅ Por Qué Usar CercaPro para Encontrar Fontanero
            </h2>
            <p className="text-[#4B5563] mb-4">
              La diferencia es simple: <strong className="text-[#1E3A8A]">contacto directo y sin comisiones</strong>.
            </p>
            <p className="text-[#4B5563] mb-4">
              Aquí puedes hablar con el profesional sin intermediarios que encarezcan el servicio. No se cobra por solicitar presupuesto y no hay plataformas que inflen el precio por gestionar el lead. Además, al tratarse de profesionales locales, el tiempo de respuesta suele ser menor, especialmente en servicios urgentes 24 horas.
            </p>
            <p className="text-[#4B5563]">
              Nuestro objetivo es facilitar que encuentres un fontanero en Ciudad Real de forma rápida, transparente y cercana.
            </p>
          </div>

          {/* Zonas */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              📍 Zonas Donde Trabajan los Fontaneros
            </h2>
            <p className="text-[#4B5563] mb-4">
              Los profesionales listados cubren habitualmente:
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
              Si vives en estas zonas o alrededores, puedes encontrar fontaneros disponibles para reparaciones el mismo día.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              ❓ Preguntas Frecuentes sobre Fontaneros en Ciudad Real
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#F97316] pl-4">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  ¿Cuánto cuesta un fontanero en Ciudad Real?
                </h3>
                <p className="text-[#4B5563]">
                  Depende del trabajo. Una reparación sencilla puede costar entre 40€ y 80€, mientras que una intervención más compleja como una fuga interna o cambio de termo puede superar los 150€. Los servicios urgentes 24 horas suelen incluir un suplemento.
                </p>
              </div>

              <div className="border-l-4 border-[#F97316] pl-4">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  ¿Hay fontaneros 24 horas en Ciudad Real?
                </h3>
                <p className="text-[#4B5563]">
                  Sí. Varios profesionales ofrecen atención urgente para fugas graves, atascos importantes o averías que no pueden esperar al día siguiente.
                </p>
              </div>

              <div className="border-l-4 border-[#F97316] pl-4">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  ¿Cómo contactar con un fontanero en Ciudad Real?
                </h3>
                <p className="text-[#4B5563]">
                  Puedes llamar directamente al profesional desde el listado, sin registros ni intermediarios. Así podrás explicar la avería y solicitar presupuesto personalizado al momento.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-[#1E3A8A] to-[#F97316] text-white rounded-lg p-8 text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🔎 Encuentra Fontaneros Verificados en Ciudad Real
            </h2>
            <p className="text-xl mb-6">
              Si buscas un <strong>fontanero en Ciudad Real con presupuesto claro y contacto directo</strong>, consulta el listado disponible y elige el profesional que mejor se adapte a tu urgencia o tipo de trabajo.
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
            <a href="/electricista-ciudad-real" className="text-[#1E3A8A] hover:text-[#F97316] transition-colors flex items-center gap-2">
              <span>→</span> Electricistas en Ciudad Real
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
            Fontaneros Disponibles en Ciudad Real
          </h2>
          <ProfesionalesLista 
            categoriaSlug="fontanero" 
            mostrarFiltros={false} 
          />
        </div>
      </div>
    </div>
  );
}
