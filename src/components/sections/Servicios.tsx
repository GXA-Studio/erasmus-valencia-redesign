import Link from 'next/link';
import { ArrowUpRight, Home, Calendar, Map, Music, CreditCard, Tag, Briefcase } from 'lucide-react';

const ITEMS = [
  {
    Icon: Home, label: 'Pisos y Habitaciones', href: '/pisos',
    desc: '7 propiedades verificadas en Valencia. Sin comisiones, sin burocracia.',
    badge: 'Lo más buscado', badgeClass: 'label-terra',
    accent: 'var(--terra)',
  },
  {
    Icon: Calendar, label: 'Actividades', href: '/actividades',
    desc: 'Tours, clases de idiomas, deportes y excursiones cada semana.',
    badge: null, badgeClass: '', accent: 'var(--azure)',
  },
  {
    Icon: Map, label: 'Viajes', href: '/viajes',
    desc: 'Marruecos, Alicante, Aqualandia y más. Seguro de viaje incluido.',
    badge: 'Desde 30€', badgeClass: 'label-gold',
    accent: '#065F46',
  },
  {
    Icon: Music, label: 'Fiestas', href: '/fiestas',
    desc: 'Guest list y acceso VIP a las mejores fiestas universitarias de Valencia.',
    badge: null, badgeClass: '', accent: '#7C3AED',
  },
  {
    Icon: CreditCard, label: 'Carnet Erasmus Life', href: '/carnet',
    desc: 'Oceanogràfic, Bioparc, discotecas y 200+ descuentos. Desde gratis.',
    badge: '3 niveles', badgeClass: 'label-azure',
    accent: 'var(--azure)',
  },
  {
    Icon: Tag, label: 'Descuentos Valencia', href: '/descuentos',
    desc: 'Tiendas, restaurantes, ocio y cultura. El carnet que se amortiza solo.',
    badge: null, badgeClass: '', accent: 'var(--gold)',
  },
  {
    Icon: Briefcase, label: 'Jobs & Internships', href: '/trabajo',
    desc: 'Prácticas y empleos para estudiantes internacionales en Valencia.',
    badge: null, badgeClass: '', accent: '#0F766E',
  },
];

export default function Servicios() {
  return (
    <section className="py-24 lg:py-28" style={{ background: 'var(--paper)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div>
            <p className="section-eyebrow mb-5">Nuestros servicios</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: 'var(--ink)', maxWidth: '26rem', lineHeight: 1.12 }}>
              Todo lo que<br />
              <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>necesitas</em>{' '}
              en Valencia.
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'var(--text-secondary)', maxWidth: '26rem', lineHeight: 1.75 }}>
            Desde que aterrizas hasta que te vas, acompañamos a más de 50.000 estudiantes
            internacionales cada año desde 2007.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ITEMS.map(({ Icon, label, href, desc, badge, badgeClass, accent }) => (
            <Link
              key={href} href={href}
              className="card-base group p-8 flex flex-col cursor-pointer"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${accent}18` }}>
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                {badge && <span className={`label-tag ${badgeClass}`}>{badge}</span>}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem',
                color: 'var(--ink)', marginBottom: '.625rem',
                transition: 'color .2s',
              }}
                className="group-hover:text-[var(--terra)] transition-colors"
              >
                {label}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: 1.75, flex: 1 }}>
                {desc}
              </p>

              <div className="flex items-center gap-1.5 mt-6" style={{ color: 'var(--terra)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '.8125rem' }}>
                Ver más
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </div>
            </Link>
          ))}

          {/* CTA card */}
          <div
            className="p-8 flex flex-col justify-between rounded-2xl"
            style={{ background: 'var(--ink)', gridColumn: 'span 1' }}
          >
            <div>
              <p className="section-eyebrow mb-5" style={{ color: 'rgba(255,255,255,.3)' }}>¿Dudas?</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: '#fff', lineHeight: 1.3, marginBottom: '1rem' }}>
                El equipo te responde hoy
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '.9rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>
                Lun–Vie 10:00–18:00
              </p>
            </div>
            <a
              href="https://wa.me/34634300402?text=Hola!"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-terra btn-sm mt-8"
              style={{ borderRadius: '10px' }}
            >
              Escribir por WhatsApp
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
