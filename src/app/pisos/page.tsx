import Link from 'next/link';
import { ArrowRight, MapPin, BedDouble, Home, Phone } from 'lucide-react';
import { PISOS, BRAND } from '@/data/content';

export const metadata = {
  title: 'Pisos para Erasmus en Valencia — Sin comisiones | Erasmus Life Valencia',
  description: '7 propiedades reales en Blasco Ibáñez y zona universitaria. Sin comisiones de agencia. Disponibilidad por semestres.',
};

export default function PisosPage() {
  return (
    <main style={{ background: 'var(--paper)', minHeight: '100vh', paddingTop: '5.5rem' }}>

      {/* Hero banner */}
      <section style={{ background: 'var(--ink)', padding: '5rem 0 4rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-eyebrow mb-5" style={{ color: 'rgba(255,255,255,.35)' }}>
            <span style={{ background: 'rgba(255,255,255,.2)', height: '2px', width: '2rem', display: 'inline-block', borderRadius: '1px' }} />
            Alojamiento verificado
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.08, marginBottom: '1.25rem' }}>
                Pisos reales,
                <br />
                <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>sin comisiones.</em>
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'rgba(255,255,255,.5)', maxWidth: '36rem', lineHeight: 1.7 }}>
                7 propiedades en Blasco Ibáñez y zona universitaria. Disponibilidad por semestres. Sin intermediarios, sin sorpresas.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: 'rgba(217,94,42,.15)', border: '1px solid rgba(217,94,42,.25)' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: 'rgba(255,255,255,.7)' }}>
                  <strong style={{ color: '#fff' }}>7</strong> propiedades verificadas
                </span>
              </div>
              <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=Busco%20piso%20en%20Valencia`}
                target="_blank" rel="noopener noreferrer"
                className="btn btn-terra">
                Consultar disponibilidad
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div style={{ background: 'var(--paper-2)', borderBottom: '1px solid var(--border)', padding: '.875rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-3">
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', fontWeight: 600, color: 'var(--text-muted)' }}>Zona:</span>
          {['Todas', 'Blasco Ibáñez', 'Zona Universitaria'].map((z) => (
            <button key={z} className="px-4 py-1.5 rounded-full text-sm transition-colors"
              style={{
                fontFamily: 'var(--font-body)', fontWeight: 600,
                background: z === 'Todas' ? 'var(--terra)' : 'transparent',
                color: z === 'Todas' ? '#fff' : 'var(--text-secondary)',
                border: `1px solid ${z === 'Todas' ? 'transparent' : 'var(--border)'}`,
                cursor: 'pointer',
              }}>
              {z}
            </button>
          ))}
          <div className="ml-auto">
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: 'var(--text-muted)' }}>
              {PISOS.length} propiedades
            </span>
          </div>
        </div>
      </div>

      {/* Property grid */}
      <section style={{ padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PISOS.map((p) => {
              const libre = p.disponibilidad.some((d) => d.libre > 0);
              return (
                <div key={p.id} className="card-base overflow-hidden" style={{ borderRadius: 'var(--radius-lg)' }}>
                  {/* Gradient header */}
                  <div className={`relative h-52 bg-gradient-to-br ${p.gradient} flex items-end`}>
                    <div className="absolute inset-0 opacity-20"
                      style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,.15) 0%, transparent 50%)' }} />
                    <div className="absolute top-4 left-4">
                      <span style={{
                        fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase',
                        background: 'rgba(0,0,0,.45)', color: 'rgba(255,255,255,.75)', padding: '.25rem .75rem', borderRadius: '99px', backdropFilter: 'blur(8px)',
                      }}>
                        {p.tipo === 'piso' ? 'Piso completo' : 'Habitación'}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                        style={{
                          fontFamily: 'var(--font-body)',
                          background: libre ? 'rgba(34,197,94,.15)' : 'rgba(148,163,184,.15)',
                          border: `1px solid ${libre ? 'rgba(34,197,94,.3)' : 'rgba(148,163,184,.2)'}`,
                          color: libre ? '#4ADE80' : 'rgba(255,255,255,.5)',
                          backdropFilter: 'blur(8px)',
                        }}>
                        <span className={`w-1.5 h-1.5 rounded-full ${libre ? 'bg-green-400' : 'bg-slate-400'}`} />
                        {libre ? 'Disponible' : 'Consultar'}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                      <BedDouble className="w-4 h-4" style={{ color: 'rgba(255,255,255,.6)' }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: 'rgba(255,255,255,.7)', fontWeight: 600 }}>
                        {p.habitaciones} hab.
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '.4rem' }}>
                      {p.ref}
                    </p>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--ink)', marginBottom: '.5rem', lineHeight: 1.25 }}>
                      {p.titulo}
                    </h2>
                    <div className="flex items-center gap-1.5 mb-3">
                      <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--text-muted)' }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: 'var(--text-secondary)' }}>{p.zona}</span>
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                      {p.descripcion}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.detalles.map((d) => (
                        <span key={d} style={{
                          fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 600, letterSpacing: '.04em',
                          background: 'var(--paper-2)', border: '1px solid var(--border)', color: 'var(--text-secondary)',
                          padding: '.2rem .6rem', borderRadius: '99px',
                        }}>
                          {d}
                        </span>
                      ))}
                    </div>
                    <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border)', marginBottom: '1.25rem' }}>
                      {p.disponibilidad.map((d, i) => (
                        <div key={i} className="flex justify-between items-center mb-1">
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: '.75rem', color: 'var(--text-muted)' }}>{d.periodo}</span>
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: '.75rem', fontWeight: 600, color: d.libre > 0 ? '#16A34A' : 'var(--text-muted)' }}>
                            {d.libre > 0 ? `${d.libre} libre${d.libre > 1 ? 's' : ''}` : 'Consultar'}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=Me%20interesa%20el%20piso%20${encodeURIComponent(p.ref)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="btn btn-terra w-full justify-center"
                      style={{ borderRadius: '10px' }}>
                      Consultar por WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section style={{ background: 'var(--ink)', padding: '5rem 0' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '1rem' }}>
            ¿No encuentras lo que buscas?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Cuéntanos qué necesitas — zona, número de habitaciones, semestre — y te encontramos el piso perfecto entre nuestros socios.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=Busco%20piso%20en%20Valencia`}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-terra">
              <Phone className="w-4 h-4" />
              Hablar con el equipo
            </a>
            <Link href="/contacto" className="btn btn-outline">
              Formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
