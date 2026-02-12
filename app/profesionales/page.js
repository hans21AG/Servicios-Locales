'use client';
export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function Profesionales() {
  const [profesionales, setProfesionales] = useState([]);
  const [profesionalesFiltrados, setProfesionalesFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Estados filtros
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('todas');
  const [categorias, setCategorias] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  // Cargar datos iniciales
  useEffect(() => {
    async function load() {
      // Cargar profesionales
      const { data: prosData, error: prosError } = await supabase
        .from('Profesionales')
        .select(`*, categorias(nombre, icono)`)
        .order('nombre');
      
      if (prosError) {
        console.error('Error cargando profesionales:', prosError);
      } else {
        setProfesionales(prosData || []);
        setProfesionalesFiltrados(prosData || []);
        
        // Extraer ciudades únicas
        const ciudadesUnicas = [...new Set(prosData.map(p => p.ciudad))].sort();
        setCiudades(ciudadesUnicas);
      }

      // Cargar categorías
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
  }, []);

  // Aplicar filtros
  useEffect(() => {
    let resultado = profesionales;

    if (categoriaSeleccionada !== 'todas') {
      resultado = resultado.filter(p => 
        p.categorias?.nombre === categoriaSeleccionada
      );
    }

    if (ciudadSeleccionada !== 'todas') {
      resultado = resultado.filter(p => p.ciudad === ciudadSeleccionada);
    }

    setProfesionalesFiltrados(resultado);
  }, [categoriaSeleccionada, ciudadSeleccionada, profesionales]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando profesionales...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Profesionales en Ciudad Real
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Encuentra expertos locales verificados
        </p>
        
        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Filtro Categoría */}
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
            {(categoriaSeleccionada !== 'todas' || ciudadSeleccionada !== 'todas') && (
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

        {/* Listado Profesionales */}
        {profesionalesFiltrados.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <p className="text-gray-500 text-lg">
              No se encontraron profesionales con estos filtros
            </p>
            <button
              onClick={() => {
                setCategoriaSeleccionada('todas');
                setCiudadSeleccionada('todas');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Ver todos
            </button>
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
                    <div className="space-y-1 text-gray-600">
                      <p className="flex items-center gap-2">
                        📍 {prof.ciudad}
                      </p>
                      <p className="flex items-center gap-2">
                        📞 <a 
                          href={`tel:${prof.telefono?.replace(/\s/g, '')}`} 
                          className="hover:text-blue-600 font-medium"
                        >
                          {prof.telefono}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}