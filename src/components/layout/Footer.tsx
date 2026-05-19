import Link from 'next/link';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { BRAND, NAV } from '@/data/content';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,.6)' }}>
      {/* CTA strip */}
      <div className="py-14" style={{ background: 'var(--terra)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.875rem', fontWeight: 700, color: '#fff', marginBottom: '.5rem' }}>
              ¿Buscas piso en Valencia?
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,.75)', fontSize: '1rem', lineHeight: 1.65 }}>
              Sin comisiones de agencia. Respuesta en menos de 2 horas.
            </p>
          </div>
          <a
            href={`${BRAND.whatsappLink}?text=Hola!%20Busco%20piso%20en%20Valencia%20para%20mi%20Erasmus`}
            target="_blank" rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-px"
            style={{ background: '#fff', color: 'var(--terra)', fontFamily: 'var(--font-body)' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Escribirnos por WhatsApp
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'var(--terra)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '1.125rem' }}>E</span>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', fontSize: '1rem' }}>Erasmus Life</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '.625rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)' }}>Valencia · desde 2007</p>
            </div>
          </div>
          <p style={{ fontSize: '.9375rem', lineHeight: 1.8, fontFamily: 'var(--font-body)' }}>
            La comunidad de estudiantes internacionales más grande de Valencia.
            Con sedes en 7 ciudades españolas.
          </p>
          <p style={{ fontSize: '.75rem', marginTop: '1rem', color: 'rgba(255,255,255,.3)', fontFamily: 'var(--font-body)' }}>CIF: {BRAND.cif}</p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: '1.25rem' }}>Servicios</h4>
          <ul className="space-y-2.5">
            {[
              ['Pisos y Habitaciones', '/pisos'],
              ['Actividades', '/actividades'],
              ['Viajes', '/viajes'],
              ['Fiestas', '/fiestas'],
              ['Carnet Erasmus Life', '/carnet'],
              ['Descuentos Valencia', '/descuentos'],
              ['Jobs & Internships', '/trabajo'],
            ].map(([l, h]) => (
              <li key={h}>
                <Link href={h} className="text-sm transition-colors hover:text-white" style={{ fontFamily: 'var(--font-body)' }}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: '1.25rem' }}>Descubre Valencia</h4>
          <ul className="space-y-2.5">
            {[
              ['Historia', '/valencia/historia'],
              ['Universidades', '/valencia/universidades'],
              ['Transportes', '/valencia/transportes'],
              ['Gastronomía', '/valencia/gastronomia'],
              ['Festivales', '/valencia/festivales'],
              ['Museos', '/valencia/museos'],
            ].map(([l, h]) => (
              <li key={h}>
                <Link href={h} className="text-sm transition-colors hover:text-white" style={{ fontFamily: 'var(--font-body)' }}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '.6875rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: '1.25rem' }}>Contacto</h4>
          <ul className="space-y-4">
            {[
              { Icon: MapPin, text: BRAND.address },
              { Icon: Phone, text: BRAND.phone },
              { Icon: Mail, text: BRAND.email },
              { Icon: Clock, text: BRAND.hours },
            ].map(({ Icon, text }, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(255,255,255,.06)' }}>
                  <Icon className="w-3.5 h-3.5" style={{ color: 'var(--terra)' }} />
                </div>
                <span style={{ fontSize: '.875rem', fontFamily: 'var(--font-body)', lineHeight: 1.55 }}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,.07)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: '.75rem', fontFamily: 'var(--font-body)' }}>© {new Date().getFullYear()} Erasmus Life Valencia. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            {[['Privacidad', '/privacidad'], ['Cookies', '/cookies'], ['Términos', '/terminos']].map(([l, h]) => (
              <Link key={h} href={h} className="text-xs transition-colors hover:text-white" style={{ fontFamily: 'var(--font-body)' }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
