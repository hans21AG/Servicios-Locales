import ProfesionalesLista from '../../components/ProfesionalesLista';
import Link from 'next/link';

export const metadata = {
  title: 'Manitas en Ciudad Real - Reparaciones del Hogar | Presupuesto Gratis',
  description: 'Manitas en Ciudad Real. Servicio de reparaciones del hogar, presupuesto gratis. Contacto directo sin comisiones. Centro, Larache, Miguelturra.',
  keywords: 'manitas ciudad real, reparaciones hogar ciudad real, manitas profesional, montaje muebles ciudad real, presupuesto gratis',
};

export default function ManitasCiudadRealPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-[#4B5563]">
          <Link href="/" className="hover:text-[#F97316] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/manitas" className="hover:text-[#F97316] transition-colors">Manitas</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111827] font-medium">Ciudad Real</span>
        </div>

        {/* Contenido SEO */}
        <article className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h1 className="text-4xl font-bold text-[#111827] mb-4">
              Manitas en Ciudad Real: Reparaciones del Hogar y Presupuesto Gratis
            </h1>
            <p className="text-xl text-[#4B5563] leading-relaxed">
              ¿Necesitas un <strong className="text-[#1E3A8A]">manitas en Ciudad Real</strong> para esos pequeños arreglos del hogar que no requieren un especialista? Colgar un cuadro, montar muebles de Ikea, reparar una persiana o pintar una habitación son tareas que un buen manitas puede resolver rápidamente. En CercaPro encontrarás profesionales en barrios como el Centro, Larache, Los Ángeles, El Torreón, Pío XII y zonas cercanas como Miguelturra.
            </p>
            <p className="text-lg text-[#4B5563] mt-4">
              Sin intermediarios que eleven el precio. Llama directamente, explica lo que necesitas y recibe un presupuesto claro. Si buscas un <strong className="text-[#1E3A8A]">manitas profesional en Ciudad Real</strong> para pequeñas reformas o reparaciones del hogar, aquí encontrarás opciones de confianza.
            </p>
          </div>

          {/* Precios */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              💶 Precios de un Manitas en Ciudad Real (Orientativos)
            </h2>
            <p className="text-[#4B5563] mb-6">
              Rangos de precio habituales para servicios de manitas en la zona:
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
                    <td className="py-3 px-4 text-[#4B5563]">Colgar cuadros o estanterías</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">30€ – 60€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Montaje de muebles</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">40€ – 100€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Reparación de persianas</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">50€ – 90€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-[#4B5563]">Pintura de habitación</td>
                    <td className="py-3 px-4 font-semibold text-[#1E3A8A]">150€ – 300€</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-[#4B5563]">Pequeñas reformas</td>
                    <td className="py-3 px-4 font-semibold text-[#F97316]">200€ – 500€</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#4B5563] mt-4">
              El precio final depende de la complejidad del trabajo, materiales y tiempo necesario. Para un <strong className="text-[#1E3A8A]">manitas en Ciudad Real</strong>, lo mejor es solicitar presupuesto personalizado.
            </p>
          </div>

          {/* Servicios */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              🔨 Servicios de Manitas Más Solicitados
            </h2>
            <p className="text-[#4B5563] mb-4">
              Los manitas en Ciudad Real suelen realizar una amplia variedad de trabajos del hogar:
            </p>
            <ul className="space-y-2 text-[#4B5563]">
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Montaje de muebles (Ikea, etc.)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Colgar cuadros, espejos y estanterías
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Reparación de persianas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Pintura y empapelado
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Instalación de lámparas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Reparaciones menores de carpintería
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10B981]">✓</span> Pequeñas reformas del hogar
              </li>
            </ul>
            <p className="text-[#4B5563] mt-4">
              Muchos buscan "<strong className="text-[#1E3A8A]">manitas Ciudad Real</strong>" para esos trabajos que no requieren un especialista pero necesitan mano profesional.
            </p>
          </div>

          {/* Por qué usar CercaPro */}
          <div className="bg-gradient-to-br from-[#F9FAFB] to-white border-2 border-[#1E3A8A] rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              ✅ Por Qué Usar CercaPro para Encontrar Manitas
            </h2>
            <p className="text-[#4B5563] mb-4">
              La ventaja es clara: <strong className="text-[#1E3A8A]">contacto directo sin comisiones</strong>.
            </p>
            <p className="text-[#4B5563] mb-4">
              No hay plataformas intermediarias que encarezcan el servicio. Llamas directamente al manitas, explicas el trabajo y recibes un presupuesto transparente. Al trabajar con profesionales locales, pueden desplazarse rápidamente a tu domicilio.
            </p>
            <p className="text-[#4B5563]">
              Nuestro objetivo es que encuentres un manitas en Ciudad Real de forma rápida, transparente y cercana.
            </p>
          </div>

          {/* Zonas */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              📍 Zonas Donde Trabajan los Manitas
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
              Si vives en estas zonas, puedes encontrar manitas disponibles para trabajos el mismo día o en pocos días.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              ❓ Preguntas Frecuentes sobre Manitas en Ciudad Real
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#F97316] pl-4">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  ¿Cuánto cuesta un manitas en Ciudad Real?
                </h3>
                <p className="text-[#4B5563]">
                  Depende del trabajo. Tareas simples como colgar cuadros pueden costar entre 30€ y 60€, mientras que montaje de muebles o pintura puede ir de 40€ a 300€ según la complejidad.
                </p>
              </div>

              <div className="border-l-4 border-[#F97316] pl-4">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  ¿Qué trabajos hace un manitas?
                </h3>
                <p className="text-[#4B5563]">
                  Un manitas realiza reparaciones menores del hogar: montaje de muebles, colgar elementos, reparación de persianas, pintura, pequeñas reformas y trabajos de bricolaje en general.
                </p>
              </div>

              <div className="border-l-4 border-[#F97316] pl-4">
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  ¿Cómo contactar con un manitas en Ciudad Real?
                </h3>
                <p className="text-[#4B5563]">
                  Puedes llamar directamente desde el listado, sin registros ni intermediarios. Explica el trabajo que necesitas y solicita presupuesto personalizado.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-[#1E3A8A] to-[#F97316] text-white rounded-lg p-8 text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🔎 Encuentra Manitas Verificados en Ciudad Real
            </h2>
            <p className="text-xl mb-6">
              Si buscas un <strong>manitas en Ciudad Real con presupuesto claro y contacto directo</strong>, consulta el listado y elige el profesional que mejor se adapte a tu trabajo.
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
            <a href="/cerrajero-ciudad-real" className="text-[#1E3A8A] hover:text-[#F97316] transition-colors flex items-center gap-2">
              <span>→</span> Cerrajeros en Ciudad Real
            </a>
          </div>
        </div>

        {/* Listado Profesionales */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-[#111827] mb-6">
            Manitas Disponibles en Ciudad Real
          </h2>
          <ProfesionalesLista 
            categoriaSlug="manitas" 
            mostrarFiltros={false} 
          />
        </div>
      </div>
    </div>
  );
}
