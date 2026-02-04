import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Homeowner, Delhi',
    content:
      "Switching to Voltiq's lithium inverter was the best decision for our home. We haven't faced a single power outage issue in over a year. The smart app control is incredibly convenient!",
    rating: 5,
    avatar: 'RS',
  },
  {
    name: 'Priya Patel',
    role: 'Office Manager, Mumbai',
    content:
      "Voltiq installed a complete solar solution for our office building. Our electricity bills dropped by 60%, and the after-sales support has been exceptional. Highly recommended!",
    rating: 5,
    avatar: 'PP',
  },
  {
    name: 'Amit Gupta',
    role: 'Factory Owner, Pune',
    content:
      "For our manufacturing unit, we needed reliable, high-capacity energy storage. Voltiq delivered a custom solution that handles our peak loads seamlessly. The 24/7 support gives us peace of mind.",
    rating: 5,
    avatar: 'AG',
  },
];

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
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
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our valued customers 
              have to say about their experience with Voltiq Energy.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className={cn(
                  'relative overflow-hidden border-0 shadow-lg card-hover bg-background',
                  'transition-all duration-500',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-8">
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 text-primary/10">
                    <Quote className="w-12 h-12" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
