'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import Link from 'next/link';
import { Droplets, Zap, KeyRound, Wrench, Phone, Mail, MapPin, BadgeCheck, ChevronDown } from 'lucide-react';

// ─── GA4 ──────────────────────────────────────────────────────────────────────
function trackEvent(name, params) {
  if (typeof window !== 'undefined' && window.gtag) window.gtag('event', name, params);
}

// ─── Iconos categoría ─────────────────────────────────────────────────────────
const CATEGORY_ICONS = {
  fontanero: { icon: Droplets, color: '#3B82F6', bg: '#EFF6FF' },
  electricista: { icon: Zap, color: '#EAB308', bg: '#FEFCE8' },
  cerrajero: { icon: KeyRound, color: '#10B981', bg: '#ECFDF5' },
  manitas: { icon: Wrench, color: '#F97316', bg: '#FFF7ED' },
};

// ─── Google Logo ──────────────────────────────────────────────────────────────
function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

// ─── Google Stars con medias estrellas ────────────────────────────────────────
function GoogleStars({ rating, reviewCount }) {
  if (!rating || rating <= 0) return null;
  return (
    <div className="flex items-center gap-1.5">
      <GoogleLogo />
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const diff = rating - i;
          const full = diff >= 0.75;
          const half = diff >= 0.25 && diff < 0.75;
          return (
            <span key={i} className="relative inline-block h-3.5 w-3.5">
              {/* estrella vacía de fondo */}
              <svg className="absolute inset-0 h-3.5 w-3.5" fill="none" stroke="#D1D5DB" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              {/* estrella llena o media */}
              {(full || half) && (
                <span className="absolute inset-0 overflow-hidden" style={{ width: full ? '100%' : '50%' }}>
                  <svg className="h-3.5 w-3.5" fill="#FACC15" viewBox="0 0 24 24">
                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </span>
              )}
            </span>
          );
        })}
      </div>
      <span className="text-sm font-medium" style={{ color: '#111827' }}>{rating}</span>
      <span className="text-sm" style={{ color: '#6B7280' }}>({reviewCount})</span>
    </div>
  );
}

// ─── Disponibilidad ───────────────────────────────────────────────────────────
function getEstadoDisponibilidad(pro) {
  if (pro.disponible_24h) return { status: '24h', label: '24h', schedule: 'Siempre disponible' };
  const ahora = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Madrid' }));
  const horaActual = ahora.getHours() * 60 + ahora.getMinutes();
  const inicio = parseInt(String(pro.horario_inicio || '09:00').split(':')[0]) * 60 +
    parseInt(String(pro.horario_inicio || '09:00').split(':')[1] || '0');
  const fin = parseInt(String(pro.horario_fin || '18:00').split(':')[0]) * 60 +
    parseInt(String(pro.horario_fin || '18:00').split(':')[1] || '0');
  const abierto = horaActual >= inicio && horaActual < fin;
  return {
    status: abierto ? 'open' : 'closed',
    label: abierto ? 'Abierto' : 'Cerrado',
    schedule: pro.horario_texto || 'Lun-Vie 9:00-18:00',
  };
}

// ─── Badge disponibilidad ─────────────────────────────────────────────────────
function StatusBadge({ pro }) {
  const [estado, setEstado] = useState(null);
  useEffect(() => { setEstado(getEstadoDisponibilidad(pro)); }, [pro]);
  if (!estado) return null;

  if (estado.status === '24h') return (
    <div className="flex items-center gap-2 shrink-0">
      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: '#EFF6FF', color: '#1D4ED8' }}>
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
        24h
      </span>
      <span className="text-xs" style={{ color: '#6B7280' }}>{estado.schedule}</span>
    </div>
  );
  if (estado.status === 'open') return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 shrink-0">
      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: '#F0FDF4', color: '#15803D' }}>
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        Abierto
      </span>
      <span className="text-xs whitespace-pre-line" style={{ color: '#6B7280' }}>{estado.schedule}</span>
    </div>
  );
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 shrink-0">
      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: '#FEF2F2', color: '#DC2626' }}>
        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
        Cerrado
      </span>
      <span className="text-xs whitespace-pre-line" style={{ color: '#6B7280' }}>{estado.schedule}</span>
    </div>
  );
}

