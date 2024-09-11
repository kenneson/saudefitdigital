// pages/index.tsx
import Hero from '@/app/components/Hero';
import Benefits from '@/app/components/Benefits';
import Testimonials from '@/app/components/depoimentos';
import About from '@/app/components/about';
import Footer from '@/app/components/footer';
import EbookForm from './components/forms';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Testimonials />
      <About />
      <EbookForm />
      <Footer />
    </div>
  );
};

export default HomePage;
