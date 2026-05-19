import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';
import { VIAJES } from '@/data/content';

const TRIP_COLORS = ['from-amber-800 to-amber-950', 'from-blue-800 to-blue-950', 'from-teal-800 to-teal-950'];

export default function Viajes() {
  return (
    <section style={{ background: 'var(--paper-2)', padding: '6rem 0' }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <p className="section-eyebrow mb-4">Precios reales</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1 }}>
              Viajes con
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>seguro incluido.</em>
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '22rem', marginBottom: '1rem' }}>
              Todos los viajes incluyen seguro de viaje. Precios de grupo disponibles solo en nuestra oficina.
            </p>
            <Link href="/viajes" className="btn btn-outline btn-sm">
              Ver todos los viajes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {VIAJES.map((v, i) => (
            <div key={v.nombre} className="card-base overflow-hidden" style={{ borderRadius: 'var(--radius-lg)' }}>
              {/* Header gradient */}
              <div className={`bg-gradient-to-br ${TRIP_COLORS[i]} px-6 py-8 relative`}>
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,.2) 0%, transparent 50%)' }} />
                <div className="relative">
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: '.5rem' }}>
                    {v.tipo === 'viaje' ? 'Viaje largo' : 'Excursión'} · {v.duracion}
                  </p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.375rem', color: '#fff', lineHeight: 1.2 }}>
                    {v.nombre}
                  </h3>
                </div>
              </div>

              {/* Pricing table */}
              <div className="p-6">
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Precios de grupo
                </p>
                <div className="space-y-3 mb-5">
                  {v.precios.map((p, j) => (
                    <div key={j} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: 'var(--text-secondary)' }}>
                          {p.label}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-0.5">
                        <span className="num-stat" style={{ fontSize: '1.375rem', color: j === 0 ? 'var(--ink)' : 'var(--terra)', lineHeight: 1 }}>
                          {p.precio}€
                        </span>
                        {p.unit && <span style={{ fontFamily: 'var(--font-body)', fontSize: '.75rem', color: 'var(--text-muted)' }}>{p.unit}</span>}
                      </div>
                    </div>
                  ))}
                </div>

                <p style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  {v.info}
                </p>

                <a
                  href="https://wa.me/34634300402?text=Me%20interesa%20un%20viaje"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-terra btn-sm w-full justify-center"
                  style={{ borderRadius: '10px' }}
                >
                  Reservar plaza
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GOLD card badge */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 px-7 py-5 rounded-2xl"
          style={{ background: 'linear-gradient(135deg, rgba(201,151,74,.12), rgba(217,94,42,.08))', border: '1px solid rgba(201,151,74,.25)' }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--gold)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '.875rem' }}>G</span>
          </div>
          <div className="flex-1">
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '.9375rem', color: 'var(--ink)' }}>
              Con el Carnet GOLD, ahorras 10€ en cada viaje largo
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: 'var(--text-secondary)', marginTop: '.15rem' }}>
              2€–5€ de descuento en excursiones de 1 día. Cancelación con reembolso hasta 24h antes.
            </p>
          </div>
          <Link href="/carnet" className="btn btn-outline btn-sm shrink-0">
            Ver carnet GOLD
          </Link>
        </div>
      </div>
    </section>
  );
}
