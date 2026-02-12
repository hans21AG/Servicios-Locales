'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [categorias, setCategorias] = useState([]);
  const [stats, setStats] = useState({ total: 0, porCategoria: {} });

  useEffect(() => {
    async function loadData() {
      // Cargar categorías
      const { data: catsData } = await supabase
        .from('categorias')
        .select('*')
        .order('nombre');
      
      if (catsData) setCategorias(catsData);

      // Cargar estadísticas
      const { data: prosData } = await supabase
        .from('Profesionales')
        .select('categoria_id');
      
      if (prosData) {
        setStats({
          total: prosData.length,
          porCategoria: prosData.reduce((acc, p) => {
            acc[p.categoria_id] = (acc[p.categoria_id] || 0) + 1;
            return acc;
          }, {})
        });
      }
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Encuentra Profesionales<br />
          <span className="text-blue-600">en Ciudad Real</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Directorio de fontaneros, electricistas, cerrajeros y manitas locales verificados. 
          Presupuestos rápidos sin intermediarios.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/profesionales"
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Ver todos los profesionales
          </Link>
          <a 
            href="#categorias"
            className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-blue-600"
          >
            Buscar por categoría
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600">{stats.total}</p>
            <p className="text-gray-600">Profesionales</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">4</p>
            <p className="text-gray-600">Categorías</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">24h</p>
            <p className="text-gray-600">Respuesta</p>
          </div>
        </div>
      </div>

      {/* Categorías Grid */}
      <div id="categorias" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ¿Qué profesional necesitas?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((cat) => (
            <Link
              key={cat.id}
              href={`/profesionales?categoria=${cat.nombre}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 text-center border-2 border-transparent hover:border-blue-500 group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {cat.icono}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {cat.nombre}
              </h3>
              <p className="text-gray-600 mb-4">
                {stats.porCategoria[cat.id] || 0} profesionales
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">
                Ver listado →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Cómo Funciona */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Cómo funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Elige categoría
              </h3>
              <p className="text-gray-600">
                Selecciona el tipo de profesional que necesitas
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Compara perfiles
              </h3>
              <p className="text-gray-600">
                Revisa profesionales verificados en tu zona
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Contacta directo
              </h3>
              <p className="text-gray-600">
                Llama sin intermediarios y pide presupuesto
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ¿Eres profesional?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Únete gratis al directorio y consigue más clientes locales
        </p>
        <a 
          href="mailto:contacto@servicioslocales.com?subject=Quiero unirme al directorio"
          className="inline-block px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
        >
          Registrar mi negocio gratis
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Servicios Locales Ciudad Real - Directorio de profesionales
          </p>
        </div>
      </footer>
    </div>
  );
}
