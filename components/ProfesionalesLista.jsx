'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';

// ========== FUNCIÓN DISPONIBILIDAD DEFINITIVA ==========
function getEstadoDisponibilidad(profesional) {
  if (profesional.disponible_24h) {
    return { texto: 'Disponible 24h', color: 'bg-green-100 text-green-800' };
  }
  if (!profesional.horario_inicio || !profesional.horario_fin || !profesional.horario_texto) {
    return null;
  }

  // CET timezone España
  const ahora = new Date();
  const cetOffset = 60;
  const utc = ahora.getTime() + (ahora.getTimezoneOffset() * 60000);
  const horaCET = new Date(utc + (cetOffset * 60000));
  const diaSemana = horaCET.getDay(); // 0=Domingo, 1=Lunes...6=Sábado
  const horaActual = horaCET.getHours() * 60 + horaCET.getMinutes();

  const [hIni, mIni] = profesional.horario_inicio.split(':').map(Number);
  const [hFin, mFin] = profesional.horario_fin.split(':').map(Number);
  const inicio = hIni * 60 + mIni;
  const fin = hFin * 60 + mFin;

  const finFormateado = `${String(hFin).padStart(2, '0')}:${String(mFin).padStart(2, '0')}`;
  const inicioFormateado = `${String(hIni).padStart(2, '0')}:${String(mIni).padStart(2, '0')}`;
  const diasTexto = profesional.horario_texto;

  // Check si hoy es día activo (simplificado)
  const hoyTexto = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'][diaSemana];
  const estaAbiertoHoy = diasTexto.includes(hoyTexto);

  if (estaAbiertoHoy && horaActual >= inicio && horaActual < fin) {
    return { texto: `Abierto - cierra ${finFormateado}`, color: 'bg-green-100 text-green-800' };
  }
  if (estaAbiertoHoy) {
    return { texto: `Abre ${inicioFormateado} hoy`, color: 'bg-orange-100 text-orange-800' };
  }
  return { texto: `${diasTexto} ${inicioFormateado}-${finFormateado}`, color: 'bg-gray-100 text-gray-800' };
}

