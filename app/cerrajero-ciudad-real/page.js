import ProfesionalesLista from '../../components/ProfesionalesLista';
import Link from 'next/link';


export const metadata = {
  title: 'Cerrajero en Ciudad Real - Apertura Sin Roturas 24h | Urgencias',
  description: 'Cerrajeros en Ciudad Real. Apertura sin roturas 24h, duplicado llaves, cambio cerraduras. Contacto directo sin comisiones. Centro, Larache, Miguelturra.',
  keywords: 'cerrajero ciudad real, cerrajero urgente ciudad real, cerrajero 24 horas ciudad real, apertura puertas ciudad real, cerrajero sin roturas',
};


export default function CerrajeroCiudadRealPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/cerrajero" className="hover:text-blue-600">Cerrajeros</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Ciudad Real</span>
        </div>


        {/* Contenido SEO */}
        <article className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cerrajero en Ciudad Real: Apertura Sin Roturas 24 Horas
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              ¿Te has quedado fuera de casa con las llaves dentro? ¿Se ha roto la llave en la cerradura? Cuando necesitas un <strong>cerrajero en Ciudad Real</strong> no puedes esperar hasta mañana. En Servicios Locales encontrarás profesionales de cerrajería que trabajan en el Centro, Larache, Los Ángeles, El Torreón, Pío XII, Miguelturra y Poblete, muchos con disponibilidad 24 horas para emergencias.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Nada de intermediarios que te cobran por derivarte a un cerrajero. Aquí ves el perfil del profesional, llamas directamente, preguntas el precio y decides si te conviene. Transparencia total. Muchos cerrajeros de la zona pueden abrir tu puerta sin romper nada, duplicar llaves al momento o cambiar el bombín si hace falta. Todo sin comisiones ocultas ni formularios eternos.
            </p>
          </div>


          {/* Precios */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              💶 ¿Cuánto Cuesta un Cerrajero en Ciudad Real?
            </h2>
            <p className="text-gray-600 mb-6">
              Los precios de cerrajería varían según el servicio y la urgencia. Aquí tienes una tabla orientativa con lo que suelen cobrar en la zona:
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
                    <td className="py-3 px-4">Apertura de puerta sin roturas</td>
                    <td className="py-3 px-4 font-semibold">60€ – 120€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Duplicado de llaves</td>
                    <td className="py-3 px-4 font-semibold">15€ – 40€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Cambio de bombín o cerradura</td>
                    <td className="py-3 px-4 font-semibold">80€ – 180€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Instalación cerradura de seguridad</td>
                    <td className="py-3 px-4 font-semibold">150€ – 350€</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Reparación de cerradura atascada</td>
                    <td className="py-3 px-4 font-semibold">50€ – 100€</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Servicio urgente 24 horas</td>
                    <td className="py-3 px-4 font-semibold text-red-600">+40€ – 80€</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Estos precios son estimaciones. El coste final depende del tipo de cerradura, la dificultad de la apertura y si es urgente (noche, festivo, fin de semana). Lo importante es que puedas preguntar directamente al cerrajero antes de que venga, sin sorpresas.
            </p>
          </div>


          {/* Servicios */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🔑 Servicios Más Solicitados
            </h2>
            <p className="text-gray-600 mb-4">
              Los cerrajeros de Ciudad Real que aparecen en el directorio suelen ofrecer:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Apertura de puertas sin roturas (método respetuoso con la cerradura)</li>
              <li>✓ Apertura de cajas fuertes (si has olvidado la combinación o se ha estropeado)</li>
              <li>✓ Duplicado y copia de llaves (acero, seguridad, llaves de coche...)</li>
              <li>✓ Cambio de cerraduras y bombines (si te han robado o por actualización de seguridad)</li>
              <li>✓ Instalación de cerraduras de seguridad (grado 3, antibumping, antitaladro...)</li>
              <li>✓ Reparación de cerraduras atascadas (antes de que tengas que romper algo)</li>
              <li>✓ Cambio de llaves tras robo o pérdida (para que duermas tranquilo)</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Si tienes una tienda, local u oficina, muchos cerrajeros también trabajan con cierres metálicos, cerraduras de seguridad comerciales y sistemas de apertura electrónica.
            </p>
          </div>


          {/* Por qué Servicios Locales */}
          <div className="bg-purple-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ✅ Por Qué Servicios Locales Es Diferente
            </h2>
            <p className="text-gray-700 mb-4">
              Porque aquí no pagas comisión a nadie para que te "consiga" un cerrajero. Ves los perfiles disponibles, llamas directamente y negocias el precio sin intermediarios. Punto. No hay empresa en medio que se quede un porcentaje, así que el profesional no tiene que inflarte el precio para "recuperar" lo que le cobran por aparecer en otras plataformas.
            </p>
            <p className="text-gray-700 mb-4">
              Además, son cerrajeros locales. Si te quedas tirado en Larache un domingo por la noche, puedes llamar a alguien que esté en la zona y llegue en 20-30 minutos, no a una centralita nacional que igual te deriva a un subcontratado que viene desde Toledo.
            </p>
            <p className="text-gray-700">
              Transparencia absoluta: contacto directo, precios claros antes de empezar, profesionales que conocen Ciudad Real de memoria. Tú decides con quién trabajar.
            </p>
          </div>


          {/* Zonas - CORREGIDO */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              📍 Zonas de Cobertura
            </h2>
            <p className="text-gray-600 mb-4">
              Los cerrajeros del directorio trabajan en:
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
                  ¿Cuánto cuesta un cerrajero en Ciudad Real?
                </h3>
                <p className="text-gray-600">
                  Una apertura de puerta sin romper nada suele estar entre 60 y 120€ en horario normal. Si es urgente de noche o festivo, puede subir entre 40 y 80€ extra. Cambiar un bombín ronda los 80-180€ dependiendo del modelo de seguridad que elijas. Siempre puedes preguntar precio por teléfono antes de que el cerrajero se desplace.
                </p>
              </div>


              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ¿Hay cerrajeros de urgencia 24 horas en Ciudad Real?
                </h3>
                <p className="text-gray-600">
                  Sí, varios profesionales del directorio ofrecen servicio de urgencia 24 horas, 7 días a la semana. Si te quedas fuera de casa a las 3 de la madrugada o un domingo por la tarde, puedes llamar directamente y muchos te atenderán. Eso sí, el servicio nocturno o festivo suele llevar un recargo.
                </p>
              </div>


              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ¿Pueden abrir la puerta sin romper nada?
                </h3>
                <p className="text-gray-600">
                  En la mayoría de los casos, sí. Los cerrajeros profesionales usan técnicas de apertura sin roturas (ganzúa, bumping controlado, extracción de bombín...) que respetan la cerradura. Solo en casos muy concretos (cerradura muy antigua, bombín de alta seguridad sin llave de repuesto) puede hacer falta forzar. Pero siempre te lo dirán antes de empezar.
                </p>
              </div>
            </div>
          </div>


          {/* CTA Final */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8 text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🔎 ¿Necesitas un Cerrajero Ya?
            </h2>
            <p className="text-xl mb-6">
              Busca en Servicios Locales, compara perfiles y llama directamente. Sin intermediarios, sin comisiones. Solo profesionales locales que pueden estar en tu puerta en minutos.
            </p>
          </div>
        </article>

        {/* Servicios Relacionados */}
        <div className="bg-gray-50 p-6 rounded mb-8">
          <h3 className="font-bold mb-3">Servicios Relacionados</h3>
          <div className="space-y-2">
            <a href="/fontanero-ciudad-real" className="text-blue-600 hover:underline block">
              → Fontaneros en Ciudad Real
            </a>
            <a href="/electricista-ciudad-real" className="text-blue-600 hover:underline block">
              → Electricistas en Ciudad Real
            </a>
            <a href="/manitas-ciudad-real" className="text-blue-600 hover:underline block">
              → Manitas en Ciudad Real
            </a>
          </div>
        </div>

        {/* Listado Profesionales */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
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
