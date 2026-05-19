'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, ChevronDown } from 'lucide-react';
import { BRAND } from '@/data/content';

const ZONAS = ['Blasco Ibáñez', 'Zona Universitaria', 'Benimaclet', 'Ruzafa', 'Centro histórico', 'Camins al Grau'];

export default function Hero() {
  return (
    <section className="mesh-bg min-h-[100svh] flex flex-col" aria-label="Portada principal">
      {/* Inner content sits above the pseudo-element layers */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Top spacer for navbar */}
        <div className="h-20" />

        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* ── Left col: headline + CTA ── */}
              <div>
                <p className="section-eyebrow reveal" style={{ color: 'rgba(255,255,255,.45)', marginBottom: '1.5rem' }}>
                  <span style={{ background: 'rgba(255,255,255,.12)', height: '2px', width: '2rem', display: 'inline-block', borderRadius: '1px', flexShrink: 0 }} />
                  Valencia · fundada en 2007
                </p>

                <h1
                  className="reveal d1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                    fontWeight: 800,
                    lineHeight: 1.05,
                    letterSpacing: '-.03em',
                    color: '#fff',
                  }}
                >
                  Tu Erasmus
                  <br />
                  <em style={{
                    fontStyle: 'italic',
                    background: 'linear-gradient(135deg, #E85D2A 0%, #C9974A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>empieza</em>
                  <br />
                  aquí.
                </h1>

                <p
                  className="reveal d2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.125rem',
                    color: 'rgba(255,255,255,.55)',
                    lineHeight: 1.7,
                    maxWidth: '30rem',
                    marginTop: '1.5rem',
                  }}
                >
                  Pisos sin comisiones, actividades semanales, viajes a toda España
                  y el carnet de descuentos más completo de Valencia.
                </p>

                <div className="reveal d3 flex flex-wrap gap-4" style={{ marginTop: '2.5rem' }}>
                  <Link href="/pisos" className="btn btn-terra">
                    Ver pisos disponibles
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/carnet" className="btn btn-ghost">
                    Conseguir carnet gratis
                  </Link>
                </div>

                {/* Social proof strip */}
                <div className="reveal d4 flex flex-wrap items-center gap-6" style={{ marginTop: '3rem' }}>
                  <div className="flex -space-x-2">
                    {['A','M','L','K','R'].map((l, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                        style={{ borderColor: 'var(--ink)', background: `hsl(${i*60},60%,45%)`, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '.75rem', color: '#fff' }}>
                        {l}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '.875rem', color: '#fff' }}>+50.000 estudiantes</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.75rem', color: 'rgba(255,255,255,.4)' }}>de toda Europa desde 2007</p>
                  </div>
                  <div style={{ width: '1px', height: '2.5rem', background: 'rgba(255,255,255,.12)' }} />
                  <div className="flex items-center gap-2">
                    <div style={{ width: '.5rem', height: '.5rem', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 0 3px rgba(34,197,94,.2)' }} />
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: 'rgba(255,255,255,.5)' }}>Respuesta hoy · {BRAND.hours}</p>
                  </div>
                </div>
              </div>

              {/* ── Right col: search widget ── */}
              <div className="reveal d3">
                <div
                  className="rounded-2xl p-6 lg:p-7"
                  style={{
                    background: 'rgba(255,255,255,.06)',
                    border: '1px solid rgba(255,255,255,.12)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700, color: '#fff', marginBottom: '.25rem' }}>
                      Encuentra tu piso
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: 'rgba(255,255,255,.4)' }}>
                      Sin login · Sin comisiones · Sin sorpresas
                    </p>
                  </div>

                  <div className="space-y-3">
                    {/* Zone select */}
                    <div>
                      <label style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', display: 'block', marginBottom: '.5rem' }}>
                        Zona
                      </label>
                      <div style={{ position: 'relative' }}>
                        <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'rgba(255,255,255,.35)' }} />
                        <select
                          className="w-full rounded-xl cursor-pointer"
                          style={{
                            fontFamily: 'var(--font-body)', fontSize: '.9375rem',
                            background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)',
                            color: 'rgba(255,255,255,.8)', padding: '.75rem 1rem .75rem 2.5rem',
                            outline: 'none', appearance: 'none',
                          }}
                        >
                          <option value="">Todas las zonas</option>
                          {ZONAS.map((z) => <option key={z} value={z}>{z}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Type pills */}
                    <div>
                      <label style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', display: 'block', marginBottom: '.5rem' }}>
                        Tipo
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Habitación', 'Piso', 'Estudio'].map((t) => (
                          <button key={t} className="rounded-xl py-2.5 text-sm font-medium transition-all cursor-pointer hover:-translate-y-px"
                            style={{ fontFamily: 'var(--font-body)', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.1)', color: 'rgba(255,255,255,.7)' }}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Semester */}
                    <div>
                      <label style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', display: 'block', marginBottom: '.5rem' }}>
                        Semestre
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Sep – Ene', 'Feb – Jun'].map((s) => (
                          <button key={s} className="rounded-xl py-2.5 text-sm font-medium transition-all cursor-pointer hover:-translate-y-px"
                            style={{ fontFamily: 'var(--font-body)', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.1)', color: 'rgba(255,255,255,.7)' }}>
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Link href="/pisos" className="btn btn-terra w-full" style={{ borderRadius: '12px', justifyContent: 'center', marginTop: '.25rem' }}>
                      Buscar pisos disponibles
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Quick links */}
                  <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,.08)' }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.75rem', color: 'rgba(255,255,255,.3)', marginBottom: '.5rem' }}>Acceso rápido</p>
                    <div className="flex flex-wrap gap-2">
                      {['Blasco Ibáñez', 'Zona UV', 'Benimaclet'].map((z) => (
                        <Link key={z} href={`/pisos?zona=${encodeURIComponent(z)}`}
                          className="rounded-full px-3 py-1 text-xs font-medium transition-all cursor-pointer hover:bg-white/15"
                          style={{ fontFamily: 'var(--font-body)', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.55)', border: '1px solid rgba(255,255,255,.1)' }}>
                          {z}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* WhatsApp badge below card */}
                <div className="flex items-center gap-3 mt-4 px-5 py-3.5 rounded-xl"
                  style={{ background: 'rgba(37,211,102,.12)', border: '1px solid rgba(37,211,102,.25)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#25D366' }}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '.875rem', color: '#fff' }}>Respuesta garantizada hoy</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.75rem', color: 'rgba(255,255,255,.45)' }}>{BRAND.hours}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-8 reveal d5">
          <div className="flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-70 transition-opacity"
            onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#fff' }}>Scroll</p>
            <ChevronDown className="w-4 h-4 text-white animate-bounce" />
          </div>
        </div>
      </div>

      {/* Wave transition */}
      <div className="relative z-10" style={{ marginBottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" className="w-full block" fill="none" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path d="M0 80 L1440 80 L1440 40 C1200 80 960 10 720 35 C480 60 240 0 0 30 Z" fill="var(--paper)" />
        </svg>
      </div>
    </section>
  );
}
