'use client';
import { useState } from 'react';

// Catálogo base de tiendas para el buscador
const CATALOGO_TIENDAS = [
  { cadena: 'Walmart', nombre: 'Walmart Satélite' },
  { cadena: 'Walmart', nombre: 'Walmart Santa Fe' },
  { cadena: 'Walmart', nombre: 'Walmart Universidad' },
  { cadena: 'Walmart', nombre: 'Walmart Interlomas' },
  { cadena: 'Chedraui', nombre: 'Chedraui Polanco' },
  { cadena: 'Chedraui', nombre: 'Chedraui Selecto Coapa' },
  { cadena: 'Soriana', nombre: 'Soriana Híper Miyana' },
  { cadena: 'Liverpool', nombre: 'Liverpool Insurgentes' },
  { cadena: 'Juguetron', nombre: 'Juguetron Perisur' },
];

export default function Home() {
  const [tipoRegistro, setTipoRegistro] = useState<'PROPIO' | 'COMPETENCIA'>('PROPIO');
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  // Estados
  const [promotor, setPromotor] = useState('');
  const [ciudad, setCiudad] = useState('CDMX');
  const [cadena, setCadena] = useState('Walmart');
  
  // Buscador de Sucursal
  const [busquedaSucursal, setBusquedaSucursal] = useState('');
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState('');
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);

  // Mobiliario y Marcas
  const [tipoMueble, setTipoMueble] = useState('Mamut');
  const [muebleOtro, setMuebleOtro] = useState('');
  const [marcasZuru, setMarcasZuru] = useState<string[]>([]);
  const [marcaOtraTexto, setMarcaOtraTexto] = useState('');
  const [llenado, setLlenado] = useState('100%');
  
  // Competencia
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

  // Filtrar tiendas según la cadena y lo que escribe el usuario
  const tiendasFiltradas = CATALOGO_TIENDAS.filter(
    (t) => t.cadena === cadena && t.nombre.toLowerCase().includes(busquedaSucursal.toLowerCase())
  );

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
      alert('Por favor toma o selecciona una fotografía de evidencia.');
      return;
    }
    setLoading(true);
    
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
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>¡Reporte Registrado!</h2>
          <p style={{ color: '#4b5563', marginBottom: '20px', fontSize: '14px' }}>Los datos y evidencia se han guardado con éxito.</p>
          <button
            onClick={() => {
              setEnviado(false);
              setFoto(null);
              setBusquedaSucursal('');
              setSucursalSeleccionada('');
            }}
            style={{ width: '100%', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', padding: '12px 0', borderRadius: '12px', border: 'none', cursor: 'pointer' }}
          >
            Navegar nueva captura
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
        {/* Selector de Tipo */}
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
          
          {/* Ubicación */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
              📍 Datos de Ubicación
            </h2>
            
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>Nombre del Promotor</label>
              <input
                type="text"
                required
                placeholder="Nombre y Apellido"
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
                  onChange={(e) => {
                    setCadena(e.target.value);
                    setBusquedaSucursal('');
                    setSucursalSeleccionada('');
                  }}
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

            {/* Buscador de Sucursal Dinámico */}
            <div style={{ position: 'relative' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>
                Buscar Sucursal / Tienda
              </label>
              <input
                type="text"
                required
                placeholder="Escribe para buscar tienda..."
                value={sucursalSeleccionada || busquedaSucursal}
                onChange={(e) => {
                  setBusquedaSucursal(e.target.value);
                  setSucursalSeleccionada('');
                  setMostrarSugerencias(true);
                }}
                onFocus={() => setMostrarSugerencias(true)}
                style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '10px', padding: '10px', fontSize: '14px', boxSizing: 'border-box' }}
              />

              {/* Lista Desplegable de Sugerencias */}
              {mostrarSugerencias && busquedaSucursal && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#ffffff', border: '1px solid #d1d5db', borderRadius: '10px', marginTop: '4px', maxHeight: '150px', overflowY: 'auto', zIndex: 20, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                  {tiendasFiltradas.length > 0 ? (
                    tiendasFiltradas.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setSucursalSeleccionada(item.nombre);
                          setMostrarSugerencias(false);
                        }}
                        style={{ padding: '10px', fontSize: '13px', cursor: 'pointer', borderBottom: '1px solid #f3f4f6' }}
                      >
                        📍 {item.nombre}
                      </div>
                    ))
                  ) : (
                    <div
                      onClick={() => {
                        setSucursalSeleccionada(busquedaSucursal);
                        setMostrarSugerencias(false);
                      }}
                      style={{ padding: '10px', fontSize: '12px', color: '#2563eb', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      ➕ Usar "{busquedaSucursal}" (Nueva tienda)
                    </div>
                  )}
                </div>
              )}
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
                    <option value="Otro">Otro Mueble</option>
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

              {tipoMueble === 'Otro' && (
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '4px' }}>Especifique el tipo de mueble</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Botadero, Exhibidor especial"
                    value={muebleOtro}
                    onChange={(e) => setMuebleOtro(e.target.value)}
                    style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '10px', padding: '10px', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>
              )}

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

                {marcasZuru.includes('Otra') && (
                  <div style={{ marginTop: '8px' }}>
                    <input
                      type="text"
                      placeholder="Escribe la marca nueva..."
                      value={marcaOtraTexto}
                      onChange={(e) => setMarcaOtraTexto(e.target.value)}
                      style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '10px', padding: '8px', fontSize: '13px', boxSizing: 'border-box' }}
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Competencia */
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

          {/* Fotografía */}
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
