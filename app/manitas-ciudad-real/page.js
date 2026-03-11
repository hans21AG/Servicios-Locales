import Link from 'next/link';
import { Users, Clock, BadgeCheck, Check, PhoneCall, MapPin, ArrowRight } from 'lucide-react';
import ProfesionalesLista from '../../components/ProfesionalesLista';
import FaqAccordion from './FaqAccordion';

export const metadata = {
  title: 'Manitas en Ciudad Real - Reparaciones del Hogar | Presupuesto Gratis',
  description: 'Manitas en Ciudad Real. Montaje de muebles, pintura, pequeñas reparaciones. Contacto directo sin comisiones. Centro, Larache, Miguelturra.',
  keywords: 'manitas ciudad real, manitas a domicilio ciudad real, reparaciones hogar ciudad real, montaje muebles ciudad real',
};

const pricingRows = [
  { service: 'Montaje de muebles (pack)', price: '40€ – 80€', urgent: false },
  { service: 'Pintura de habitación', price: '80€ – 200€', urgent: false },
  { service: 'Instalación de persianas o cortinas', price: '30€ – 60€', urgent: false },
  { service: 'Reparaciones varias en el hogar', price: '40€ – 100€', urgent: false },
  { service: 'Servicio urgente mismo día', price: '+20€ – 40€', urgent: true },
];

const services = [
  'Montaje de muebles de IKEA y otros',
  'Pintura de paredes y techos',
  'Instalación de persianas y cortinas',
  'Pequeñas reparaciones del hogar',
  'Colocación de cuadros y estantes',
  'Reparación de puertas y ventanas',
  'Trabajos de bricolaje en general',
];

const zones = [
  'Ciudad Real Centro', 'Larache', 'Los Ángeles', 'El Torreón',
  'Barrio Pío XII', 'Miguelturra', 'Poblete',
];

const faqs = [
  {
    q: '¿Cuánto cuesta un manitas en Ciudad Real?',
    a: 'Depende del trabajo. El montaje de muebles suele costar entre 40€ y 80€, y una habitación pintada entre 80€ y 200€. La mayoría de trabajos pequeños se resuelven en una visita de 1 a 3 horas.',
  },
  {
    q: '¿Qué trabajos hace un manitas?',
    a: 'Un manitas se encarga de pequeñas reparaciones del hogar que no requieren un especialista: montar muebles, colgar cuadros, pintar paredes, instalar persianas, arreglar puertas o ventanas y trabajos de bricolaje en general.',
  },
  {
    q: '¿Cómo contactar con un manitas en Ciudad Real?',
    a: 'Puedes llamar directamente al profesional desde el listado, sin registros ni intermediarios. Explica el trabajo y solicita presupuesto antes de confirmar la visita.',
  },
];

const relatedServices = [
  { label: 'Fontaneros en Ciudad Real', href: '/fontanero-ciudad-real' },
  { label: 'Electricistas en Ciudad Real', href: '/electricista-ciudad-real' },
  { label: 'Cerrajeros en Ciudad Real', href: '/cerrajero-ciudad-real' },
];

export default function ManitasCiudadRealPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* BREADCRUMB */}
        <nav className="text-sm text-muted-foreground">
          <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/manitas" className="hover:text-accent transition-colors">Manitas</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Ciudad Real</span>
        </nav>

        {/* HERO CARD */}
        <div className="bg-card rounded-2xl shadow-card p-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Manitas en Ciudad Real: Reparaciones del Hogar y Presupuesto Gratis
          </h1>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-xl text-sm font-medium">
              <Users size={16} /> 5 Profesionales
            </span>
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-xl text-sm font-medium">
              <Clock size={16} /> Mismo día
            </span>
            <span className="inline-flex items-center gap-2 bg-orange-100 text-accent px-4 py-2 rounded-xl text-sm font-medium">
              <BadgeCheck size={16} /> 0€ Comisiones
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            ¿Buscas un <strong className="text-primary">manitas en Ciudad Real</strong> para montar muebles, pintar una habitación o resolver pequeñas reparaciones del hogar? En CercaPro encontrarás profesionales disponibles en el Centro, Larache, Los Ángeles, El Torreón y zonas como Miguelturra y Poblete.
          </p>
          <p className="text-muted-foreground">
            Contacto directo con el profesional, sin intermediarios ni comisiones. Si buscas un <strong className="text-primary">manitas a domicilio en Ciudad Real</strong> con presupuesto claro y respuesta rápida, estás en el lugar correcto.
          </p>
        </div>

        {/* PRICING TABLE */}
        <div className="bg-card rounded-2xl shadow-card overflow-hidden">
          <div className="p-8 pb-4">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Precios Orientativos de Manitas en Ciudad Real
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
            * Precios orientativos. Pueden variar según complejidad, materiales y tiempo estimado del trabajo.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="bg-card rounded-2xl shadow-card p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Servicios de Manitas Más Solicitados
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
            Muchos usuarios buscan <strong className="text-primary">manitas a domicilio en Ciudad Real</strong> para trabajos que no requieren un especialista pero sí experiencia y herramientas adecuadas.
          </p>
        </div>

        {/* WHY CERCAPRO */}
        <div className="bg-gradient-to-br from-secondary to-card border-2 border-primary/20 rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Por Qué Usar CercaPro para Encontrar Manitas
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
        <FaqAccordion faqs={faqs} title="Preguntas Frecuentes sobre Manitas en Ciudad Real" />

        {/* CTA BANNER */}
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl text-center p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            Encuentra Manitas Verificados en Ciudad Real
          </h2>
          <p className="text-white/80 mb-6">
            Contacto directo con profesionales locales. Sin comisiones. Sin intermediarios.
          </p>
          <Link href="/manitas" className="inline-block bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-secondary transition">
            Ver Manitas Disponibles →
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
            Manitas Disponibles en Ciudad Real
          </h2>
          <ProfesionalesLista categoriaSlug="manitas" mostrarFiltros={false} />
        </div>

      </div>
    </div>
  );
}
