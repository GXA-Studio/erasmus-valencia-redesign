import Link from 'next/link';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { CARNETS } from '@/data/content';

export default function Carnet() {
  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--paper)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-prose mx-auto mb-20 lg:mb-24">
          <p className="section-eyebrow mb-5 justify-center">Carnet Erasmus Life</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1 }}>
            Tres niveles.
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>Cientos de descuentos.</em>
          </h2>
          <p className="mt-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'var(--text-muted)' }}>
            Oceanogràfic, Bioparc, discotecas, tiendas y mucho más.
            El carnet GOLD incluye descuentos de hasta 10€ en viajes largos y cancelación con reembolso.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {CARNETS.map((c) => (
            <div
              key={c.nombre}
              className={`relative rounded-2xl flex flex-col ${c.highlight ? '' : 'card-base'}`}
              style={c.highlight ? {
                background: 'var(--ink)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 24px 64px rgba(12,12,16,.2)',
              } : {
                borderRadius: 'var(--radius-lg)',
              }}
            >
              {c.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: 'var(--gold)', color: '#fff', fontFamily: 'var(--font-body)', letterSpacing: '.04em' }}>
                    <Sparkles className="w-3 h-3 fill-white" />
                    Más completo
                  </span>
                </div>
              )}

              <div className="p-9 flex flex-col flex-1">
                {/* Plan name */}
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700,
                  letterSpacing: '.12em', textTransform: 'uppercase',
                  color: c.highlight ? 'var(--terra)' : 'var(--text-muted)',
                  marginBottom: '.75rem',
                }}>
                  {c.nombre}
                </p>

                {/* Price */}
                <div className="flex items-end gap-2 mb-1">
                  <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: c.precio === 0 ? '2.75rem' : '3.5rem',
                    lineHeight: 1,
                    color: c.highlight ? '#fff' : 'var(--ink)',
                    fontStyle: 'italic',
                  }}>
                    {c.precioLabel}
                  </span>
                </div>
                {c.periodo && (
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: c.highlight ? 'rgba(255,255,255,.4)' : 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    {c.periodo}
                  </p>
                )}
                <p className="leading-relaxed mb-7" style={{ fontFamily: 'var(--font-body)', fontSize: '.9375rem', color: c.highlight ? 'rgba(255,255,255,.45)' : 'var(--text-muted)' }}>
                  {c.descripcion}
                </p>

                {/* Benefits */}
                <ul className="space-y-4 flex-1 mb-8">
                  {c.beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: c.highlight ? 'rgba(217,94,42,.2)' : 'var(--terra-pale)' }}>
                        <Check className="w-3 h-3" style={{ color: 'var(--terra)' }} />
                      </div>
                      <span className="leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '.9rem', color: c.highlight ? 'rgba(255,255,255,.65)' : 'var(--text-muted)' }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/carnet"
                  className={`btn w-full justify-center ${c.highlight ? 'btn-terra' : 'btn-outline'}`}
                  style={{ borderRadius: '10px' }}>
                  {c.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center mt-16" style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: 'var(--text-muted)' }}>
          Recoge tu carnet en nuestra <strong style={{ color: 'var(--text-secondary)' }}>oficina púrpura</strong> — Calle Ramón Llull 21 bajo, Valencia
        </p>
      </div>
    </section>
  );
}
