'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV, BRAND } from '@/data/content';
import clsx from 'clsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Home renders the mesh-bg hero directly under the navbar; everywhere else
  // sits over var(--paper), where white text vanishes. Force a solid bar off-home.
  const isHome = pathname === '/';
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openSub = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveSub(label);
  };
  const closeSub = () => {
    timeoutRef.current = setTimeout(() => setActiveSub(null), 160);
  };

  return (
    <>
      <header className={clsx(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        solid
          ? 'bg-[var(--ink)]/95 backdrop-blur-xl shadow-2xl shadow-black/20'
          : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-lg bg-[var(--terra)] flex items-center justify-center shadow-[var(--shadow-terra)] group-hover:scale-105 transition-transform">
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '1.125rem', lineHeight: 1 }}>E</span>
            </div>
            <div className="leading-none">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: '-.02em' }}>Erasmus Life</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '.625rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginTop: '1px' }}>Valencia</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.sub && openSub(item.label)}
                onMouseLeave={() => item.sub && closeSub()}
              >
                {item.accent ? (
                  <Link href={item.href} className="btn btn-terra btn-sm" style={{ borderRadius: '8px' }}>
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 hover:bg-white/10"
                    style={{ color: 'rgba(255,255,255,.8)', fontFamily: 'var(--font-body)' }}
                  >
                    {item.label}
                    {item.sub && <ChevronDown className={clsx('w-3.5 h-3.5 transition-transform duration-200', activeSub === item.label && 'rotate-180')} />}
                  </Link>
                )}

                {item.sub && activeSub === item.label && (
                  <div
                    className="absolute top-full left-0 pt-3"
                    onMouseEnter={() => openSub(item.label)}
                    onMouseLeave={closeSub}
                  >
                    <div className="bg-white rounded-xl shadow-2xl shadow-black/12 border border-[var(--border)] py-2 min-w-[180px]" style={{ backdropFilter: 'blur(20px)' }}>
                      {item.sub.map((s) => (
                        <Link key={s.href} href={s.href}
                          className="block px-4 py-2.5 text-sm transition-colors hover:bg-[var(--terra-pale)] hover:text-[var(--terra)]"
                          style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href={`${BRAND.whatsappLink}?text=Hola!%20Me%20interesa%20Erasmus%20Life%20Valencia`}
              target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px"
              style={{ background: 'var(--terra)', color: '#fff', fontFamily: 'var(--font-body)' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg transition-colors hover:bg-white/10 cursor-pointer" aria-label="Menú" style={{ color: '#fff' }}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={clsx('lg:hidden transition-all duration-300 overflow-hidden', open ? 'max-h-[500px]' : 'max-h-0')}>
          <div style={{ background: 'var(--ink)', borderTop: '1px solid rgba(255,255,255,.08)' }} className="px-6 py-4 space-y-1">
            {NAV.map((item) => (
              <div key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}
                  className={clsx('block px-4 py-3 rounded-lg text-sm font-medium transition-colors', item.accent ? 'text-[var(--terra)] font-bold' : 'hover:bg-white/8')}
                  style={{ color: item.accent ? 'var(--terra)' : 'rgba(255,255,255,.75)', fontFamily: 'var(--font-body)' }}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <div className="ml-4 space-y-0.5 mt-0.5">
                    {item.sub.map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                        className="block px-4 py-2 text-xs rounded-lg transition-colors hover:bg-white/8"
                        style={{ color: 'rgba(255,255,255,.45)', fontFamily: 'var(--font-body)' }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href={`${BRAND.whatsappLink}?text=Hola!`} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-lg text-sm font-semibold"
              style={{ background: 'var(--terra)', color: '#fff', fontFamily: 'var(--font-body)' }}
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* WhatsApp FAB — único punto del sistema donde se permite el verde marca */}
      <a href={`${BRAND.whatsappLink}?text=Hola!%20Quiero%20saber%20más%20sobre%20Erasmus%20Life%20Valencia`}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200 cursor-pointer"
        style={{ background: 'var(--whatsapp)', boxShadow: '0 8px 32px var(--whatsapp-glow)' }}
        aria-label="WhatsApp"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
