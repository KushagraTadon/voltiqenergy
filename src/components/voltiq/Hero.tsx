import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Sun, Battery } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/3 to-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <Zap className="w-4 h-4" />
              Smart Energy Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Powering a{' '}
              <span className="gradient-text">Smarter, Greener</span>{' '}
              Future
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Voltiq Energy delivers advanced lithium inverter, solar, and storage solutions 
              for homes, offices, and industries. Experience uninterrupted power with 
              cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
              >
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
              >
                Explore Solutions
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">5yr</div>
                <div className="text-sm text-muted-foreground">Warranty Options</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex justify-center items-center relative animate-fade-in animation-delay-400">
            <div className="relative w-96 h-96">
              {/* Central circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-pulse" />
              <div className="absolute inset-8 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full" />
              <div className="absolute inset-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl">
                <Zap className="w-20 h-20 text-primary-foreground" />
              </div>
              
              {/* Orbiting icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-background shadow-lg rounded-2xl p-4 animate-float">
                <Sun className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute bottom-8 left-0 -translate-x-4 bg-background shadow-lg rounded-2xl p-4 animate-float animation-delay-200">
                <Battery className="w-8 h-8 text-secondary" />
              </div>
              <div className="absolute bottom-8 right-0 translate-x-4 bg-background shadow-lg rounded-2xl p-4 animate-float animation-delay-400">
                <Zap className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
