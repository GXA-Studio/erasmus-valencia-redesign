import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Pisos from '@/components/sections/Pisos';
import Servicios from '@/components/sections/Servicios';
import Carnet from '@/components/sections/Carnet';
import Viajes from '@/components/sections/Viajes';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Servicios />
      <Pisos />
      <Carnet />
      <Viajes />
      <Testimonials />
      <Newsletter />
    </>
  );
}
