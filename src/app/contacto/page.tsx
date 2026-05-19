'use client';

import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, Check } from 'lucide-react';
import { BRAND } from '@/data/content';

const INFO = [
  { icon: <MapPin className="w-5 h-5" />, label: 'Dirección', value: BRAND.address },
  { icon: <Clock className="w-5 h-5" />, label: 'Horario', value: BRAND.hours },
  { icon: <Phone className="w-5 h-5" />, label: 'Teléfono / WhatsApp', value: BRAND.phone },
  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: BRAND.email },
];

export default function ContactoPage() {
  const [form, setForm] = useState({
    email_expediteur: '',
    nom_expediteur: '',
    tel_expediteur: '',
    ville_expediteur: '',
    wha_expediteur: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <main style={{ background: 'var(--paper)', minHeight: '100vh', paddingTop: '5.5rem' }}>

      {/* Hero */}
      <section style={{ background: 'var(--ink)', padding: '5rem 0 4rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-eyebrow mb-5" style={{ color: 'rgba(255,255,255,.35)' }}>
            <span style={{ background: 'rgba(255,255,255,.2)', height: '2px', width: '2rem', display: 'inline-block', borderRadius: '1px' }} />
            Contacto
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.08, maxWidth: '28rem', marginBottom: '1rem' }}>
            Estamos aquí
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>para ayudarte.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(255,255,255,.45)', maxWidth: '34rem', lineHeight: 1.7 }}>
            Respuesta media: 2 horas. También puedes pasarte por la{' '}
            <strong style={{ color: 'rgba(255,255,255,.7)' }}>oficina púrpura</strong> de lunes a viernes.
          </p>
        </div>
      </section>

      {/* Main grid */}
      <section style={{ padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Left: info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="card-base p-6" style={{ borderRadius: 'var(--radius-lg)' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--ink)', marginBottom: '1.5rem' }}>
                  Información de contacto
                </h2>
                <div className="space-y-4">
                  {INFO.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--terra-pale)' }}>
                        <span style={{ color: 'var(--terra)' }}>{item.icon}</span>
                      </div>
                      <div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '.75rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '.2rem' }}>
                          {item.label}
                        </p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '.9375rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=Hola%2C%20necesito%20ayuda`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all"
                style={{ background: '#25D366', color: '#fff', textDecoration: 'none', display: 'flex' }}>
                <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem' }}>WhatsApp directo</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', opacity: .85 }}>Respuesta en menos de 2 horas</p>
                </div>
              </a>

              {/* Map placeholder */}
              <div className="card-base overflow-hidden" style={{ borderRadius: 'var(--radius-lg)', height: '180px', background: 'var(--paper-2)' }}>
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <MapPin className="w-8 h-8" style={{ color: 'var(--terra)' }} />
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: 'var(--text-secondary)', textAlign: 'center', padding: '0 1.5rem' }}>
                    C/ Ramón Llull 21 bajo<br />
                    <strong style={{ color: 'var(--ink)' }}>Oficina púrpura</strong> — 46021 Valencia
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="card-base p-8" style={{ borderRadius: 'var(--radius-lg)' }}>
                {sent ? (
                  <div className="flex flex-col items-center gap-5 py-12 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#22C55E' }}>
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '.5rem' }}>
                        ¡Mensaje enviado!
                      </p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        Te responderemos en menos de 2 horas. También puedes llamarnos o pasarte por la oficina.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.375rem', color: 'var(--ink)', marginBottom: '.5rem' }}>
                      Envíanos un mensaje
                    </h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.9375rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                      Cuéntanos en qué podemos ayudarte.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '.4rem' }}>
                            Nombre *
                          </label>
                          <input
                            name="nom_expediteur"
                            value={form.nom_expediteur}
                            onChange={handleChange}
                            required
                            placeholder="Tu nombre"
                            className="w-full rounded-xl"
                            style={{
                              fontFamily: 'var(--font-body)', fontSize: '.9375rem',
                              background: 'var(--paper-2)', border: '1px solid var(--border)',
                              color: 'var(--ink)', padding: '.875rem 1rem', outline: 'none',
                            }}
                          />
                        </div>
                        <div>
                          <label style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '.4rem' }}>
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email_expediteur"
                            value={form.email_expediteur}
                            onChange={handleChange}
                            required
                            placeholder="tu@email.com"
                            className="w-full rounded-xl"
                            style={{
                              fontFamily: 'var(--font-body)', fontSize: '.9375rem',
                              background: 'var(--paper-2)', border: '1px solid var(--border)',
                              color: 'var(--ink)', padding: '.875rem 1rem', outline: 'none',
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '.4rem' }}>
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            name="tel_expediteur"
                            value={form.tel_expediteur}
                            onChange={handleChange}
                            placeholder="+34 600 000 000"
                            className="w-full rounded-xl"
                            style={{
                              fontFamily: 'var(--font-body)', fontSize: '.9375rem',
                              background: 'var(--paper-2)', border: '1px solid var(--border)',
                              color: 'var(--ink)', padding: '.875rem 1rem', outline: 'none',
                            }}
                          />
                        </div>
                        <div>
                          <label style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '.4rem' }}>
                            Ciudad de origen
                          </label>
                          <input
                            name="ville_expediteur"
                            value={form.ville_expediteur}
                            onChange={handleChange}
                            placeholder="París, Milán, Berlín..."
                            className="w-full rounded-xl"
                            style={{
                              fontFamily: 'var(--font-body)', fontSize: '.9375rem',
                              background: 'var(--paper-2)', border: '1px solid var(--border)',
                              color: 'var(--ink)', padding: '.875rem 1rem', outline: 'none',
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <label style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '.4rem' }}>
                          WhatsApp (opcional)
                        </label>
                        <input
                          name="wha_expediteur"
                          value={form.wha_expediteur}
                          onChange={handleChange}
                          placeholder="+34 600 000 000"
                          className="w-full rounded-xl"
                          style={{
                            fontFamily: 'var(--font-body)', fontSize: '.9375rem',
                            background: 'var(--paper-2)', border: '1px solid var(--border)',
                            color: 'var(--ink)', padding: '.875rem 1rem', outline: 'none',
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '.4rem' }}>
                          Mensaje *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="¿En qué podemos ayudarte? Pisos, carnet, viajes, actividades..."
                          className="w-full rounded-xl resize-none"
                          style={{
                            fontFamily: 'var(--font-body)', fontSize: '.9375rem',
                            background: 'var(--paper-2)', border: '1px solid var(--border)',
                            color: 'var(--ink)', padding: '.875rem 1rem', outline: 'none',
                          }}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-terra w-full justify-center disabled:opacity-70"
                        style={{ borderRadius: '12px' }}>
                        {loading ? (
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Enviar mensaje
                          </>
                        )}
                      </button>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                        Al enviar este formulario aceptas nuestra política de privacidad.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
