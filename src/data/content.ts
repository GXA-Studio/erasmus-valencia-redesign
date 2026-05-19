/* ─── Datos reales extraídos por Chromium (Playwright) ─── */

export const BRAND = {
  name: 'Erasmus Life',
  city: 'Valencia',
  tagline: 'La comunidad Erasmus más grande de Valencia',
  address: 'Calle Ramón Llull 21 bajo (oficina púrpura), 46021 Valencia',
  phone: '+34 634 300 402',
  whatsapp: '+34 634 300 402',
  whatsappLink: 'https://wa.me/34634300402',
  email: 'info@erasmus-life.com',
  hours: 'Lun – Vie · 10:00 – 18:00',
  founded: 2007,
  president: 'Michael Vivaldi',
  cif: 'B98890767',
  sedes: ['Valencia', 'Alicante', 'Murcia', 'Castellón', 'Granada', 'Barcelona', 'Madrid'],
  travelPartner: 'Home & Trips Services, SL',
};

export const STATS = [
  { value: '18+', label: 'años en Valencia', detail: 'fundada en 2007' },
  { value: '7', label: 'ciudades en España', detail: 'red nacional' },
  { value: '200+', label: 'descuentos activos', detail: 'tiendas, ocio, cultura' },
  { value: '50k+', label: 'estudiantes atendidos', detail: 'desde el primer día' },
];

/* Pisos REALES extraídos del scraping */
export const PISOS = [
  {
    id: 'pobla-farnal-43',
    ref: 'POBLA DE FARNAL — n.43-6',
    titulo: 'Piso luminoso zona universitaria',
    zona: 'Zona Universitaria',
    habitaciones: 4,
    descripcion: 'Piso de cuatro dormitorios, amueblado con cocina equipada. Ubicado en la zona de estudiantes: luminoso, moderno y muy cerca de las principales universidades.',
    detalles: ['4 dormitorios', 'Cocina equipada', 'Amueblado', 'Zona estudiantes'],
    disponibilidad: [
      { periodo: '1 Feb – 30 Jun', libre: 0 },
      { periodo: '1 Sep – 31 Ene', libre: 0 },
    ],
    tipo: 'habitacion' as const,
    gradient: 'from-amber-900/40 to-stone-900',
  },
  {
    id: 'jose-pintor-7',
    ref: 'JOSE PINTOR MONGRELL — n.7',
    titulo: 'Piso con A/C en Blasco Ibáñez',
    zona: 'Blasco Ibáñez',
    habitaciones: 4,
    descripcion: 'Completamente amueblado, cocina equipada y aire acondicionado. 4 habitaciones, 1 baño. Centro de Blasco Ibáñez, cerca de metro y universidades.',
    detalles: ['4 habitaciones', 'Aire acondicionado', '1 baño completo', 'Cocina equipada'],
    disponibilidad: [
      { periodo: '1 Feb – 30 Jun', libre: 0 },
      { periodo: '1 Sep – 31 Ene', libre: 0 },
    ],
    tipo: 'habitacion' as const,
    gradient: 'from-blue-900/40 to-slate-900',
  },
  {
    id: 'cardenal-benlloch-74',
    ref: 'CARDENAL BENLLOCH — n.74A-11',
    titulo: 'Piso gigante 200m² — 5 hab.',
    zona: 'Blasco Ibáñez',
    habitaciones: 5,
    descripcion: 'Piso de 200m² con 5 habitaciones y 2 baños en Cardenal Benlloch. Zona de Blasco Ibáñez, perfecta para grupos de estudiantes.',
    detalles: ['200 m²', '5 habitaciones', '2 baños', 'Zona universitaria'],
    disponibilidad: [
      { periodo: '1 Feb – 30 Jun', libre: 0 },
      { periodo: '1 Sep – 31 Ene', libre: 0 },
    ],
    tipo: 'piso' as const,
    gradient: 'from-rose-900/40 to-neutral-900',
  },
  {
    id: 'jose-maria-orense-4',
    ref: 'JOSE MARÍA ORENSE — n.4',
    titulo: 'Piso solo para chicas — 150m²',
    zona: 'Blasco Ibáñez',
    habitaciones: 4,
    descripcion: 'Piso gigante de 150m² con gran balcón y 2 baños. Solo para chicas. Ubicación perfecta en Blasco Ibáñez, cerca de UV y UPV.',
    detalles: ['150 m²', 'Gran balcón', '2 baños', 'Solo chicas'],
    disponibilidad: [
      { periodo: '1 Feb – 30 Jun', libre: 0 },
      { periodo: '1 Sep – 31 Ene', libre: 0 },
    ],
    tipo: 'habitacion' as const,
    gradient: 'from-purple-900/40 to-slate-900',
  },
  {
    id: 'musico-martin-soler-5',
    ref: 'MÚSICO MARTÍN SOLER — n.5',
    titulo: 'A 15 min de la playa',
    zona: 'Blasco Ibáñez',
    habitaciones: 3,
    descripcion: 'Piso en Calle Martín Soler, Blasco Ibáñez. Cerca de las universidades y a solo 15 minutos andando de la playa.',
    detalles: ['15 min playa', 'Zona universitaria', 'Amueblado', 'Blasco Ibáñez'],
    disponibilidad: [
      { periodo: '1 Feb – 30 Jun', libre: 0 },
      { periodo: '1 Sep – 31 Ene', libre: 0 },
    ],
    tipo: 'habitacion' as const,
    gradient: 'from-teal-900/40 to-slate-900',
  },
  {
    id: 'poeta-mas-y-ros-105',
    ref: 'POETA MAS Y ROS — n.105',
    titulo: 'Piso universitario con vistas',
    zona: 'Blasco Ibáñez',
    habitaciones: 3,
    descripcion: 'Ubicado en Blasco Ibáñez, cerca de todas las universidades y a solo 15 minutos andando a la playa. Completamente amueblado.',
    detalles: ['15 min playa', 'Amueblado', 'Cerca UV/UPV', 'Blasco Ibáñez'],
    disponibilidad: [
      { periodo: '1 Feb – 30 Jun', libre: 0 },
      { periodo: '1 Sep – 31 Ene', libre: 0 },
    ],
    tipo: 'habitacion' as const,
    gradient: 'from-emerald-900/40 to-neutral-900',
  },
  {
    id: 'blasco-ibanez-77',
    ref: 'BLASCO IBÁÑEZ — n.77',
    titulo: 'Habitaciones económicas — Metro Amistad',
    zona: 'Blasco Ibáñez',
    habitaciones: 4,
    descripcion: 'Habitaciones muy económicas en piso compartido en Avda. Blasco Ibáñez. Junto al metro Amistad, cerca de universidades y transporte.',
    detalles: ['Metro Amistad', 'Precio económico', 'Piso compartido', 'Cerca universidades'],
    disponibilidad: [
      { periodo: '1 Feb – 30 Jun', libre: 0 },
      { periodo: '1 Sep – 31 Ene', libre: 0 },
    ],
    tipo: 'habitacion' as const,
    gradient: 'from-orange-900/40 to-stone-900',
  },
];

