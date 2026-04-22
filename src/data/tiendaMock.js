/**
 * Mock de productos — misma forma que consumirá el back.
 * fotos: foto0 es la principal en listados; foto1–foto5 galería detalle.
 */

const img = (seed, w = 900, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

const baseProductos = [
  {
    id: 'nl-aurora-01',
    foto0: img('nl-aurora-0'),
    foto1: img('nl-aurora-1'),
    foto2: img('nl-aurora-2'),
    foto3: img('nl-aurora-3'),
    foto4: img('nl-aurora-4'),
    foto5: img('nl-aurora-5'),
    nombre: 'Aurora — onda rosa y violeta',
    descripcion:
      'Cartel LED estilo neon con curvas suaves, ideal para living o recepción. Incluye transformador y soporte para pared. Intensidad regulable en tres pasos.',
    precio: 89900,
    alto: 42,
    ancho: 110,
    colores: ['Rosa neón', 'Violeta', 'Blanco hielo'],
  },
  {
    id: 'nl-pulse-02',
    foto0: img('nl-pulse-0'),
    foto1: img('nl-pulse-1'),
    foto2: img('nl-pulse-2'),
    foto3: img('nl-pulse-3'),
    foto4: img('nl-pulse-4'),
    foto5: img('nl-pulse-5'),
    nombre: 'Pulse — texto custom hasta 12 letras',
    descripcion:
      'Línea Pulse para frases cortas o nombres. Elige tipografía (script o bloque). Acrílico transparente y cableado oculto tras la base.',
    precio: 124500,
    alto: 38,
    ancho: 95,
    colores: ['Cian', 'Magenta', 'Amarillo cálido'],
  },
  {
    id: 'nl-zen-03',
    foto0: img('nl-zen-0'),
    foto1: img('nl-zen-1'),
    foto2: img('nl-zen-2'),
    foto3: img('nl-zen-3'),
    foto4: img('nl-zen-4'),
    foto5: img('nl-zen-5'),
    nombre: 'Zen — minimal arco',
    descripcion:
      'Diseño minimalista en arco con luz indirecta. Perfecto para dormitorios y estudios. Bajo consumo y silencioso.',
    precio: 67900,
    alto: 55,
    ancho: 55,
    colores: ['Blanco hielo', 'Azul eléctrico'],
  },
  {
    id: 'nl-bistro-04',
    foto0: img('nl-bistro-0'),
    foto1: img('nl-bistro-1'),
    foto2: img('nl-bistro-2'),
    foto3: img('nl-bistro-3'),
    foto4: img('nl-bistro-4'),
    foto5: img('nl-bistro-5'),
    nombre: 'Bistro — logo abierto/cerrado',
    descripcion:
      'Pack comercial con dos placas coordinadas. Resistente a uso continuo. Incluye kit de fijación para vidriera.',
    precio: 156000,
    alto: 40,
    ancho: 130,
    colores: ['Rojo neón', 'Blanco hielo'],
  },
  {
    id: 'nl-luna-05',
    foto0: img('nl-luna-0'),
    foto1: img('nl-luna-1'),
    foto2: img('nl-luna-2'),
    foto3: img('nl-luna-3'),
    foto4: img('nl-luna-4'),
    foto5: img('nl-luna-5'),
    nombre: 'Luna — contorno orgánico',
    descripcion:
      'Silueta orgánica inspirada en auroras boreales. Efecto degradé suave entre colores. Cada pieza es única en el acabado.',
    precio: 142000,
    alto: 48,
    ancho: 102,
    colores: ['Verde menta', 'Violeta', 'Rosa neón'],
  },
  {
    id: 'nl-hex-06',
    foto0: img('nl-hex-0'),
    foto1: img('nl-hex-1'),
    foto2: img('nl-hex-2'),
    foto3: img('nl-hex-3'),
    foto4: img('nl-hex-4'),
    foto5: img('nl-hex-5'),
    nombre: 'Hex — módulo geométrico',
    descripcion:
      'Composición hexagonal modular. Podés encargar uno o un set de tres para mural. Ideal para oficinas creativas.',
    precio: 98500,
    alto: 60,
    ancho: 70,
    colores: ['Cian', 'Blanco hielo', 'Amarillo cálido'],
  },
]

const variantes = [2, 3, 4].flatMap((serie) =>
  baseProductos.map((p) => ({
    ...p,
    id: `${p.id}-s${serie}`,
    nombre: `${p.nombre} · serie ${serie}`,
    descripcion: `${p.descripcion} Variante de catálogo ${serie}.`,
    precio: p.precio + serie * 4800,
    alto: p.alto + (serie % 2) * 4,
    ancho: p.ancho + (serie % 3) * 5,
    foto0: img(`${p.id}-s${serie}-0`),
    foto1: img(`${p.id}-s${serie}-1`),
    foto2: img(`${p.id}-s${serie}-2`),
    foto3: img(`${p.id}-s${serie}-3`),
    foto4: img(`${p.id}-s${serie}-4`),
    foto5: img(`${p.id}-s${serie}-5`),
  }))
)

export const productosMock = [...baseProductos, ...variantes]

export const todosLosColoresMock = [
  ...new Set(productosMock.flatMap((p) => p.colores)),
].sort((a, b) => a.localeCompare(b, 'es'))
