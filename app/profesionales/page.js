'use client';
export const dynamic = 'force-dynamic'; // AÑADE ESTA LÍNEA

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

// Resto igual, pero quita "async" de function y usa useEffect
export default function Profesionales() {  // No async
  const [profesionales, setProfesionales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from('Profesionales')
        .select(`
          *,
          categorias(nombre)
        `);
      if (error) console.error(error);
      else setProfesionales(data || []);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <div>Cargando...</div>;

  // Resto return igual (h1, map)...
 return (
  <div className="min-h-screen bg-gray-50 py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
        Profesionales en Ciudad Real
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Encuentra expertos locales verificados
      </p>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <p className="text-sm text-gray-500">
          {profesionales.length} profesionales disponibles
        </p>
      </div>

      <div className="space-y-4">
        {profesionales.map((prof) => (
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
                <div className="space-y-1 text-gray-600">
                  <p className="flex items-center gap-2">
                    📍 {prof.ciudad}
                  </p>
                  <p className="flex items-center gap-2">
                    📞 <a href={`tel:${prof.telefono}`} className="hover:text-blue-600">
                      {prof.telefono}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
