import { supabase } from '../../lib/supabase'

export default async function Profesionales() {
  const { data: profesionales } = await supabase
    .from('profesionales')
    .select('*')

  return (
    <div style={{ padding: '20px' }}>
      <h1>Profesionales Disponibles</h1>
      {profesionales?.map((prof) => (
        <div key={prof.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h2>{prof.nombre}</h2>
          <p>Profesión: {prof.profesion}</p>
          <p>Teléfono: {prof.telefono}</p>
          <p>Ciudad: {prof.ciudad}</p>
        </div>
      ))}
    </div>
  )
}
