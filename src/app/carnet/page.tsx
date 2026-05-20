import Link from 'next/link';
import { Check, ArrowRight, Sparkles, MapPin, Clock } from 'lucide-react';
import { CARNETS, BRAND } from '@/data/content';

export const metadata = {
  title: 'Carnet Erasmus Life — Descuentos en Valencia | Erasmus Life Valencia',
  description: 'Tres niveles de carnet. Descuentos en L\'Oceanogràfic, Bioparc, discotecas, tiendas y viajes. Recógelo en nuestra oficina púrpura.',
};

const DESCUENTOS = [
  { categoria: 'Cultura', items: ["L'Oceanogràfic", 'Bioparc Valencia', 'Museos municipales', 'Cinesa Aqua'] },
  { categoria: 'Ocio nocturno', items: ['Sala Be Cool', 'Club Akuarela', 'Discotecas zona Russafa', 'Lista VIP fiestas Erasmus'] },
  { categoria: 'Comercios', items: ['Tiendas de moda centro', 'Restaurantes convenio', 'Supermercados socios', 'Academias de idiomas'] },
  { categoria: 'Viajes (GOLD)', items: ['10€ dto. viajes largos', '2–5€ dto. excursiones', 'Cancelación con reembolso', 'Seguro incluido'] },
];

export default function CarnetPage() {
  return (
    <div className="w-full" style={{ background: 'var(--paper)', minHeight: '100vh', paddingTop: '5.5rem' }}>

      {/* Hero */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--ink)', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,151,74,.12) 0%, transparent 65%)', transform: 'translate(20%, -20%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="section-eyebrow mb-6" style={{ color: 'rgba(255,255,255,.35)' }}>
            <span style={{ background: 'rgba(255,255,255,.2)', height: '2px', width: '2rem', display: 'inline-block', borderRadius: '1px' }} />
            Carnet Erasmus Life
          </p>
          <div className="max-w-2xl">
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.08, marginBottom: '1.5rem' }}>
              Tres niveles.
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Cientos de descuentos.</em>
            </h1>
            <p className="leading-loose max-w-prose" style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'rgba(255,255,255,.45)' }}>
              El carnet oficial de Erasmus Life Valencia. Descuentos reales en cultura, ocio, comercios y viajes por toda España.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--paper)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {CARNETS.map((c) => (
              <div
                key={c.nombre}
                className={`relative rounded-2xl flex flex-col ${c.highlight ? '' : 'card-base'}`}
                style={c.highlight ? {
                  background: 'var(--ink)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 24px 64px rgba(12,12,16,.2)',
                } : { borderRadius: 'var(--radius-lg)' }}
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
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700,
                    letterSpacing: '.12em', textTransform: 'uppercase',
                    color: c.highlight ? 'var(--terra)' : 'var(--text-muted)', marginBottom: '1rem',
                  }}>
                    {c.nombre}
                  </p>
                  <div className="flex items-end gap-2 mb-1">
                    <span style={{
                      fontFamily: 'var(--font-display)', fontWeight: 800,
                      fontSize: c.precio === 0 ? '2.75rem' : '3.5rem',
                      lineHeight: 1, color: c.highlight ? '#fff' : 'var(--ink)', fontStyle: 'italic',
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
                  <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=Quiero%20el%20carnet%20${c.nombre}`}
                    target="_blank" rel="noopener noreferrer"
                    className={`btn w-full justify-center ${c.highlight ? 'btn-terra' : 'btn-outline'}`}
                    style={{ borderRadius: '10px' }}>
                    {c.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Descuentos grid */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--paper-2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 lg:mb-24">
            <p className="section-eyebrow mb-5 justify-center">Descuentos incluidos</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1 }}>
              200+ establecimientos
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>en Valencia y España.</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {DESCUENTOS.map((cat) => (
              <div key={cat.categoria} className="card-base p-8" style={{ borderRadius: 'var(--radius-lg)' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1.25rem' }}>
                  {cat.categoria}
                </p>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--terra)' }} />
                      <span className="leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '.9375rem', color: 'var(--text-muted)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to get it */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--paper)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-eyebrow mb-5 justify-center">Cómo conseguirlo</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.15, marginBottom: '3rem' }}>
            Pásate por la{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>oficina púrpura</em>
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {[
              { icon: <MapPin className="w-5 h-5" style={{ color: 'var(--terra)' }} />, title: 'Ubicación', text: 'Calle Ramón Llull 21 bajo, Valencia (46021)' },
              { icon: <Clock className="w-5 h-5" style={{ color: 'var(--terra)' }} />, title: 'Horario', text: 'Lunes a viernes · 10:00 – 18:00' },
              { icon: <Check className="w-5 h-5" style={{ color: 'var(--terra)' }} />, title: 'Requisito', text: 'Trae tu carnet de estudiante o pasaporte' },
            ].map((s) => (
              <div key={s.title} className="card-base p-8" style={{ borderRadius: 'var(--radius-lg)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--terra-pale)' }}>
                  {s.icon}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', color: 'var(--ink)', marginBottom: '.5rem' }}>{s.title}</p>
                <p className="leading-relaxed max-w-prose" style={{ fontFamily: 'var(--font-body)', fontSize: '.9375rem', color: 'var(--text-muted)' }}>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=Quiero%20info%20sobre%20el%20carnet`}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-terra">
              Consultar por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/contacto" className="btn btn-outline">
              Más información
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
