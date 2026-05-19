import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Erasmus Life Valencia — Pisos, Actividades y Carnet para Estudiantes',
    template: '%s · Erasmus Life Valencia',
  },
  description: 'La asociación de estudiantes internacionales más grande de Valencia. Pisos sin comisiones, actividades semanales, viajes por España y carnet de descuentos desde 2007.',
  keywords: ['erasmus valencia', 'pisos estudiantes valencia', 'habitaciones erasmus', 'carnet erasmus', 'actividades erasmus valencia'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Erasmus Life Valencia',
    title: 'Erasmus Life Valencia — La comunidad Erasmus desde 2007',
    description: 'Pisos verificados, actividades semanales, viajes y carnet de descuentos para estudiantes internacionales en Valencia.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700;1,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
