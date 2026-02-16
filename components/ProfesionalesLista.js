'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

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
        .select(`*, categorias(nombre, icono, slug)`)
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

      {/* Listado Profesionales */}
      {profesionalesFiltrados.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <p className="text-gray-500 text-lg">
            No se encontraron profesionales
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {profesionalesFiltrados.map((prof) => (
            <div 
              key={prof.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{prof.categorias?.icono || '👷'}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {prof.nombre}
                  </h2>
                  <p className="text-blue-600 font-semibold mb-3">
                    {prof.categorias?.nombre || 'Sin categoría'}
                  </p>
                  {prof.descripcion && (
                    <p className="text-gray-600 mb-3 text-sm">
                      {prof.descripcion}
                    </p>
                  )}
                  
                  {/* CONTACTO MEJORADO */}
                  <div className="space-y-2">
                    {/* Ciudad */}
                    <p className="flex items-center gap-2 text-gray-600">
                      📍 {prof.ciudad}
                    </p>
                    
                    {/* Teléfono */}
                    <div className="flex items-center gap-2">
                      <a 
                        href={`tel:${prof.telefono?.replace(/\s/g, '')}`}
                        onClick={() => {
                          if (typeof window !== 'undefined' && window.gtag) {
                            window.gtag('event', 'click_telefono', {
                              profesional_nombre: prof.nombre,
                              profesional_id: prof.id,
                              categoria: prof.categorias?.nombre,
                              ciudad: prof.ciudad
                            });
                          }
                        }}
                        className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                      >
                        📞 {prof.telefono}
                      </a>
                    </div>

                    {/* Botones Email y Copiar */}
                    <div className="flex gap-3 pt-2">
                      {/* Botón Email */}
                      {prof.email ? (
                        <a 
                          href={`mailto:${prof.email}?subject=Consulta desde Servicios Locales&body=Hola ${prof.nombre},%0A%0ASoy [tu nombre] de ${prof.ciudad}.%0A%0ATe contacto desde Servicios Locales.%0A%0AConsulta:%0A`}
                          onClick={() => {
                            if (typeof window !== 'undefined' && window.gtag) {
                              window.gtag('event', 'click_email', {
                                profesional_nombre: prof.nombre,
                                profesional_id: prof.id,
                                categoria: prof.categorias?.nombre
                              });
                            }
                          }}
                          className="inline-flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-semibold"
                        >
                          ✉️ Enviar Email
                        </a>
                      ) : (
                        <button 
                          disabled
                          className="inline-flex items-center gap-1 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed text-sm font-semibold"
                        >
                          ✉️ Email no disponible
                        </button>
                      )}

                      {/* Botón Copiar */}
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(prof.telefono);
                          alert('📋 Teléfono copiado al portapapeles');
                          if (typeof window !== 'undefined' && window.gtag) {
                            window.gtag('event', 'copiar_telefono', {
                              profesional_nombre: prof.nombre,
                              profesional_id: prof.id
                            });
                          }
                        }}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm font-semibold"
                      >
                        📋 Copiar teléfono
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