// ========== COMPONENTE TARJETA CON ANIMACIONES ==========
function TarjetaProfesional({ profesional, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        bg-white rounded-xl shadow-md border border-gray-200 p-6
        transform transition-all duration-700 ease-out
        hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1
        ${isVisible
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 translate-y-8'
        }
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        {/* Logo animado */}
        <div className="text-4xl transition-transform duration-300 hover:rotate-12 hover:scale-110">
          {profesional.categorias?.icono || '👷'}
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {profesional.nombre}
          </h2>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <p className="text-blue-600 font-semibold">
              {profesional.categorias?.nombre || 'Sin categoría'}
            </p>

            {/* Google Stars - solo si tiene rating */}
            {profesional.google_rating > 0 && (
              <div className="flex items-center gap-1">
                {/* Icono G de Google */}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>

                {/* Estrellas */}
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const filled = star <= Math.floor(profesional.google_rating);
                    const half = !filled && star === Math.ceil(profesional.google_rating) && profesional.google_rating % 1 >= 0.3;
                    return (
                      <span key={star} className={`text-xs ${filled || half ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ★
                      </span>
                    );
                  })}
                </div>

                {/* Rating numérico + reseñas */}
                <span className="text-xs text-gray-600 font-medium">
                  {profesional.google_rating.toFixed(1)}
                </span>
                {profesional.google_reviews > 0 && (
                  <span className="text-xs text-gray-400">
                    ({profesional.google_reviews})
                  </span>
                )}
              </div>
            )}
          </div>

          {profesional.descripcion && (
            <p className="text-gray-600 mb-3 text-sm">
              {profesional.descripcion}
            </p>
          )}

          {/* CONTACTO */}
          <div className="space-y-2">
            {/* Ciudad */}
            <p className="flex items-center gap-2 text-gray-600">
              📍 {profesional.ciudad}
            </p>

            {/* Badge disponibilidad */}
            {(() => {
              const ahoraCET = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Madrid" }));
              const horaActual = ahoraCET.getHours() * 60 + ahoraCET.getMinutes();
              const [hIni] = (profesional.horario_inicio || '').split(':').map(Number);
              const [hFin] = (profesional.horario_fin || '').split(':').map(Number);
              const estaAbierto = profesional.disponible_24h || (profesional.horario_inicio && horaActual >= hIni * 60 && horaActual < hFin * 60);
              const horario = profesional.disponible_24h ? '24h' : profesional.horario_texto || null;

              if (!profesional.disponible_24h && !profesional.horario_inicio) return null;

              return (
                <div className="flex items-center gap-2 mt-1">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${estaAbierto ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {estaAbierto ? '● Abierto' : '● Cerrado'}
                  </span>
                  {horario && (
                    <span className="text-xs text-gray-500">{horario}</span>
                  )}
                </div>
              );
            })()}

            {/* Teléfono */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${profesional.telefono?.replace(/\s/g, '')}`}
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click_telefono', {
                      profesional_nombre: profesional.nombre,
                      profesional_id: profesional.id,
                      categoria: profesional.categorias?.nombre,
                      ciudad: profesional.ciudad
                    });
                  }
                }}
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                📞 {profesional.telefono}
              </a>
            </div>

            {/* Botones Email y Copiar */}
            <div className="flex gap-3 pt-2">
              {/* Botón Email */}
              {profesional.email && (
                <a
                  href={`mailto:${profesional.email}?subject=Consulta desde Servicios Locales&body=Hola ${profesional.nombre},%0A%0ASoy [tu nombre] de ${profesional.ciudad}.%0A%0ATe contacto desde Servicios Locales.%0A%0AConsulta:%0A`}
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click_email', {
                        profesional_nombre: profesional.nombre,
                        profesional_id: profesional.id,
                        categoria: profesional.categorias?.nombre
                      });
                    }
                  }}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-900 transition-colors text-sm font-semibold"
                >
                  ✉️ Enviar Email
                </a>
              )}

              {/* Botón WhatsApp - solo si tiene whatsapp */}
              {profesional.whatsapp && (
                <a
                  href={`https://wa.me/${profesional.whatsapp.replace(/\D/g, '')}?text=Hola ${encodeURIComponent(profesional.nombre)}, te contacto desde CercaPro.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click_whatsapp', {
                        profesional_nombre: profesional.nombre,
                        profesional_id: profesional.id,
                        categoria: profesional.categorias?.nombre,
                        ciudad: profesional.ciudad
                      });
                    }
                  }}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-semibold"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.856L.057 23.617a.75.75 0 00.921.921l5.761-1.476A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.715 9.715 0 01-4.964-1.361l-.355-.213-3.684.944.981-3.586-.233-.369A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== COMPONENTE PRINCIPAL ==========
export default function ProfesionalesLista({ categoriaSlug = null, mostrarFiltros = true }) {
  const [profesionales, setProfesionales] = useState([]);
  const [profesionalesFiltrados, setProfesionalesFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados filtros
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categoriaSlug || 'todas');
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('todas');
  const [categorias, setCategorias] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  // Cargar datos iniciales
  useEffect(() => {
    async function load() {
      let query = supabase
        .from('Profesionales')
        .select(`*, categorias(nombre, icono, slug), disponible_24h, horario_inicio, horario_fin, horario_texto`)
        .order('nombre');

      // Si hay categoría específica, filtrar desde el query
      if (categoriaSlug) {
        const { data: catData } = await supabase
          .from('categorias')
          .select('id')
          .eq('slug', categoriaSlug)
          .single();

        if (catData) {
          query = query.eq('categoria_id', catData.id);
        }
      }

      const { data: prosData, error: prosError } = await query;

      if (prosError) {
        console.error('Error cargando profesionales:', prosError);
      } else {
        setProfesionales(prosData || []);
        setProfesionalesFiltrados(prosData || []);

        // Extraer ciudades únicas
        const ciudadesUnicas = [...new Set(prosData.map(p => p.ciudad))].sort();
        setCiudades(ciudadesUnicas);
      }

      // Cargar categorías para filtros
      const { data: catsData, error: catsError } = await supabase
        .from('categorias')
        .select('*')
        .order('nombre');

      if (catsError) {
        console.error('Error cargando categorías:', catsError);
      } else {
        setCategorias(catsData || []);
      }

      setLoading(false);
    }
    load();
  }, [categoriaSlug]);

  // Aplicar filtros
  useEffect(() => {
    let resultado = profesionales;

    // Abiertos primero
    const ahoraCET = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Madrid" }));
    const horaActual = ahoraCET.getHours() * 60 + ahoraCET.getMinutes();

    resultado.sort((a, b) => {
      const estaAbiertoA = a.disponible_24h || (a.horario_inicio && horaActual >= parseInt(a.horario_inicio) * 60 && horaActual < parseInt(a.horario_fin) * 60);
      const estaAbiertoB = b.disponible_24h || (b.horario_inicio && horaActual >= parseInt(b.horario_inicio) * 60 && horaActual < parseInt(b.horario_fin) * 60);
      return estaAbiertoB - estaAbiertoA;
    });

    if (categoriaSeleccionada !== 'todas' && !categoriaSlug) {
      resultado = resultado.filter(p =>
        p.categorias?.nombre === categoriaSeleccionada
      );
    }

    if (ciudadSeleccionada !== 'todas') {
      resultado = resultado.filter(p => p.ciudad === ciudadSeleccionada);
    }

    setProfesionalesFiltrados(resultado);
  }, [categoriaSeleccionada, ciudadSeleccionada, profesionales, categoriaSlug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando profesionales...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Filtros (opcional) */}
      {mostrarFiltros && (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Filtro Categoría (solo si no hay categoría específica) */}
            {!categoriaSlug && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoría
                </label>
                <select
                  value={categoriaSeleccionada}
                  onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="todas">Todas las categorías</option>
                  {categorias.map((cat) => (
                    <option key={cat.id} value={cat.nombre}>
                      {cat.icono} {cat.nombre}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Filtro Ciudad */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ciudad
              </label>
              <select
                value={ciudadSeleccionada}
                onChange={(e) => setCiudadSeleccionada(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="todas">Todas las ciudades</option>
                {ciudades.map((ciudad) => (
                  <option key={ciudad} value={ciudad}>
                    {ciudad}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Contador resultados */}
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-600">
              <span className="font-semibold text-blue-600">
                {profesionalesFiltrados.length}
              </span> profesionales encontrados
            </p>
            {(categoriaSeleccionada !== 'todas' || ciudadSeleccionada !== 'todas') && !categoriaSlug && (
              <button
                onClick={() => {
                  setCategoriaSeleccionada('todas');
                  setCiudadSeleccionada('todas');
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>
      )}

      {/* Listado Profesionales CON ANIMACIONES */}
      {profesionalesFiltrados.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <p className="text-gray-500 text-lg">
            No se encontraron profesionales
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {profesionalesFiltrados.map((prof, index) => (
            <TarjetaProfesional
              key={prof.id}
              profesional={prof}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}