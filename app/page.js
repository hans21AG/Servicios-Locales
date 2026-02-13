'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import Link from 'next/link';

export default function Home() {
  const [categorias, setCategorias] = useState([]);
  const [profesionalesPorCategoria, setProfesionalesPorCategoria] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarDatos() {
      const { data: cats, error: catsError } = await supabase
        .from('categorias')
        .select('*')
        .order('nombre');

      if (catsError) {
        console.error('Error cargando categorías:', catsError);
        return;
      }

      setCategorias(cats || []);

      const conteos = {};
      for (const cat of cats || []) {
        const { count } = await supabase
          .from('Profesionales')
          .select('*', { count: 'exact', head: true })
          .eq('categoria_id', cat.id);
        conteos[cat.id] = count || 0;
      }

      setProfesionalesPorCategoria(conteos);
      setLoading(false);
    }

    cargarDatos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      {/* HEADER */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔧</span>
            <div>
              <h1 className="text-2xl font-bold">Servicios Locales</h1>
              <p className="text-blue-100 text-sm">Ciudad Real</p>
            </div>
          </div>
          <a 
            href="#categorias" 
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Ver Profesionales
          </a>
        </div>
      </header>

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* HERO SECTION */}
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Encuentra Profesionales de Confianza en Ciudad Real
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Conecta con fontaneros, electricistas, cerrajeros y manitas verificados en tu zona
          </p>

          {/* TRUST BADGES */}
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-12">
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="font-medium">Verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="font-medium">100% Gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="font-medium">Local Ciudad Real</span>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {Object.values(profesionalesPorCategoria).reduce((a, b) => a + b, 0)}
              </div>
              <div className="text-gray-600">Profesionales Verificados</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">{categorias.length}</div>
              <div className="text-gray-600">Categorías de Servicio</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-gray-600">Respuesta Promedio</div>
            </div>
          </div>

          {/* GRID CATEGORÍAS */}
          <div id="categorias" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categorias.map((cat) => (
              <Link key={cat.id} href={`/${cat.slug}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 cursor-pointer border-2 border-transparent hover:border-blue-500 group">
                  <div className="text-6xl mb-4">{cat.icono}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {cat.nombre}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {profesionalesPorCategoria[cat.id] || 0} profesionales
                  </p>
                  <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg group-hover:bg-blue-700 transition">
                    Ver {cat.nombre}s →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* TESTIMONIO */}
          <div className="bg-blue-50 rounded-2xl p-8 mt-12 border border-blue-100 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                M
              </div>
              <div>
                <p className="text-gray-700 text-lg mb-2">
                  "Necesitaba un fontanero urgente un domingo. En 5 minutos encontré 3 opciones verificadas en Ciudad Real. Súper útil."
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>María G.</strong> - Miguelturra
                </p>
              </div>
            </div>
          </div>

          {/* CÓMO FUNCIONA */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">¿Cómo funciona?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Busca</h3>
                <p className="text-gray-600">
                  Selecciona el tipo de profesional que necesitas
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Contacta</h3>
                <p className="text-gray-600">
                  Llama directamente al profesional que prefieras
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Resuelve</h3>
                <p className="text-gray-600">
                  Soluciona tu problema con un profesional de confianza
                </p>
              </div>
            </div>
          </div>

          {/* CTA PROFESIONALES */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12 mt-20 border border-green-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Eres profesional?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Únete gratis al directorio y consigue más clientes locales
            </p>
            <a
              href="mailto:contacto@servicioslocales.com?subject=Quiero unirme al directorio"
              className="inline-block px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition"
            >
              Registrar mi negocio gratis
            </a>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white mt-20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Columna 1 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🔧</span>
                <h3 className="text-xl font-bold">Servicios Locales</h3>
              </div>
              <p className="text-gray-400">
                Directorio de profesionales verificados en Ciudad Real.
              </p>
            </div>
            
            {/* Columna 2 */}
            <div>
              <h4 className="font-bold mb-4">Categorías</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/fontanero" className="hover:text-white transition">Fontaneros</a></li>
                <li><a href="/electricista" className="hover:text-white transition">Electricistas</a></li>
                <li><a href="/cerrajero" className="hover:text-white transition">Cerrajeros</a></li>
                <li><a href="/manitas" className="hover:text-white transition">Manitas</a></li>
              </ul>
            </div>
            
            {/* Columna 3 */}
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-gray-400 mb-2">
                ¿Falta tu profesional favorito?
              </p>
              <a href="mailto:hans21ag@gmail.com" className="text-blue-400 hover:text-blue-300 transition">
                contacto@servicios-locales.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2026 Servicios Locales. Ciudad Real, España.
          </div>
        </div>
      </footer>
    </>
  );
}
