import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Target, Lightbulb, Leaf } from 'lucide-react';

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              About Us
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Empowering India with{' '}
              <span className="gradient-text">Sustainable Energy</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                At Voltiq Energy, we believe that reliable, clean energy should be accessible to everyone. 
                Founded with a vision to transform how India powers its homes and businesses, we specialize 
                in next-generation lithium inverter systems, solar installations, and commercial-grade 
                energy storage solutions.
              </p>
              <p>
                Our team of certified engineers and energy consultants work tirelessly to deliver 
                customized power solutions that maximize efficiency while minimizing environmental impact. 
                From compact home inverters to large-scale industrial setups, we ensure uninterrupted 
                power supply with cutting-edge technology.
              </p>
              <p>
                With a commitment to quality, innovation, and customer satisfaction, Voltiq Energy 
                is your trusted partner in the transition to a smarter, greener future.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-background rounded-2xl p-6 shadow-lg card-hover">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    Making sustainable energy accessible and affordable for every Indian household and business.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-primary-foreground">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-sm opacity-90">Years of Experience</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-6 text-primary-foreground">
                  <div className="text-4xl font-bold mb-2">50MW+</div>
                  <div className="text-sm opacity-90">Solar Installed</div>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-lg card-hover">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Using the latest technology to deliver superior energy solutions.
                  </p>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-lg card-hover">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Eco-Friendly</h3>
                  <p className="text-sm text-muted-foreground">
                    Committed to reducing carbon footprint with clean energy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
