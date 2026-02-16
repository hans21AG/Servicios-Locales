import ProfesionalesLista from '@/components/ProfesionalesLista'

export const metadata = {
  title: 'Manitas en Ciudad Real - Reparaciones y Pequeñas Reformas Sin Comisiones',
  description: 'Encuentra manitas en Ciudad Real para montaje de muebles, colgar estanterías, reparar persianas y más. Contacto directo, sin comisiones. Desde 30€.',
  keywords: 'manitas ciudad real, manitas miguelturra, montaje muebles ciudad real, reparaciones hogar ciudad real, colgar estanterías ciudad real, arreglar persianas',
  openGraph: {
    title: 'Manitas en Ciudad Real - Servicios Locales',
    description: 'Directorio gratuito de manitas profesionales en Ciudad Real. Montaje, reparaciones y bricolaje sin comisiones.',
    type: 'website',
    locale: 'es_ES',
  }
}

export default function ManitasCiudadReal() {
  const faqs = [
    {
      question: "¿Cuánto cuesta un manitas en Ciudad Real?",
      answer: "Depende del trabajo. Colgar un par de cuadros puede salir por 30-40€, mientras que montar una cocina completa del Ikea puede irse a 100-150€ o más. Muchos manitas cobran por horas (15-25€/hora) o hacen presupuesto cerrado según el trabajo. Lo mejor es llamar, explicar qué necesitas y pedir precio sin compromiso."
    },
    {
      question: "¿Qué tipo de trabajos hace un manitas?",
      answer: "Un manitas es el profesional todoterreno para pequeños arreglos: montar muebles, colgar estanterías, reparar persianas, cambiar grifos, instalar cortinas, arreglar puertas que no cierran bien, pintar una habitación... Todo lo que no requiere un especialista (electricista, fontanero) pero que necesita manos expertas. Si tienes dudas, llama y pregunta."
    },
    {
      question: "¿Cómo contactar con un manitas en Ciudad Real?",
      answer: "Entra en Servicios Locales, busca manitas y verás los perfiles disponibles en Ciudad Real y Miguelturra. Cada profesional tiene su teléfono o formulario de contacto. Llamas, explicas lo que necesitas, pides presupuesto y listo. Sin formularios complicados ni esperas interminables para que te llamen varias empresas."
    }
  ]

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Servicios Locales Ciudad Real - Manitas",
    "description": "Directorio gratuito de manitas profesionales en Ciudad Real",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad Real",
      "addressRegion": "Castilla-La Mancha",
      "addressCountry": "ES"
    },
    "url": "https://servicios-locales.vercel.app/manitas-ciudad-real",
    "priceRange": "€€",
    "areaServed": ["Ciudad Real", "Miguelturra", "Poblete"]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
      />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Manitas en Ciudad Real: Reparaciones y Pequeñas Reformas Sin Comisiones</h1>
        
        <div className="prose max-w-none mb-8">
          <p>
            ¿Necesitas colgar una estantería, arreglar una persiana que no sube o montar los muebles del Ikea? 
            Cuando buscas un manitas en Ciudad Real que haga esos pequeños arreglos que no sabes (o no quieres) hacer tú, 
            lo último que necesitas es rellenar formularios o pagar comisiones a intermediarios. En Servicios Locales 
            conectamos directamente con profesionales que trabajan en Ciudad Real capital y Miguelturra.
          </p>
          <p>
            Aquí no hay empresas que se queden un porcentaje por ponerte en contacto. Ves el perfil del manitas, 
            llamas directamente, explicas lo que necesitas y pides presupuesto. Simple y transparente. Desde colgar 
            un cuadro hasta cambiar un grifo que gotea, pasando por montar muebles o arreglar una puerta que no 
            cierra bien. Los pequeños trabajos del día a día que necesitan manos expertas.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">¿Cuánto Cuesta un Manitas en Ciudad Real?</h2>
        <p className="mb-4">Los precios varían según el tipo de trabajo y el tiempo que lleve, pero aquí tienes una referencia orientativa:</p>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-gray-300 p-3 text-left">Servicio</th>
                <th className="border border-gray-300 p-3 text-left">Precio aproximado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">Colgar cuadros, espejos o estanterías</td>
                <td className="border border-gray-300 p-3">30€ – 60€</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Montaje de muebles (Ikea, Leroy...)</td>
                <td className="border border-gray-300 p-3">50€ – 120€</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Reparación de persianas</td>
                <td className="border border-gray-300 p-3">40€ – 90€</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Instalación de cortinas o estores</td>
                <td className="border border-gray-300 p-3">35€ – 70€</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Cambio de grifos o reparaciones simples</td>
                <td className="border border-gray-300 p-3">50€ – 100€</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Pequeñas reparaciones de carpintería</td>
                <td className="border border-gray-300 p-3">40€ – 80€</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Arreglo de puertas (ajuste, bisagras...)</td>
                <td className="border border-gray-300 p-3">45€ – 85€</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mb-8">
          Estos precios son estimaciones. Lo mejor es que contactes directamente con el manitas para que valore tu caso. 
          Muchos cobran por horas (entre 15-25€/hora) o por trabajo completo, dependiendo de lo que necesites.
        </p>

        <h2 className="text-2xl font-bold mb-4">Servicios Más Solicitados</h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Montaje de muebles (Ikea, Brico Depot, Leroy Merlin, Conforama...)</li>
          <li>Colgar cuadros, espejos y estanterías (con tacos, nivelado perfecto)</li>
          <li>Reparación e instalación de persianas (cambio de cinta, arreglo de mecanismo)</li>
          <li>Instalación de cortinas, estores y rieles</li>
          <li>Pequeñas reparaciones de fontanería (cambiar grifos, arreglar cisternas)</li>
          <li>Reparaciones de carpintería (puertas que rozan, armarios descolgados)</li>
          <li>Instalación de apliques, lámparas y pequeños electrodomésticos</li>
          <li>Trabajos de bricolaje general (lo que se te ocurra que no sea una gran obra)</li>
        </ul>

        <p className="mb-8">
          Si necesitas algo más específico, pregúntales. Muchos manitas también hacen pequeñas reformas, 
          pintura de habitaciones o instalación de suelos laminados.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <h3 className="text-xl font-bold mb-3">Por Qué Usar Servicios Locales</h3>
          <p className="mb-4">
            Porque aquí el contacto es directo. Nada de plataformas que te hacen esperar días para que te llamen 
            tres profesionales distintos y luego cobran comisión al que contrates. Nosotros te mostramos los perfiles, 
            tú eliges y contactas. El manitas no paga nada por aparecer aquí, así que no tiene que "recuperar" ese 
            coste subiéndote el precio.
          </p>
          <p className="mb-4">
            Además, son profesionales locales de Ciudad Real y Miguelturra. Si necesitas montar una cómoda urgente 
            porque te mudas este fin de semana, puedes llamar a alguien de la zona que te atienda rápido. Esa cercanía 
            y disponibilidad no la consigues con plataformas nacionales que igual te mandan a alguien desde otra provincia.
          </p>
          <p>
            Transparencia total: ves cómo contactar, zonas donde trabajan y, cuando las hay, opiniones de otros clientes. 
            Tú decides, sin presiones ni intermediarios.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Zonas de Cobertura en Ciudad Real</h2>
        <p className="mb-4">Los manitas del directorio trabajan principalmente en:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-300 p-4 rounded text-center hover:bg-gray-50 transition">
            Ciudad Real capital
          </div>
          <div className="border border-gray-300 p-4 rounded text-center hover:bg-gray-50 transition">
            Centro
          </div>
          <div className="border border-gray-300 p-4 rounded text-center hover:bg-gray-50 transition">
            Larache
          </div>
          <div className="border border-gray-300 p-4 rounded text-center hover:bg-gray-50 transition">
            Los Ángeles
          </div>
          <div className="border border-gray-300 p-4 rounded text-center hover:bg-gray-50 transition">
            El Torreón
          </div>
          <div className="border border-gray-300 p-4 rounded text-center hover:bg-gray-50 transition">
            Pío XII
          </div>
          <div className="border border-gray-300 p-4 rounded text-center hover:bg-gray-50 transition">
            Miguelturra
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-8">
          Algunos profesionales también pueden desplazarse a Poblete o localidades cercanas si el trabajo lo merece. 
          Pregúntales directamente al llamar.
        </p>

        <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-6 mb-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="text-xl font-bold mb-2">¿Necesitas un manitas hoy?</h3>
          <p>
            Explora los perfiles disponibles, compara y contacta directamente. Sin intermediarios, sin comisiones. 
            Solo profesionales locales que pueden solucionar esos pequeños arreglos que llevas semanas posponiendo.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded mb-8">
          <h3 className="font-bold mb-3">Servicios Relacionados</h3>
          <div className="space-y-2">
            <a href="/fontanero-ciudad-real" className="text-blue-600 hover:underline block">
              → Fontaneros en Ciudad Real
            </a>
            <a href="/electricista-ciudad-real" className="text-blue-600 hover:underline block">
              → Electricistas en Ciudad Real
            </a>
            <a href="/cerrajero-ciudad-real" className="text-blue-600 hover:underline block">
              → Cerrajeros en Ciudad Real
            </a>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Manitas Disponibles en Ciudad Real</h2>
        <ProfesionalesLista categoriaSlug="manitas" />

        <p className="text-sm text-gray-500 mt-8">
          Última actualización: 16 de febrero de 2026
        </p>
      </main>
    </>
  )
}