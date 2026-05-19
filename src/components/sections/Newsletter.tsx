'use client';

import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setDone(true);
  };

  return (
    <section className="py-24 lg:py-28" style={{ background: 'var(--paper)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl px-10 py-16 md:px-20 relative overflow-hidden"
          style={{ background: 'var(--ink)' }}
        >
          {/* Decorative blob */}
          <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-20"
            style={{ background: 'radial-gradient(circle, var(--terra) 0%, transparent 65%)', transform: 'translate(30%, -30%)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-10"
            style={{ background: 'radial-gradient(circle, var(--azure) 0%, transparent 65%)', transform: 'translate(-30%, 30%)' }} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-eyebrow mb-6" style={{ color: 'rgba(255,255,255,.35)' }}>
                <span style={{ background: 'rgba(255,255,255,.2)', height: '2px', width: '2rem', display: 'inline-block', borderRadius: '1px' }} />
                Newsletter semanal
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: '1.25rem' }}>
                No te pierdas
                <br />
                <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>nada de Valencia.</em>
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.8 }}>
                Eventos, pisos disponibles, viajes y descuentos cada semana.
                Sin spam, solo lo que importa para tu Erasmus.
              </p>
            </div>

            <div>
              {done ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#22C55E' }}>
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.375rem', color: '#fff' }}>¡Suscrito!</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '.9375rem', color: 'rgba(255,255,255,.5)' }}>Recibirás el próximo newsletter el lunes.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-3">
                  <div style={{ position: 'relative' }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      required
                      className="w-full rounded-xl"
                      style={{
                        fontFamily: 'var(--font-body)', fontSize: '.9375rem',
                        background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.14)',
                        color: '#fff', padding: '1rem 1.25rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-terra w-full justify-center disabled:opacity-70"
                    style={{ borderRadius: '12px' }}
                  >
                    {loading ? (
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Suscribirme gratis
                      </>
                    )}
                  </button>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '.75rem', color: 'rgba(255,255,255,.25)', textAlign: 'center' }}>
                    Sin spam. Baja cuando quieras.
                  </p>
                </form>
              )}

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}>
                {[['5k+', 'suscriptores'], ['Semanal', 'frecuencia'], ['0%', 'spam']].map(([v, l]) => (
                  <div key={l} className="text-center">
                    <p className="num-stat" style={{ fontSize: '1.5rem', color: '#fff', lineHeight: 1 }}>{v}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.75rem', color: 'rgba(255,255,255,.35)', marginTop: '.25rem' }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
