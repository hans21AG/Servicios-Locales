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
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#1E3A8A]"></div>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-white">
        {/* HERO SECTION */}
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-5xl font-bold text-[#111827] mb-6">
            Encuentra Profesionales de Confianza en Ciudad Real
          </h2>
          <p className="text-xl text-[#4B5563] mb-8">
            Conecta con fontaneros, electricistas, cerrajeros y manitas verificados en tu zona
          </p>

          {/* TRUST BADGES */}
          <div className="flex items-center justify-center gap-6 text-sm text-[#4B5563] mb-12">
            <div className="flex items-center gap-2">
              <span className="text-[#10B981] text-xl">✓</span>
              <span className="font-medium">Verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#10B981] text-xl">✓</span>
              <span className="font-medium">De Confianza</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#10B981] text-xl">✓</span>
              <span className="font-medium">Local Ciudad Real</span>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="text-4xl font-bold text-[#1E3A8A] mb-2">
                {Object.values(profesionalesPorCategoria).reduce((a, b) => a + b, 0)}
              </div>
              <div className="text-[#4B5563]">Profesionales Verificados</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="text-4xl font-bold text-[#1E3A8A] mb-2">{categorias.length}</div>
              <div className="text-[#4B5563]">Categorías de Servicio</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="text-4xl font-bold text-[#1E3A8A] mb-2">24h</div>
              <div className="text-[#4B5563]">Respuesta Promedio</div>
            </div>
          </div>

          {/* GRID CATEGORÍAS */}
          <div id="categorias" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categorias.map((cat) => (
              <Link key={cat.id} href={`/${cat.slug}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 cursor-pointer border-2 border-transparent hover:border-[#F97316] group">
                  <div className="text-6xl mb-4">{cat.icono}</div>
                  <h3 className="text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#1E3A8A] transition">
                    {cat.nombre}
                  </h3>
                  <p className="text-[#4B5563] mb-4">
                    {profesionalesPorCategoria[cat.id] || 0} profesionales
                  </p>
                  <div className="inline-block px-4 py-2 bg-[#1E3A8A] text-white rounded-lg group-hover:bg-[#F97316] transition">
                    Ver {cat.nombre}s →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* TESTIMONIO */}
          <div className="bg-[#F9FAFB] rounded-2xl p-8 mt-12 border border-gray-200 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-[#1E3A8A] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                M
              </div>
              <div className="text-left">
                <p className="text-[#111827] text-lg mb-2">
                  "Necesitaba un fontanero urgente un domingo. En 5 minutos encontré 3 opciones verificadas en Ciudad Real. Súper útil."
                </p>
                <p className="text-[#4B5563] text-sm">
                  <strong>María G.</strong> - Miguelturra
                </p>
              </div>
            </div>
          </div>


          {/* GUÍAS POR CIUDAD */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-[#111827] mb-4 text-center">📖 Guías por Ciudad</h2>
            <p className="text-xl text-[#4B5563] text-center mb-12 max-w-3xl mx-auto">
              Información completa sobre precios, zonas de cobertura y preguntas frecuentes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Guía Fontaneros */}
              <Link href="/fontanero-ciudad-real">
                <div className="bg-white rounded-xl shadow-md p-6 border-2 border-transparent hover:border-[#F97316] transition-all cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🔧</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#1E3A8A] transition">
                        Fontaneros en Ciudad Real
                      </h3>
                      <p className="text-[#4B5563] mb-4">
                        Precios orientativos, servicios más solicitados, zonas de cobertura y preguntas frecuentes sobre fontanería.
                      </p>
                      <div className="text-[#F97316] font-semibold group-hover:underline">
                        Leer guía completa →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Guía Electricistas */}
              <Link href="/electricista-ciudad-real">
                <div className="bg-white rounded-xl shadow-md p-6 border-2 border-transparent hover:border-[#F97316] transition-all cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">⚡</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#1E3A8A] transition">
                        Electricistas en Ciudad Real
                      </h3>
                      <p className="text-[#4B5563] mb-4">
                        Precios orientativos, servicios eléctricos, zonas de cobertura y preguntas frecuentes sobre electricidad.
                      </p>
                      <div className="text-[#F97316] font-semibold group-hover:underline">
                        Leer guía completa →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Guía Cerrajeros */}
              <Link href="/cerrajero-ciudad-real">
                <div className="bg-white rounded-xl shadow-md p-6 border-2 border-transparent hover:border-[#F97316] transition-all cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🔑</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#1E3A8A] transition">
                        Cerrajeros en Ciudad Real
                      </h3>
                      <p className="text-[#4B5563] mb-4">
                        Precios orientativos, servicios de cerrajería, zonas de cobertura y preguntas frecuentes sobre cerraduras.
                      </p>
                      <div className="text-[#F97316] font-semibold group-hover:underline">
                        Leer guía completa →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Guía Manitas */}
              <Link href="/manitas-ciudad-real">
                <div className="bg-white rounded-xl shadow-md p-6 border-2 border-transparent hover:border-[#F97316] transition-all cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🔨</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#1E3A8A] transition">
                        Manitas en Ciudad Real
                      </h3>
                      <p className="text-[#4B5563] mb-4">
                        Precios orientativos, servicios del hogar, zonas de cobertura y preguntas frecuentes sobre reparaciones.
                      </p>
                      <div className="text-[#F97316] font-semibold group-hover:underline">
                        Leer guía completa →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* CÓMO FUNCIONA */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-[#111827] mb-12">¿Cómo funciona?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">1. Busca</h3>
                <p className="text-[#4B5563]">
                  Selecciona el tipo de profesional que necesitas
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">2. Contacta</h3>
                <p className="text-[#4B5563]">
                  Llama directamente al profesional que prefieras
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">3. Resuelve</h3>
                <p className="text-[#4B5563]">
                  Soluciona tu problema con un profesional de confianza
                </p>
              </div>
            </div>
          </div>

          {/* CTA PROFESIONALES */}
          <div className="bg-gradient-to-r from-[#1E3A8A] to-[#F97316] rounded-2xl p-12 mt-20 text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¿Eres profesional?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Únete gratis al directorio y consigue más clientes locales
            </p>
            <a
              href="mailto:hans21ag@gmail.com?subject=Quiero unirme al directorio"
              className="inline-block px-8 py-4 bg-white text-[#1E3A8A] text-lg font-semibold rounded-lg hover:bg-[#F9FAFB] transition"
            >
              Registrar mi negocio gratis
            </a>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#111827] text-white mt-20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Columna 1 */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-[#1E3A8A]">Cerca</span>
                <span className="text-[#F97316]">Pro</span>
              </h3>
              <p className="text-gray-400">
                Directorio de profesionales verificados en Ciudad Real.
              </p>
            </div>

            {/* Columna 2 */}
            <div>
              <h4 className="font-bold mb-4">Categorías</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/fontanero" className="hover:text-[#F97316] transition">Fontaneros</a></li>
                <li><a href="/electricista" className="hover:text-[#F97316] transition">Electricistas</a></li>
                <li><a href="/cerrajero" className="hover:text-[#F97316] transition">Cerrajeros</a></li>
                <li><a href="/manitas" className="hover:text-[#F97316] transition">Manitas</a></li>
              </ul>
            </div>

            {/* Columna 3 */}
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-gray-400 mb-2">
                ¿Falta tu profesional favorito?
              </p>
              <a href="mailto:hans21ag@gmail.com" className="text-[#F97316] hover:text-[#F97316]/80 transition">
                hans21ag@gmail.com
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2026 CercaPro. Ciudad Real, España.
          </div>
        </div>
      </footer>
    </>
  );
}
