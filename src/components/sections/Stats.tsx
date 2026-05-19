import { STATS } from '@/data/content';

export default function Stats() {
  return (
    <section id="stats" className="py-16 lg:py-20" style={{ background: 'var(--paper)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--border)' }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="group px-10 py-12 text-center transition-colors duration-300 hover:bg-[var(--terra-pale)]"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <p
                className="num-stat group-hover:text-[var(--terra)] transition-colors duration-300"
                style={{ fontSize: 'clamp(2.25rem,4vw,3.5rem)', color: 'var(--ink)', lineHeight: 1 }}
              >
                {s.value}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '.9375rem', color: 'var(--text-secondary)', marginTop: '.75rem' }}>
                {s.label}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '.75rem', color: 'var(--text-muted)', marginTop: '.35rem', lineHeight: 1.5 }}>
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
