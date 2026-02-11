'use client';

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
    <div style={{ padding: '20px' }}>
      <h1>Profesionales Disponibles</h1>
      <p>Número: {profesionales.length}</p>
      {profesionales.map((prof) => (
        <div key={prof.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h2>{prof.nombre}</h2>
          <p>Profesión: {prof.categorias.nombre}</p>
          <p>Teléfono: {prof.telefono}</p>
          <p>Ciudad: {prof.ciudad}</p>
        </div>
      ))}
    </div>
  );
}