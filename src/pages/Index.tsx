import { Navbar } from '@/components/voltiq/Navbar';
import { Hero } from '@/components/voltiq/Hero';
import { About } from '@/components/voltiq/About';
import { Solutions } from '@/components/voltiq/Solutions';
import { WhyUs } from '@/components/voltiq/WhyUs';
import { Testimonials } from '@/components/voltiq/Testimonials';
import { Contact } from '@/components/voltiq/Contact';
import { Footer } from '@/components/voltiq/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