/* Carnet REAL: 3 niveles con precios y beneficios del scraping */
export const CARNETS = [
  {
    nombre: 'Erasmus Life',
    precio: 0,
    precioLabel: 'Gratis',
    periodo: '',
    descripcion: 'Únete a la comunidad. Acceso inmediato al registro oficial.',
    beneficios: [
      'Registro en la comunidad Erasmus Life',
      'Wifi gratis + café en la oficina',
      'Ordenadores con Internet',
      'Acceso a eventos informativos',
      'Newsletter semanal de eventos',
    ],
    highlight: false,
    cta: 'Registrarme gratis',
  },
  {
    nombre: 'VIP',
    precio: 10,
    precioLabel: '10 €',
    periodo: 'por semestre',
    descripcion: 'El carnet más popular. Descuentos reales en ocio, cultura y comercios.',
    beneficios: [
      'Todo lo del plan gratuito',
      'Descuentos en tiendas de Valencia',
      'Tarifas reducidas — L\'Oceanogràfic',
      'Descuento — Bioparc Valencia',
      'Descuentos en discotecas',
      'Acceso a viajes y excursiones',
      'Lista de fiestas sin gastos de gestión',
    ],
    highlight: false,
    cta: 'Conseguir VIP',
  },
  {
    nombre: 'GOLD',
    precio: 49,
    precioLabel: '49 €',
    periodo: 'por año completo',
    descripcion: 'El máximo nivel. Descuentos en viajes, cancelación con reembolso y más.',
    beneficios: [
      'Todo lo del plan VIP',
      '10 € de descuento en viajes largos',
      '2 € – 5 € dto. en excursiones de 1 día',
      'Cancelación con reembolso hasta 24h antes',
      'Acceso prioritario a actividades',
      'Seguro de viaje incluido',
      'Soporte prioritario del equipo',
    ],
    highlight: true,
    cta: 'Conseguir GOLD',
  },
];

