import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Battery, Sun, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: Zap,
    title: 'Lithium Inverters',
    description: 'High-performance inverters for homes and offices with long backup and smart control.',
    features: [
      'Long battery life (10+ years)',
      'Smart mobile app control',
      'Silent operation',
      'Fast charging technology',
    ],
    gradient: 'from-primary to-voltiq-green-light',
  },
  {
    icon: Sun,
    title: 'Solar Solutions',
    description: 'Rooftop solar installation and on-grid/off-grid systems for maximum energy independence.',
    features: [
      'Custom rooftop design',
      'On-grid & off-grid options',
      'Net metering support',
      'Government subsidy assistance',
    ],
    gradient: 'from-secondary to-voltiq-blue-light',
  },
  {
    icon: Battery,
    title: 'Energy Storage',
    description: 'Custom battery and inverter setups for large commercial or industrial applications.',
    features: [
      'Scalable capacity',
      'Industrial-grade reliability',
      'Peak shaving solutions',
      '24/7 monitoring system',
    ],
    gradient: 'from-primary to-secondary',
  },
];

export function Solutions() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="py-20 lg:py-32 bg-background">
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
              Our Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Complete <span className="gradient-text">Energy Solutions</span> for Every Need
            </h2>
            <p className="text-lg text-muted-foreground">
              From compact home systems to large-scale industrial setups, we provide 
              tailored power solutions that combine efficiency, reliability, and sustainability.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={solution.title}
                className={cn(
                  'group relative overflow-hidden border-0 shadow-lg card-hover bg-background',
                  'transition-all duration-500',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient top border */}
                <div className={cn('h-1 bg-gradient-to-r', solution.gradient)} />
                
                <CardHeader className="pb-4">
                  <div
                    className={cn(
                      'w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
                      solution.gradient
                    )}
                  >
                    <solution.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    onClick={scrollToContact}
                    className="w-full group/btn text-primary hover:text-primary hover:bg-primary/10"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
