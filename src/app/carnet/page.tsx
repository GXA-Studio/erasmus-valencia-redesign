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
    <main style={{ background: 'var(--paper)', minHeight: '100vh', paddingTop: '5.5rem' }}>

      {/* Hero */}
      <section style={{ background: 'var(--ink)', padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,151,74,.12) 0%, transparent 65%)', transform: 'translate(20%, -20%)' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="section-eyebrow mb-5" style={{ color: 'rgba(255,255,255,.35)' }}>
            <span style={{ background: 'rgba(255,255,255,.2)', height: '2px', width: '2rem', display: 'inline-block', borderRadius: '1px' }} />
            Carnet Erasmus Life
          </p>
          <div className="max-w-2xl">
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.08, marginBottom: '1.25rem' }}>
              Tres niveles.
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Cientos de descuentos.</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>
              El carnet oficial de Erasmus Life Valencia. Descuentos reales en cultura, ocio, comercios y viajes por toda España.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section style={{ padding: '5rem 0', background: 'var(--paper)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
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
                <div className="p-7 flex flex-col flex-1">
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700,
                    letterSpacing: '.12em', textTransform: 'uppercase',
                    color: c.highlight ? 'var(--terra)' : 'var(--text-muted)', marginBottom: '.75rem',
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
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: c.highlight ? 'rgba(255,255,255,.4)' : 'var(--text-muted)', marginBottom: '1rem' }}>
                      {c.periodo}
                    </p>
                  )}
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: c.highlight ? 'rgba(255,255,255,.55)' : 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {c.descripcion}
                  </p>
                  <ul className="space-y-2.5 flex-1 mb-7">
                    {c.beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: c.highlight ? 'rgba(217,94,42,.2)' : 'var(--terra-pale)' }}>
                          <Check className="w-3 h-3" style={{ color: 'var(--terra)' }} />
                        </div>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', lineHeight: 1.5, color: c.highlight ? 'rgba(255,255,255,.7)' : 'var(--text-secondary)' }}>
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
      <section style={{ background: 'var(--paper-2)', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-4 justify-center">Descuentos incluidos</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1 }}>
              200+ establecimientos
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>en Valencia y España.</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DESCUENTOS.map((cat) => (
              <div key={cat.categoria} className="card-base p-6" style={{ borderRadius: 'var(--radius-lg)' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>
                  {cat.categoria}
                </p>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--terra)' }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: 'var(--text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to get it */}
      <section style={{ background: 'var(--paper)', padding: '5rem 0' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-eyebrow mb-4 justify-center">Cómo conseguirlo</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.15, marginBottom: '2.5rem' }}>
            Pásate por la{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>oficina púrpura</em>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon: <MapPin className="w-5 h-5" style={{ color: 'var(--terra)' }} />, title: 'Ubicación', text: 'Calle Ramón Llull 21 bajo, Valencia (46021)' },
              { icon: <Clock className="w-5 h-5" style={{ color: 'var(--terra)' }} />, title: 'Horario', text: 'Lunes a viernes · 10:00 – 18:00' },
              { icon: <Check className="w-5 h-5" style={{ color: 'var(--terra)' }} />, title: 'Requisito', text: 'Trae tu carnet de estudiante o pasaporte' },
            ].map((s) => (
              <div key={s.title} className="card-base p-5" style={{ borderRadius: 'var(--radius-lg)' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: 'var(--terra-pale)' }}>
                  {s.icon}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '.9375rem', color: 'var(--ink)', marginBottom: '.4rem' }}>{s.title}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{s.text}</p>
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
    </main>
  );
}
