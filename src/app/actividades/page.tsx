import Link from 'next/link';
import { ArrowRight, Calendar, Users, Music, Mountain, Sunset, Waves } from 'lucide-react';
import { BRAND } from '@/data/content';

export const metadata = {
  title: 'Actividades y Fiestas Erasmus en Valencia | Erasmus Life Valencia',
  description: 'Fiestas, excursiones, eventos culturales y actividades para estudiantes Erasmus en Valencia. Organizado desde 2007.',
};

const CATEGORIAS = [
  {
    icon: <Music className="w-6 h-6" />,
    titulo: 'Fiestas & Nightlife',
    descripcion: 'Noches temáticas en los mejores clubs de Valencia. Lista de invitados sin gastos de gestión con carnet VIP.',
    items: ['Fiestas Welcome Erasmus', 'Noches temáticas internacionales', 'Lista VIP en clubs convenio', 'Afterworks en zona Russafa'],
    color: 'from-purple-900/50 to-indigo-950',
    cta: 'Ver fiestas',
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    titulo: 'Excursiones',
    descripcion: 'Escapadas de un día y viajes largos con seguro incluido. Organizados por el equipo de Erasmus Life.',
    items: ['Parque Acuático Aqualandia', 'Alicante — Castillo y Ciudad', 'Peñíscola', 'Cuenca medieval'],
    color: 'from-teal-900/50 to-emerald-950',
    cta: 'Ver excursiones',
  },
  {
    icon: <Waves className="w-6 h-6" />,
    titulo: 'Playa & Deporte',
    descripcion: 'Actividades en la playa de la Malvarrosa y zonas de ocio al aire libre en Valencia.',
    items: ['Días de playa en grupo', 'Fútbol internacional', 'Paddle surf y kayak', 'Rutas en bici por la ciudad'],
    color: 'from-blue-900/50 to-sky-950',
    cta: 'Ver actividades',
  },
  {
    icon: <Sunset className="w-6 h-6" />,
    titulo: 'Cultura & Ciudad',
    descripcion: 'Descubre Valencia con el carnet Erasmus Life. Entradas con descuento a los principales atractivos.',
    items: ["L'Oceanogràfic con descuento", 'Bioparc Valencia', 'Museo de Bellas Artes', 'Visitas guiadas Ciudad de las Artes'],
    color: 'from-amber-900/50 to-orange-950',
    cta: 'Ver cultura',
  },
];

const PROXIMOS = [
  { fecha: 'Cada viernes', titulo: 'Welcome Erasmus Night', lugar: 'Club Akuarela — Playa', tipo: 'Fiesta', plazas: '∞' },
  { fecha: 'Cada sábado', titulo: 'Excursión Alicante', lugar: 'Salida: Estación Joaquín Sorolla', tipo: 'Excursión', plazas: '30' },
  { fecha: 'Cada mes', titulo: 'Viaje a Marruecos — 9 días', lugar: 'Salida: Valencia', tipo: 'Viaje largo', plazas: '20' },
  { fecha: 'Verano', titulo: 'Aqualandia Benidorm', lugar: 'Salida grupal desde Valencia', tipo: 'Excursión', plazas: '40' },
];

export default function ActividadesPage() {
  return (
    <main style={{ background: 'var(--paper)', minHeight: '100vh', paddingTop: '5.5rem' }}>

      {/* Hero */}
      <section style={{ background: 'var(--ink)', padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(217,94,42,.1) 0%, transparent 65%)', transform: 'translate(15%, -15%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(26,86,209,.08) 0%, transparent 65%)', transform: 'translate(-15%, 15%)' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="section-eyebrow mb-5" style={{ color: 'rgba(255,255,255,.35)' }}>
            <span style={{ background: 'rgba(255,255,255,.2)', height: '2px', width: '2rem', display: 'inline-block', borderRadius: '1px' }} />
            Actividades & Fiestas
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.08, marginBottom: '1.25rem' }}>
                Vive Valencia
                <br />
                <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>al máximo.</em>
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Fiestas, excursiones, viajes y actividades culturales. Organizado por el equipo de Erasmus Life desde 2007 para que tu semestre en Valencia sea inolvidable.
              </p>
              <div className="flex gap-3">
                <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=Me%20interesan%20las%20actividades`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-terra">
                  Consultar actividades
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/carnet" className="btn btn-outline">
                  Ver carnet
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Fiestas', 'mensuales'],
                ['Excursiones', 'a toda España'],
                ['Cultura', 'con descuento'],
                ['Viajes', 'con seguro'],
              ].map(([v, l]) => (
                <div key={v} className="px-5 py-5 rounded-2xl" style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.375rem', color: '#fff', lineHeight: 1, fontStyle: 'italic' }}>{v}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: 'rgba(255,255,255,.4)', marginTop: '.25rem' }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Próximos eventos */}
      <section style={{ background: 'var(--paper-2)', padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="section-eyebrow mb-2">Agenda</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: 'var(--ink)', lineHeight: 1.2 }}>
                Próximas actividades
              </h2>
            </div>
          </div>
          <div className="space-y-3">
            {PROXIMOS.map((e, i) => (
              <div key={i} className="card-base p-5 flex flex-col sm:flex-row sm:items-center gap-4" style={{ borderRadius: 'var(--radius-lg)' }}>
                <div className="flex items-center gap-3 shrink-0 min-w-[9rem]">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--terra-pale)' }}>
                    <Calendar className="w-5 h-5" style={{ color: 'var(--terra)' }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', fontWeight: 600, color: 'var(--terra)' }}>{e.fecha}</span>
                </div>
                <div className="flex-1">
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.2 }}>{e.titulo}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: 'var(--text-secondary)', marginTop: '.2rem' }}>{e.lugar}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
                    background: 'var(--terra-pale)', color: 'var(--terra)', padding: '.25rem .75rem', borderRadius: '99px',
                  }}>
                    {e.tipo}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: 'var(--text-secondary)' }}>{e.plazas} plazas</span>
                  </div>
                  <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=Me%20interesa%20${encodeURIComponent(e.titulo)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-terra btn-sm">
                    Apuntarse
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-4 justify-center">Lo que ofrecemos</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1 }}>
              Algo para cada{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>tipo de erasmus.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {CATEGORIAS.map((cat) => (
              <div key={cat.titulo} className="card-base overflow-hidden" style={{ borderRadius: 'var(--radius-lg)' }}>
                <div className={`bg-gradient-to-br ${cat.color} p-7 relative`}>
                  <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,.15) 0%, transparent 50%)' }} />
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.15)', color: '#fff' }}>
                      {cat.icon}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.375rem', color: '#fff', lineHeight: 1.2, marginBottom: '.5rem' }}>
                      {cat.titulo}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.9rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.6 }}>
                      {cat.descripcion}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--terra)' }} />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: 'var(--text-secondary)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=Me%20interesa%20${encodeURIComponent(cat.titulo)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-outline btn-sm">
                    {cat.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