/* Precios reales de viajes y descuentos (del scraping) */
export const VIAJES = [
  {
    nombre: 'Parque Acuático Aqualandia',
    tipo: 'excursion',
    precios: [
      { label: 'Individual', precio: 65 },
      { label: '5 personas', precio: 60, unit: '/persona' },
      { label: '8 personas', precio: 55, unit: '/persona' },
    ],
    info: 'Precios incluyen entradas al parque. Solo en nuestra oficina. Un único pago para todo el grupo.',
    duracion: '1 día',
  },
  {
    nombre: 'Marruecos — 9 días',
    tipo: 'viaje',
    precios: [
      { label: 'Individual', precio: 489 },
      { label: '5 personas', precio: 480, unit: '/persona' },
      { label: '8 personas', precio: 470, unit: '/persona' },
    ],
    info: 'Seguro de viaje incluido. Solo disponibles en nuestra oficina. Un solo pago para todo el grupo.',
    duracion: '9 días',
  },
  {
    nombre: 'Alicante — Castillo y Ciudad',
    tipo: 'excursion',
    precios: [
      { label: 'Individual', precio: 34 },
      { label: '5+ personas', precio: 32, unit: '/persona' },
      { label: '8+ personas', precio: 30, unit: '/persona' },
    ],
    info: 'Precios de grupo solo en nuestra oficina. Un único pago para todo el grupo.',
    duracion: '1 día',
  },
];

/* Formularios (campos reales del DOM scrapeado) */
export const FORM_FIELDS = {
  guestList: ['prenom', 'nom', 'mail', 'nb_invit'],
  reservaViaje: ['civ', 'prenom', 'nom', 'mail', 'tel'],
  recordatorio: ['day_before', 'mail_news'],
  contacto: ['email_expediteur', 'nom_expediteur', 'tel_expediteur', 'ville_expediteur', 'wha_expediteur', 'message'],
  newsletter: ['email_news'],
};

export const DESCUBRE = [
  { label: 'Historia', icon: 'landmark', href: '/valencia/historia' },
  { label: 'Universidades', icon: 'graduation-cap', href: '/valencia/universidades' },
  { label: 'Transportes', icon: 'train', href: '/valencia/transportes' },
  { label: 'Gastronomía', icon: 'utensils', href: '/valencia/gastronomia' },
  { label: 'Festivales', icon: 'sparkles', href: '/valencia/festivales' },
  { label: 'Museos', icon: 'building', href: '/valencia/museos' },
  { label: 'Albergues', icon: 'bed', href: '/valencia/albergues' },
  { label: 'Tarjeta SIM', icon: 'sim-card', href: '/valencia/sim' },
];

export const NAV = [
  { label: 'Pisos', href: '/pisos', accent: true },
  { label: 'Actividades', href: '/actividades' },
  { label: 'Viajes', href: '/viajes' },
  { label: 'Fiestas', href: '/fiestas' },
  { label: 'Carnet', href: '/carnet' },
  {
    label: 'Valencia',
    href: '/valencia',
    sub: [
      { label: 'Historia', href: '/valencia/historia' },
      { label: 'Universidades', href: '/valencia/universidades' },
      { label: 'Transportes', href: '/valencia/transportes' },
      { label: 'Gastronomía', href: '/valencia/gastronomia' },
      { label: 'Festivales', href: '/valencia/festivales' },
      { label: 'Museos', href: '/valencia/museos' },
    ],
  },
  { label: 'Contacto', href: '/contacto' },
];

export const TESTIMONIALS = [
  {
    name: 'Amélie Dupont', flag: '🇫🇷', uni: 'Sciences Po, París',
    text: 'Erasmus Life me encontró piso en 48h sin ninguna comisión de agencia. El equipo habla francés y te acompañan desde el primer día. Absolutamente imprescindible.',
    semester: 'Erasmus 2025–26',
  },
  {
    name: 'Marco Bianchi', flag: '🇮🇹', uni: 'Politecnico di Milano',
    text: 'El viaje a Marruecos con el carnet GOLD valió cada euro. Seguro incluido, organización perfecta y un grupo increíble de estudiantes de toda Europa.',
    semester: 'Erasmus 2025',
  },
  {
    name: 'Katarzyna Wójcik', flag: '🇵🇱', uni: 'Jagiellonian University',
    text: 'Llegué sin conocer a nadie. La primera fiesta de Erasmus Life me cambió la experiencia entera. Ahora tengo amigos en 20 países.',
    semester: 'Erasmus 2024–25',
  },
  {
    name: 'Lars Eriksson', flag: '🇸🇪', uni: 'Uppsala Universitet',
    text: 'El piso en Blasco Ibáñez era exactamente lo que buscaba. Transparencia total, sin sorpresas y el carnet VIP te amortiza en dos semanas de vida en Valencia.',
    semester: 'Erasmus 2025–26',
  },
];
