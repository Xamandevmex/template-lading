import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { defaultConfig } from '@/config/landing.config';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero 
        config={defaultConfig.hero} 
        productName={defaultConfig.product.name}
      />
      <Features config={defaultConfig.features} />
      <Benefits config={defaultConfig.benefits} />
      <Testimonials config={defaultConfig.testimonials} />
      <FinalCTA config={defaultConfig.finalCta} />
      <Footer 
        config={{
          product: defaultConfig.product,
          links: defaultConfig.links,
        }}
      />
    </main>
  );
}