// ─── WhatsApp SVG ─────────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Tarjeta individual ───────────────────────────────────────────────────────
function TarjetaProfesional({ pro, categoriaSlug, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const slug = categoriaSlug || pro.categorias?.slug || 'manitas';
  const catCfg = CATEGORY_ICONS[slug] || { icon: Wrench, color: '#6B7280', bg: '#F9FAFB' };
  const IconComponent = catCfg.icon;
  const catNombre = pro.categorias?.nombre || (slug.charAt(0).toUpperCase() + slug.slice(1));

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const whatsappUrl = pro.whatsapp && pro.whatsapp.trim() !== ''
    ? `https://wa.me/34${pro.whatsapp.replace(/\s/g, '')}?text=Hola%20${encodeURIComponent(pro.nombre)}%2C%20te%20contacto%20desde%20CercaPro.`
    : null;

  return (
    <div
      ref={cardRef}
      className="rounded-2xl border bg-card transition-all duration-700 ease-out"
      style={{
        borderColor: 'var(--color-border, #E5E7EB)',
        boxShadow: '0 2px 12px rgba(30,58,138,0.07)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(30,58,138,0.13)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(30,58,138,0.07)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Info principal */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0">
            {/* Icono */}
            <div className="h-14 w-14 shrink-0 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-110"
              style={{ background: catCfg.bg }}>
              <IconComponent style={{ color: catCfg.color }} className="h-7 w-7" />
            </div>
            <div className="min-w-0">
              {/* Nombre + verificado */}
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {pro.nombre}
                </h3>
                <BadgeCheck className="h-5 w-5 shrink-0 text-accent" />
              </div>
              {/* Badge categoría + Google stars */}
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-md px-2.5 py-0.5 text-xs font-semibold"
                  style={{ background: 'rgba(30,58,138,0.1)', color: '#1E3A8A' }}>
                  {catNombre}
                </span>
                <GoogleStars rating={pro.google_rating} reviewCount={pro.google_reviews} />
              </div>
            </div>
          </div>
          {/* Badge disponibilidad */}
          <StatusBadge pro={pro} />
        </div>

        {/* Descripción */}
        {pro.descripcion && (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {pro.descripcion}
          </p>
        )}

        {/* Ciudad */}
        <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
          {pro.ciudad}
        </div>
      </div>

      {/* Footer contacto */}
      <div className="border-t border-border px-6 py-4 flex items-center justify-between gap-3 flex-wrap">
        {/* Teléfono */}
        <a
          href={`tel:${pro.telefono?.replace(/\s/g, '')}`}
          onClick={() => trackEvent('click_telefono', { profesional_nombre: pro.nombre, id: pro.id, categoria: slug, ciudad: pro.ciudad })}
          className="inline-flex items-center gap-2 text-sm font-bold transition-colors text-primary hover:text-accent"
        >
          <Phone className="h-4 w-4 text-accent" />
          {pro.telefono}
        </a>

        {/* Botones */}
        <div className="flex items-center gap-2">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { profesional_nombre: pro.nombre, id: pro.id, categoria: slug, ciudad: pro.ciudad })}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white transition-colors"
              style={{ background: '#25D366' }}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          )}
          {pro.email && (
            <a
              href={`mailto:${pro.email}?subject=Solicitud de servicio via CercaPro&body=Hola ${pro.nombre}, te contacto desde CercaPro.`}
              onClick={() => trackEvent('click_email', { profesional_nombre: pro.nombre, id: pro.id, categoria: slug })}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white transition-colors"
              style={{ background: '#1E3A8A' }}
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function ProfesionalesLista({ categoriaSlug, mostrarFiltros = true }) {
  const [profesionales, setProfesionales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ciudadFiltro, setCiudadFiltro] = useState('todas');
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    async function fetchProfesionales() {
      setLoading(true);
      let query = supabase
        .from('Profesionales')
        .select('*, categorias(nombre, icono, slug), disponible_24h, horario_inicio, horario_fin, horario_texto, google_rating, google_reviews')
        .order('nombre');

      if (categoriaSlug) {
        const { data: catData } = await supabase
          .from('categorias').select('id').eq('slug', categoriaSlug).single();
        if (catData) query = query.eq('categoria_id', catData.id);
      }

      const { data, error } = await query;
      if (!error && data) {
        setProfesionales(data);
        const uniqueCiudades = [...new Set(data.map(p => p.ciudad))].filter(Boolean).sort();
        setCiudades(uniqueCiudades);
      }
      setLoading(false);
    }
    fetchProfesionales();
  }, [categoriaSlug]);

  // Sort abiertos primero
  const [filtrados, setFiltrados] = useState([]);
  useEffect(() => {
    const base = ciudadFiltro === 'todas' ? profesionales : profesionales.filter(p => p.ciudad === ciudadFiltro);
    const sorted = [...base].sort((a, b) => {
      const ea = getEstadoDisponibilidad(a);
      const eb = getEstadoDisponibilidad(b);
      const rank = s => s.status === '24h' ? 0 : s.status === 'open' ? 1 : 2;
      return rank(ea) - rank(eb);
    });
    setFiltrados(sorted);
  }, [profesionales, ciudadFiltro]);

  if (loading) return (
    <div className="flex justify-center py-12">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );

  return (
    <div>

      {/* Filtro ciudad */}
      {mostrarFiltros && ciudades.length > 1 && (
        <div className="mb-6">
          <label className="block text-xs font-semibold uppercase tracking-wide mb-2 text-muted-foreground">
            Ciudad
          </label>
          <div className="relative w-full sm:w-64">
            <select
              value={ciudadFiltro}
              onChange={e => setCiudadFiltro(e.target.value)}
              className="w-full appearance-none rounded-xl border border-border bg-card px-4 py-2.5 pr-10 text-sm font-medium text-foreground"
            >
              <option value="todas">Todas las ciudades</option>
              {ciudades.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      )}

      {/* Contador */}
      {mostrarFiltros && (
        <p className="mb-5 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{filtrados.length}</span> profesionales encontrados
        </p>
      )}

      {/* Grid */}
      {filtrados.length === 0 ? (
        <div className="py-12 text-center rounded-2xl border border-border text-muted-foreground">
          No hay profesionales en esta ciudad aún.
        </div>
      ) : (
        <div className="grid gap-5">
          {filtrados.map((pro, i) => (
            <TarjetaProfesional key={pro.id} pro={pro} categoriaSlug={categoriaSlug} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
