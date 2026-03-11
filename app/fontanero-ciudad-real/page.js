import Link from 'next/link';
import { Users, Clock, BadgeCheck, Check, PhoneCall, MapPin, ChevronDown, ArrowRight } from 'lucide-react';
import ProfesionalesLista from '../../components/ProfesionalesLista';
import FaqAccordion from './FaqAccordion';

export const metadata = {
  title: 'Fontanero en Ciudad Real - Urgente 24h | Presupuesto Gratis',
  description: 'Fontaneros en Ciudad Real. Servicio urgente 24h, presupuesto gratis. Contacto directo sin comisiones. Centro, Larache, Miguelturra.',
  keywords: 'fontanero ciudad real, fontanero urgente ciudad real, fontanero 24 horas ciudad real, desatascos ciudad real, presupuesto gratis',
};

const pricingRows = [
  { service: 'Reparación de grifo o cisterna', price: '40€ – 80€', urgent: false },
  { service: 'Desatasco de fregadero o ducha', price: '60€ – 120€', urgent: false },
  { service: 'Reparación de fuga en tubería', price: '80€ – 150€', urgent: false },
  { service: 'Cambio de calentador o termo', price: '150€ – 300€', urgent: false },
  { service: 'Servicio urgente 24 horas', price: '+30€ – 50€', urgent: true },
];

const services = [
  'Reparación de fugas y goteos',
  'Desatascos urgentes',
  'Cambio e instalación de grifería',
  'Reparación de cisternas',
  'Instalación de termos eléctricos',
  'Sustitución de tuberías',
  'Reformas de baño y cocina',
];

const zones = [
  'Ciudad Real Centro', 'Larache', 'Los Ángeles', 'El Torreón',
  'Barrio Pío XII', 'Miguelturra', 'Poblete',
];

const faqs = [
  {
    q: '¿Cuánto cuesta un fontanero en Ciudad Real?',
    a: 'Depende del trabajo. Una reparación sencilla puede costar entre 40€ y 80€, mientras que trabajos más complejos como una fuga interna o cambio de termo pueden superar los 150€. Los servicios urgentes 24 horas suelen incluir un suplemento.',
  },
  {
    q: '¿Hay fontaneros 24 horas en Ciudad Real?',
    a: 'Sí. Varios profesionales ofrecen atención urgente para fugas graves, atascos importantes o averías que no pueden esperar al día siguiente.',
  },
  {
    q: '¿Cómo contactar con un fontanero en Ciudad Real?',
    a: 'Puedes llamar directamente al profesional desde el listado, sin registros ni intermediarios. Así podrás explicar la avería y solicitar presupuesto personalizado al momento.',
  },
];

const relatedServices = [
  { label: 'Electricistas en Ciudad Real', href: '/electricista-ciudad-real' },
  { label: 'Cerrajeros en Ciudad Real', href: '/cerrajero-ciudad-real' },
  { label: 'Manitas en Ciudad Real', href: '/manitas-ciudad-real' },
];

export default function FontaneroCiudadRealPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* 1. BREADCRUMB */}
        <nav className="text-sm text-muted-foreground">
          <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/fontanero" className="hover:text-accent transition-colors">Fontaneros</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Ciudad Real</span>
        </nav>

        {/* 2. HERO CARD */}
        <div className="bg-card rounded-2xl shadow-card p-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Fontanero en Ciudad Real: Servicio Urgente 24 Horas y Presupuesto Gratis
          </h1>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-xl text-sm font-medium">
              <Users size={16} /> 9 Profesionales
            </span>
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-xl text-sm font-medium">
              <Clock size={16} /> Servicio 24h
            </span>
            <span className="inline-flex items-center gap-2 bg-orange-100 text-accent px-4 py-2 rounded-xl text-sm font-medium">
              <BadgeCheck size={16} /> 0€ Comisiones
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            ¿Necesitas un <strong className="text-primary">fontanero en Ciudad Real</strong> y lo necesitas ahora? Una fuga en el baño, un desatasco en la cocina o un termo que deja de funcionar no pueden esperar. En CercaPro encontrarás profesionales de fontanería en Ciudad Real que trabajan en barrios como el Centro, Larache, Los Ángeles, El Torreón o Pío XII, además de zonas cercanas como Miguelturra y Poblete.
          </p>
          <p className="text-muted-foreground">
            Aquí no hay intermediarios ni formularios eternos. Puedes contactar directamente con el profesional, pedir presupuesto y resolver la avería lo antes posible. Si buscas un <strong className="text-primary">fontanero urgente en Ciudad Real</strong>, comparar precios orientativos y llamar sin comisiones ocultas, estás en el lugar adecuado.
          </p>
        </div>

        {/* 3. PRICING TABLE CARD */}
        <div className="bg-card rounded-2xl shadow-card overflow-hidden">
          <div className="p-8 pb-4">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Precios Orientativos de Fontanería en Ciudad Real
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
            * Los precios son orientativos y pueden variar según la complejidad del trabajo, materiales necesarios y horario del servicio.
          </p>
        </div>

        {/* 4. SERVICES LIST CARD */}
        <div className="bg-card rounded-2xl shadow-card p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Servicios de Fontanería Más Solicitados
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
            Muchos usuarios buscan <strong className="text-primary">desatascos en Ciudad Real urgente</strong> o fontanero con presupuesto gratis, especialmente cuando el problema aparece de forma inesperada.
          </p>
        </div>

        {/* 5. WHY CERCAPRO CARD */}
        <div className="bg-gradient-to-br from-secondary to-card border-2 border-primary/20 rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Por Qué Usar CercaPro para Encontrar Fontanero
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

        {/* 6. COVERAGE ZONES CARD */}
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

        {/* 7. FAQ — Client Component separado */}
        <FaqAccordion faqs={faqs} />

        {/* 8. CTA BANNER */}
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl text-center p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            Encuentra Fontaneros Verificados en Ciudad Real
          </h2>
          <p className="text-white/80 mb-6">
            Contacto directo con profesionales locales. Sin comisiones. Sin intermediarios.
          </p>
          <Link
            href="/fontanero"
            className="inline-block bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-secondary transition"
          >
            Ver Fontaneros Disponibles →
          </Link>
        </div>

        {/* 9. RELATED SERVICES */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <h3 className="font-bold text-foreground mb-4">Servicios Relacionados</h3>
          <div className="space-y-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center justify-between text-primary hover:text-accent transition-colors"
              >
                <span>{s.label}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* 10. PROFESSIONALS LIST */}
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Fontaneros Disponibles en Ciudad Real
          </h2>
          <ProfesionalesLista categoriaSlug="fontanero" mostrarFiltros={false} />
        </div>

      </div>
    </div>
  );
}
