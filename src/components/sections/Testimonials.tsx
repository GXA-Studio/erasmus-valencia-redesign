import { TESTIMONIALS, STATS } from '@/data/content';

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--ink)', overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* Left: headline + stats */}
          <div>
            <p className="section-eyebrow mb-7" style={{ color: 'rgba(255,255,255,.35)' }}>
              <span style={{ background: 'rgba(255,255,255,.2)', height: '2px', width: '2rem', display: 'inline-block', borderRadius: '1px' }} />
              Lo dicen ellos
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '2.5rem' }}>
              Más de{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--terra)' }}>50.000</em>
              <br />
              estudiantes
              <br />
              desde 2007.
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5" fill="var(--gold)" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', fontStyle: 'italic', color: '#fff' }}>4.9</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: 'rgba(255,255,255,.4)' }}>valoración media</span>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                ['98%', 'Recomendarían Erasmus Life'],
                ['2h', 'Tiempo medio de respuesta'],
                ['7', 'Ciudades en España'],
                ['2007', 'Año de fundación'],
              ].map(([v, l]) => (
                <div key={l} className="px-6 py-6 rounded-xl" style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)' }}>
                  <p className="num-stat" style={{ fontSize: '1.75rem', color: '#fff', lineHeight: 1 }}>{v}</p>
                  <p className="mt-2 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '.875rem', color: 'rgba(255,255,255,.4)' }}>{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: testimonial cards */}
          <div className="grid sm:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl flex flex-col ${i === 1 ? 'sm:mt-10' : ''}`}
                style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)' }}
              >
                {/* Quote */}
                <p className="leading-loose mb-6 max-w-prose" style={{ fontFamily: 'var(--font-body)', fontSize: '.9375rem', color: 'rgba(255,255,255,.6)', flex: 1, fontStyle: 'italic' }}>
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'var(--terra)', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', fontSize: '.9375rem' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '.9375rem', color: '#fff' }}>
                      {t.name} {t.flag}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.8125rem', color: 'rgba(255,255,255,.4)', marginTop: '.15rem' }}>
                      {t.uni}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.75rem', color: 'rgba(217,94,42,.7)', marginTop: '.1rem' }}>
                      {t.semester}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
