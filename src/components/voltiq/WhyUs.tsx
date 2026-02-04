import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { 
  Gauge, 
  Clock, 
  Leaf, 
  HeadphonesIcon, 
  Shield, 
  PhoneCall 
} from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'High Efficiency',
    description: 'Our systems deliver up to 98% conversion efficiency, maximizing your energy savings.',
  },
  {
    icon: Clock,
    title: 'Long Life',
    description: 'Built to last with 10+ year lifespan lithium batteries and durable components.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Clean energy solutions that reduce your carbon footprint and protect the environment.',
  },
  {
    icon: HeadphonesIcon,
    title: 'After-Sales Support',
    description: 'Dedicated support team ready to assist with installation, maintenance, and queries.',
  },
  {
    icon: Shield,
    title: '5-Year Warranty',
    description: 'Comprehensive warranty options covering parts, labor, and performance guarantees.',
  },
  {
    icon: PhoneCall,
    title: '24/7 Service',
    description: 'Round-the-clock emergency support ensuring your power never goes out for long.',
  },
];

export function WhyUs() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The <span className="gradient-text">Voltiq Advantage</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine cutting-edge technology with exceptional service to deliver 
              power solutions you can rely on, day after day.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  'group bg-background rounded-2xl p-8 shadow-lg card-hover',
                  'transition-all duration-500',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
