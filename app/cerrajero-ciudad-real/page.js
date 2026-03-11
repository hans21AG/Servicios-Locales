import Link from 'next/link';
import { Users, Clock, BadgeCheck, Check, PhoneCall, MapPin, ArrowRight } from 'lucide-react';
import ProfesionalesLista from '../../components/ProfesionalesLista';
import FaqAccordion from './FaqAccordion';

export const metadata = {
  title: 'Cerrajero en Ciudad Real - Urgente 24h | Presupuesto Gratis',
  description: 'Cerrajeros en Ciudad Real. Apertura de puertas urgente 24h, presupuesto gratis. Contacto directo sin comisiones. Centro, Larache, Miguelturra.',
  keywords: 'cerrajero ciudad real, cerrajero urgente ciudad real, cerrajero 24 horas ciudad real, apertura puertas ciudad real',
};

const pricingRows = [
  { service: 'Apertura de puerta sin daños', price: '60€ – 100€', urgent: false },
  { service: 'Cambio de cerradura estándar', price: '80€ – 150€', urgent: false },
  { service: 'Instalación cerradura de seguridad', price: '120€ – 250€', urgent: false },
  { service: 'Apertura de caja fuerte', price: '150€ – 300€', urgent: false },
  { service: 'Servicio urgente 24 horas', price: '+30€ – 50€', urgent: true },
];

const services = [
  'Apertura de puertas sin daños',
  'Cambio y reparación de cerraduras',
  'Instalación de cerraduras de seguridad',
  'Duplicado de llaves',
  'Apertura de cajas fuertes',
  'Blindaje de puertas',
  'Urgencias 24 horas',
];

const zones = [
  'Ciudad Real Centro', 'Larache', 'Los Ángeles', 'El Torreón',
  'Barrio Pío XII', 'Miguelturra', 'Poblete',
];

const faqs = [
  {
    q: '¿Cuánto cuesta un cerrajero en Ciudad Real?',
    a: 'Una apertura de puerta estándar suele costar entre 60€ y 100€. El cambio de cerradura puede oscilar entre 80€ y 150€ según el tipo. Los servicios urgentes nocturnos o en festivos incluyen un suplemento adicional.',
  },
  {
    q: '¿Hay cerrajeros 24 horas en Ciudad Real?',
    a: 'Sí. Varios profesionales ofrecen servicio urgente las 24 horas para aperturas de emergencia, cerraduras rotas o cualquier problema que no pueda esperar.',
  },
  {
    q: '¿Cómo sé si un cerrajero es de confianza?',
    a: 'En CercaPro puedes contactar directamente con el profesional, consultar su especialidad y zona de cobertura. Siempre pide presupuesto antes de autorizar el trabajo.',
  },
];

const relatedServices = [
  { label: 'Fontaneros en Ciudad Real', href: '/fontanero-ciudad-real' },
  { label: 'Electricistas en Ciudad Real', href: '/electricista-ciudad-real' },
  { label: 'Manitas en Ciudad Real', href: '/manitas-ciudad-real' },
];

export default function CerrajeroCiudadRealPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* BREADCRUMB */}
        <nav className="text-sm text-muted-foreground">
          <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/cerrajero" className="hover:text-accent transition-colors">Cerrajeros</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Ciudad Real</span>
        </nav>

        {/* HERO CARD */}
        <div className="bg-card rounded-2xl shadow-card p-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Cerrajero en Ciudad Real: Servicio Urgente 24 Horas y Presupuesto Gratis
          </h1>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-xl text-sm font-medium">
              <Users size={16} /> 7 Profesionales
            </span>
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-xl text-sm font-medium">
              <Clock size={16} /> Servicio 24h
            </span>
            <span className="inline-flex items-center gap-2 bg-orange-100 text-accent px-4 py-2 rounded-xl text-sm font-medium">
              <BadgeCheck size={16} /> 0€ Comisiones
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            ¿Necesitas un <strong className="text-primary">cerrajero en Ciudad Real</strong> de urgencia? Quedarte sin llaves, una cerradura rota o una puerta que no abre son situaciones que no pueden esperar. En CercaPro encontrarás cerrajeros en Ciudad Real que cubren el Centro, Larache, Los Ángeles, El Torreón y zonas como Miguelturra y Poblete.
          </p>
          <p className="text-muted-foreground">
            Contacto directo con el profesional, sin intermediarios ni comisiones. Si buscas un <strong className="text-primary">cerrajero urgente en Ciudad Real</strong> con presupuesto claro, estás en el lugar correcto.
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="bg-card rounded-2xl shadow-card overflow-hidden">
          <div className="p-8 pb-4">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Precios Orientativos de Cerrajería en Ciudad Real
            </h2>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="px-8 py-3 text-sm font-semibold text-foreground">Servicio</th>
                <th className="px-8 py-3 text-sm font-semibold text-foreground text-right">Precio aproximado</th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-secondary' : ''}>
                  <td className="px-8 py-3 text-sm text-foreground">{row.service}</td>
                  <td className={`px-8 py-3 text-sm font-bold text-right ${row.urgent ? 'text-accent' : 'text-primary'}`}>
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="px-8 py-4 text-sm text-muted-foreground">
            * Precios orientativos. Pueden variar según complejidad, materiales y horario del servicio.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="bg-card rounded-2xl shadow-card p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Servicios de Cerrajería Más Solicitados
          </h2>
          <ul className="space-y-3 mb-6">
            {services.map((s, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground">
                <Check size={18} className="text-green-500 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            Muchos usuarios buscan <strong className="text-primary">cerrajero urgente en Ciudad Real</strong> cuando se quedan sin acceso a su vivienda. Con CercaPro puedes llamar directamente al profesional sin esperas.
          </p>
        </div>

        {/* WHY CERCAPRO */}
        <div className="bg-gradient-to-br from-secondary to-card border-2 border-primary/20 rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Por Qué Usar CercaPro para Encontrar Cerrajero
          </h2>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <PhoneCall size={22} className="text-primary shrink-0 mt-0.5" />
              <p className="text-foreground">Contacto directo sin intermediarios</p>
            </div>
            <div className="flex items-start gap-4">
              <BadgeCheck size={22} className="text-primary shrink-0 mt-0.5" />
              <p className="text-foreground">Sin comisiones ocultas</p>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={22} className="text-accent shrink-0 mt-0.5" />
              <p className="text-foreground">Profesionales locales, respuesta rápida</p>
            </div>
          </div>
        </div>

        {/* COVERAGE ZONES */}
        <div className="bg-card rounded-2xl shadow-card p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Zonas de Cobertura en Ciudad Real
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {zones.map((zone) => (
              <div
                key={zone}
                className="bg-card border border-border rounded-xl p-3 flex items-center gap-2 hover:border-accent hover:scale-[1.02] transition-all cursor-default"
              >
                <MapPin size={16} className="text-accent shrink-0" />
                <span className="text-foreground text-sm">{zone}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <FaqAccordion faqs={faqs} title="Preguntas Frecuentes sobre Cerrajeros en Ciudad Real" />

        {/* CTA BANNER */}
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl text-center p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            Encuentra Cerrajeros Verificados en Ciudad Real
          </h2>
          <p className="text-white/80 mb-6">
            Contacto directo con profesionales locales. Sin comisiones. Sin intermediarios.
          </p>
          <Link href="/cerrajero" className="inline-block bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-secondary transition">
            Ver Cerrajeros Disponibles →
          </Link>
        </div>

        {/* RELATED SERVICES */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <h3 className="font-bold text-foreground mb-4">Servicios Relacionados</h3>
          <div className="space-y-3">
            {relatedServices.map((s) => (
              <Link key={s.href} href={s.href} className="flex items-center justify-between text-primary hover:text-accent transition-colors">
                <span>{s.label}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* PROFESSIONALS LIST */}
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Cerrajeros Disponibles en Ciudad Real
          </h2>
          <ProfesionalesLista categoriaSlug="cerrajero" mostrarFiltros={false} />
        </div>

      </div>
    </div>
  );
}
