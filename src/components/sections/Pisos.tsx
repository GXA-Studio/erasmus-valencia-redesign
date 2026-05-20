import Link from 'next/link';
import { ArrowRight, Home, BedDouble, MapPin } from 'lucide-react';
import { PISOS } from '@/data/content';

function PisoCard({ p, featured = false }: { p: typeof PISOS[0]; featured?: boolean }) {
  const libre = p.disponibilidad.some(d => d.libre > 0);

  return (
    <Link
      href={`/pisos/${p.id}`}
      className="card-base group flex flex-col overflow-hidden cursor-pointer"
      style={{ borderRadius: 'var(--radius-lg)' }}
    >
      {/* Image / gradient placeholder */}
      <div
        className={`relative ${featured ? 'h-56' : 'h-44'} flex items-end bg-gradient-to-br ${p.gradient}`}
      >
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,.15) 0%, transparent 50%)' }} />

        {/* Ref badge */}
        <div className="absolute top-4 left-4">
          <span className="label-tag label-dark" style={{ background: 'rgba(0,0,0,.4)', color: 'rgba(255,255,255,.75)', backdropFilter: 'blur(8px)' }}>
            {p.tipo}
          </span>
        </div>

        {/* Availability */}
        <div className="absolute top-4 right-4">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{
              fontFamily: 'var(--font-body)',
              background: libre ? 'rgba(34,197,94,.15)' : 'rgba(148,163,184,.15)',
              border: `1px solid ${libre ? 'rgba(34,197,94,.3)' : 'rgba(148,163,184,.2)'}`,
              color: libre ? '#4ADE80' : 'rgba(255,255,255,.45)',
              backdropFilter: 'blur(8px)',
            }}>
            <span className={libre ? 'dot-available' : 'dot-full'} />
            {libre ? 'Disponible' : 'Consultar'}
          </span>
        </div>

        {/* Bottom: hab count */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
          <BedDouble className="w-4 h-4" style={{ color: 'rgba(255,255,255,.6)' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: 'rgba(255,255,255,.7)', fontWeight: 600 }}>
            {p.habitaciones} hab.
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '.5rem' }}>
          {p.ref}
        </p>
        <h3
          className="group-hover:text-[var(--terra)] transition-colors"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--ink)', marginBottom: '.75rem', lineHeight: 1.3 }}
        >
          {p.titulo}
        </h3>

        <div className="flex items-center gap-1.5 mb-4">
          <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--text-muted)' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: 'var(--text-secondary)' }}>{p.zona}</span>
        </div>

        <p className="leading-relaxed mb-5" style={{ fontFamily: 'var(--font-body)', fontSize: '.9rem', color: 'var(--text-muted)', flex: 1 }}>
          {p.descripcion}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {p.detalles.map((d) => (
            <span key={d} className="label-tag label-dark" style={{ fontSize: '.6875rem' }}>{d}</span>
          ))}
        </div>

        {/* Disponibilidad */}
        <div style={{ paddingTop: '1.125rem', borderTop: '1px solid var(--border)' }}>
          {p.disponibilidad.map((d, i) => (
            <div key={i} className="flex justify-between items-center mb-1.5">
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: 'var(--text-muted)' }}>{d.periodo}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', fontWeight: 600, color: d.libre > 0 ? '#16A34A' : 'var(--text-muted)' }}>
                {d.libre > 0 ? `${d.libre} libre${d.libre > 1 ? 's' : ''}` : 'Consultar'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Pisos() {
  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--ink)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 lg:mb-24">
          <div>
            <p className="section-eyebrow mb-5" style={{ color: 'rgba(255,255,255,.35)' }}>
              <span style={{ background: 'rgba(255,255,255,.25)', height: '2px', width: '2rem', display: 'inline-block', borderRadius: '1px' }} />
              Alojamiento verificado
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
              Pisos reales,
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>sin comisiones.</em>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6">
            <p className="max-w-prose leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'rgba(255,255,255,.4)', textAlign: 'right' }}>
              7 propiedades en Blasco Ibáñez y zona universitaria. Disponibilidad por semestres.
            </p>
            <Link href="/pisos" className="btn btn-terra btn-sm">
              Ver todos los pisos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Grid — first 3 featured, rest normal */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PISOS.slice(0, 6).map((p, i) => (
            <PisoCard key={p.id} p={p} featured={i < 3} />
          ))}
        </div>

        {/* Bottom CTA band */}
        <div
          className="mt-16 lg:mt-20 rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: 'rgba(217,94,42,.12)', border: '1px solid rgba(217,94,42,.25)' }}
        >
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700, color: '#fff' }}>
              ¿No encuentras lo que buscas?
            </p>
            <p className="mt-2 leading-relaxed max-w-prose" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(255,255,255,.45)' }}>
              Cuéntanos qué necesitas y te encontramos el piso perfecto.
            </p>
          </div>
          <a href="https://wa.me/34634300402?text=Busco%20piso%20en%20Valencia"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-terra shrink-0">
            Escribirnos ahora
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
