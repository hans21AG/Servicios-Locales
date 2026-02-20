'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';

// ─── Utilidad: ¿está abierto ahora mismo? ────────────────────────────────────
function estaAbiertoAhora(profesional) {
  if (profesional.disponible_24h) return true;
  if (!profesional.horario_inicio || !profesional.horario_fin) return null;

  const ahora = new Date();
  const horaActual = ahora.getHours() * 60 + ahora.getMinutes();

  const [hIni, mIni] = profesional.horario_inicio.split(':').map(Number);
  const [hFin, mFin] = profesional.horario_fin.split(':').map(Number);

  return horaActual >= hIni * 60 + mIni && horaActual < hFin * 60 + mFin;
}

// ─── Badge disponibilidad ─────────────────────────────────────────────────────
function BadgeDisponibilidad({ profesional }) {
  const abierto = estaAbiertoAhora(profesional);

  if (profesional.disponible_24h) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
        24h · 7 días
      </span>
    );
  }

  if (abierto === null) return null;

  if (abierto) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
        Abierto ahora
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">
      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 inline-block" />
      Fuera de horario
    </span>
  );
}

// ─── Tarjeta individual ───────────────────────────────────────────────────────
function TarjetaProfesional({ profesional, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  function trackEvent(eventName, extra = {}) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        profesional_nombre: profesional.nombre,
        profesional_id: profesional.id,
        categoria: profesional.categorias?.nombre,
        ciudad: profesional.ciudad,
        ...extra,
      });
    }
  }

  function copiarTelefono() {
    navigator.clipboard.writeText(profesional.telefono);
    setCopiado(true);
    trackEvent('copiar_telefono');
    setTimeout(() => setCopiado(false), 2000);
  }

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl shadow-md border border-gray-200 p-6 transform transition-all duration-700 ease-out hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1"
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.95)',
      }}
    >
      {/* Cabecera */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-start gap-3">
          <div className="text-3xl transition-transform duration-300 hover:rotate-12 hover:scale-110">
            {profesional.categorias?.icono || '👷'}
          </div>
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              {profesional.categorias?.nombre}
            </p>
            <h2 className="text-lg font-bold text-gray-900">{profesional.nombre}</h2>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              📍 {profesional.ciudad}
            </p>
          </div>
        </div>
        <BadgeDisponibilidad profesional={profesional} />
      </div>

      {/* Horario (solo si no es 24h) */}
      {!profesional.disponible_24h && profesional.horario_texto && (
        <p className="text-xs text-gray-400 flex items-center gap-1 mb-3">
          🕐 {profesional.horario_texto}
        </p>
      )}

      {/* Descripción */}
      {profesional.descripcion && (
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {profesional.descripcion}
        </p>
      )}

      {/* Botones contacto */}
      <div className="flex flex-wrap gap-2">
        
          href={`tel:${profesional.telefono?.replace(/\s/g, '')}`}
          onClick={() => trackEvent('click_telefono')}
          className="flex-1 min-w-[140px] text-center text-sm font-semibold text-white rounded-lg py-2.5 px-3 transition-colors duration-200"
          style={{ backgroundColor: '#1E3A8A' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F97316')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1E3A8A')}
        >
          📞 {profesional.telefono}
        </a>

        {profesional.email ? (
          
            href={`mailto:${profesional.email}?subject=Consulta desde CercaPro&body=Hola ${profesional.nombre},%0A%0ASoy [tu nombre] de ${profesional.ciudad}.%0A%0ATe contacto desde CercaPro.%0A%0AConsulta:%0A`}
            onClick={() => trackEvent('click_email')}
            className="text-sm font-semibold text-white rounded-lg py-2.5 px-3 transition-colors duration-200"
            style={{ backgroundColor: '#10B981' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#059669')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#10B981')}
          >
            ✉️ Email
          </a>
        ) : (
          <button
            disabled
            className="text-sm font-semibold text-gray-400 border border-gray-200 rounded-lg py-2.5 px-3 cursor-not-allowed"
          >
            ✉️ Sin email
          </button>
        )}

        <button
          onClick={copiarTelefono}
          className="text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg py-2.5 px-3 hover:border-orange-400 hover:text-orange-500 transition-colors duration-200"
        >
          {copiado ? '✅ Copiado' : '📋 Copiar'}
        </button>
      </div>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function ProfesionalesLista({ categoriaSlug = null, mostrarFiltros = true }) {
  const [profesionales, setProfesionales] = useState([]);
  const [profesionalesFiltrados, setProfesionalesFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('todas');
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    async function load() {
      let query = supabase
        .from('Profesionales')
        .select('*, categorias(nombre, icono, slug)')
        .order('nombre');

      if (categoriaSlug) {
        const { data: catData } = await supabase
          .from('categorias')
          .select('id')
          .eq('slug', categoriaSlug)
          .single();
        if (catData) query = query.eq('categoria_id', catData.id);
      }

      const { data: prosData, error } = await query;

      if (error) {
        console.error('Error cargando profesionales:', error);
      } else {
        setProfesionales(prosData || []);
        setProfesionalesFiltrados(prosData || []);
        setCiudades([...new Set(prosData.map(p => p.ciudad))].sort());
      }

      const { data: catsData } = await supabase
        .from('categorias')
        .select('*')
        .order('nombre');
      setCategorias(catsData || []);

      setLoading(false);
    }
    load();
  }, [categoriaSlug]);

  // Aplicar filtros
  useEffect(() => {
    let resultado = profesionales;

    if (categoriaSeleccionada !== 'todas' && !categoriaSlug) {
      resultado = resultado.filter(p => p.categorias?.nombre === categoriaSeleccionada);
    }
    if (ciudadSeleccionada !== 'todas') {
      resultado = resultado.filter(p => p.ciudad === ciudadSeleccionada);
    }
    if (soloDisponibles) {
      resultado = resultado.filter(p => estaAbiertoAhora(p) === true);
    }

    setProfesionalesFiltrados(resultado);
  }, [categoriaSeleccionada, ciudadSeleccionada, soloDisponibles, profesionales, categoriaSlug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto mb-4" />
          <p className="text-gray-500">Cargando profesionales...</p>
        </div>
      </div>
    );
  }

  const hayFiltrosActivos = categoriaSeleccionada !== 'todas' || ciudadSeleccionada !== 'todas' || soloDisponibles;

  return (
    <div>
      {/* Filtros */}
      {mostrarFiltros && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
          <div className="flex flex-wrap gap-3 items-center">
            {!categoriaSlug && (
              <select
                value={categoriaSeleccionada}
                onChange={e => setCategoriaSeleccionada(e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:border-blue-400"
              >
                <option value="todas">Todas las categorías</option>
                {categorias.map(c => (
                  <option key={c.id} value={c.nombre}>{c.icono} {c.nombre}</option>
                ))}
              </select>
            )}

            <select
              value={ciudadSeleccionada}
              onChange={e => setCiudadSeleccionada(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:border-blue-400"
            >
              <option value="todas">Todas las ciudades</option>
              {ciudades.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Filtro estrella: solo disponibles ahora */}
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={soloDisponibles}
                onChange={e => setSoloDisponibles(e.target.checked)}
                className="w-4 h-4 accent-orange-500"
              />
              Solo disponibles ahora
            </label>

            {hayFiltrosActivos && (
              <button
                onClick={() => {
                  setCategoriaSeleccionada('todas');
                  setCiudadSeleccionada('todas');
                  setSoloDisponibles(false);
                }}
                className="text-sm text-orange-500 hover:text-orange-700 font-medium"
              >
                × Limpiar filtros
              </button>
            )}

            <span className="text-sm text-gray-400 ml-auto">
              <span className="font-semibold text-blue-700">{profesionalesFiltrados.length}</span> profesionales encontrados
            </span>
          </div>
        </div>
      )}

      {/* Listado */}
      {profesionalesFiltrados.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-gray-500 font-medium">No hay profesionales con estos filtros</p>
          <p className="text-sm text-gray-400 mt-1">Prueba a cambiar los filtros o busca en otra categoría</p>
        </div>
      ) : (
        <div className="space-y-4">
          {profesionalesFiltrados.map((prof, index) => (
            <TarjetaProfesional key={prof.id} profesional={prof} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}