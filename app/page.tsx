'use client';
import { useState } from 'react';

export default function Home() {
  const [tipoRegistro, setTipoRegistro] = useState<'PROPIO' | 'COMPETENCIA'>('PROPIO');
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  // Estados del formulario
  const [promotor, setPromotor] = useState('');
  const [ciudad, setCiudad] = useState('CDMX');
  const [cadena, setCadena] = useState('Walmart');
  const [sucursal, setSucursal] = useState('');
  const [tipoMueble, setTipoMueble] = useState('Mamut');
  const [marcasZuru, setMarcasZuru] = useState<string[]>([]);
  const [llenado, setLlenado] = useState('100%');
  const [competidor, setCompetidor] = useState('');
  const [lineaCompetidor, setLineaCompetidor] = useState('');
  const [foto, setFoto] = useState<File | null>(null);

  const marcasOpciones = [
    '5 Surprise / Mini Brands',
    'X-Shot',
    'Rainbocorns',
    'Smashers',
    'Robo Alive',
    'Otra'
  ];

  const handleCheckboxChange = (marca: string) => {
    if (marcasZuru.includes(marca)) {
      setMarcasZuru(marcasZuru.filter((m) => m !== marca));
    } else {
      setMarcasZuru([...marcasZuru, marca]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!foto) {
      alert('Por favor toma o selecciona una fotografía antes de enviar.');
      return;
    }
    setLoading(true);
    
    // Simulación de envío por ahora
    setTimeout(() => {
      setLoading(false);
      setEnviado(true);
    }, 1200);
  };

  if (enviado) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px', fontFamily: 'sans-serif' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center', maxWidth: '380px', width: '100%' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>¡Captura Exitosa!</h2>
          <p style={{ color: '#4b5563', marginBottom: '20px', fontSize: '14px' }}>El registro del mobiliario ha sido guardado correctamente en el repositorio.</p>
          <button
            onClick={() => {
              setEnviado(false);
              setFoto(null);
            }}
            style={{ width: '100%', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', padding: '12px 0', borderRadius: '12px', border: 'none', cursor: 'pointer' }}
          >
            Hacer otra captura
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', paddingBottom: '40px', fontFamily: 'sans-serif' }}>
      {/* Encabezado */}
      <header style={{ backgroundColor: '#1e3a8a', color: '#ffffff', padding: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontWeight: '800', fontSize: '18px', letterSpacing: '0.5px', margin: 0 }}>ZURU TOYS</h1>
            <p style={{ fontSize: '12px', color: '#bfdbfe', margin: 0 }}>Operación de Campo & Mobiliario</p>
          </div>
          <div style={{ fontSize: '24px' }}>📦</div>
        </div>
      </header>

      <main style={{ maxWidth: '400px', margin: '0 auto', padding: '16px' }}>
        {/* Selector de Tipo de Registro */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', backgroundColor: '#e5e7eb', padding: '4px', borderRadius: '12px', marginBottom: '16px' }}>
          <button
            type="button"
            onClick={() => setTipoRegistro('PROPIO')}
            style={{
              padding: '10px 0',
              fontSize: '14px',
              fontWeight: 'bold',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: tipoRegistro === 'PROPIO' ? '#2563eb' : 'transparent',
              color: tipoRegistro === 'PROPIO' ? '#ffffff' : '#4b5563',
            }}
          >
            Mobiliario Zuru
          </button>
          <button
            type="button"
            onClick={() => setTipoRegistro('COMPETENCIA')}
            style={{
              padding: '10px 0',
              fontSize: '14px',
              fontWeight: 'bold',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: tipoRegistro === 'COMPETENCIA' ? '#dc2626' : 'transparent',
              color: tipoRegistro === 'COMPETENCIA' ? '#ffffff' : '#4b5563',
            }}
          >
            Competencia
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Ubicación y Promotor */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
              📍 Datos de Ubicación
            </h2>
            
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>Nombre del Promotor</label>
              <input
                type="text"
                required
                placeholder="Tu nombre completo"
                value={promotor}
                onChange={(e) => setPromotor(e.target.value)}
                style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '10px', padding: '10px', fontSize: '14px', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>Ciudad</label>
                <select
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                  style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '10px', padding: '10px', fontSize: '14px', backgroundColor: '#fff', boxSizing: 'border-box' }}
                >
                  <option value="CDMX">CDMX / EdoMex</option>
                  <option value="Guadalajara">Guadalajara</option>
                  <option value="Monterrey">Monterrey</option>
                  <option value="Puebla">Puebla</option>
                  <option value="Querétaro">Querétaro</option>
                  <option value="Otra">Otra</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>Cadena</label>
                <select
                  value={cadena}
                  onChange={(e) => setCadena(e.target.value)}
                  style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '10px', padding: '10px', fontSize: '14px', backgroundColor: '#fff', boxSizing: 'border-box' }}
                >
                  <option value="Walmart">Walmart</option>
                  <option value="Chedraui">Chedraui</option>
                  <option value="Soriana">Soriana</option>
                  <option value="Liverpool">Liverpool</option>
                  <option value="Juguetron">Juguetron</option>
                  <option value="Julio Cepeda">Julio Cepeda</option>
                  <option value="Otra">Otra</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>Sucursal / Tienda</label>
              <input
                type="text"
                required
                placeholder="Ej. Satélite, Santa Fe, Universidad"
                value={sucursal}
                onChange={(e) => setSucursal(e.target.value)}
                style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '10px', padding: '10px', fontSize: '14px', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6', margin: 0 }} />

          {/* Módulo Zuru Propio */}
          {tipoRegistro === 'PROPIO' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                🏪 Detalle Mobiliario Zuru
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>Mueble</label>
                  <select
                    value={tipoMueble}
                    onChange={(e) => setTipoMueble(e.target.value)}
                    style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '10px', padding: '10px', fontSize: '14px', backgroundColor: '#fff', boxSizing: 'border-box' }}
                  >
                    <option value="Mamut">Mamut</option>
                    <option value="Tótem">Tótem</option>
                    <option value="Cabezal">Cabezal</option>
                    <option value="Isla">Isla</option>
                    <option value="Tira de Impulso">Tira de Impulso</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>Abastecimiento</label>
                  <select
                    value={llenado}
                    onChange={(e) => setLlenado(e.target.value)}
                    style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '10px', padding: '10px', fontSize: '14px', backgroundColor: '#fff', boxSizing: 'border-box' }}
                  >
                    <option value="100%">100% Lleno</option>
                    <option value="75%">75% Lleno</option>
                    <option value="50%">50% Lleno</option>
                    <option value="25%">25% Lleno</option>
                    <option value="Agotado">Agotado / Vacío</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Marcas Cargadas</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {marcasOpciones.map((marca) => (
                    <label key={marca} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', backgroundColor: '#f9fafb', padding: '8px', borderRadius: '8px', border: '1px solid #e5e7eb', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={marcasZuru.includes(marca)}
                        onChange={() => handleCheckboxChange(marca)}
                      />
                      <span>{marca}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Módulo Competencia */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                🏪 Detalle Competencia
              </h2>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>Empresa / Marca Competidora</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Mattel, Hasbro, Spin Master"
                  value={competidor}
                  onChange={(e) => setCompetidor(e.target.value)}
                  style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '10px', padding: '10px', fontSize: '14px', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>Línea o Producto Detectado</label>
                <input
                  type="text"
                  placeholder="Ej. Hot Wheels, Nerf, Barbie"
                  value={lineaCompetidor}
                  onChange={(e) => setLineaCompetidor(e.target.value)}
                  style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '10px', padding: '10px', fontSize: '14px', boxSizing: 'border-box' }}
                />
              </div>
            </div>
          )}

          <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6', margin: 0 }} />

          {/* Carga de Foto */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>Fotografía de Evidencia</label>
            <label style={{ border: '2px dashed #d1d5db', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backgroundColor: '#f9fafb' }}>
              <div style={{ fontSize: '28px', marginBottom: '4px' }}>📷</div>
              <span style={{ fontSize: '12px', color: '#4b5563', fontWeight: '500' }}>
                {foto ? foto.name : 'Tomar foto o subir imagen'}
              </span>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                style={{ display: 'none' }}
                onChange={(e) => setFoto(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          {/* Botón Envío */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px 0',
              borderRadius: '12px',
              fontWeight: 'bold',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: tipoRegistro === 'PROPIO' ? '#2563eb' : '#dc2626',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          >
            {loading ? 'Guardando Registro...' : 'Enviar Reporte de Campo'}
          </button>
        </form>
      </main>
    </div>
  );
}
