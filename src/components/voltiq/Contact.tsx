import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Linkedin,
  Instagram,
  Facebook
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@voltiqenergy.com',
    href: 'mailto:hello@voltiqenergy.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Energy Park, Sector 15, Gurugram, Haryana 122001',
    href: 'https://maps.google.com',
  },
];

const socialLinks = [
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919876543210' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/voltiqenergy' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/voltiqenergy' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/voltiqenergy' },
];

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
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
              Contact Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="gradient-text">Go Green</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get in touch with our energy experts for a free consultation. 
              We'll help you find the perfect power solution for your needs.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-3xl shadow-xl p-8 lg:p-12">
              {/* Contact Info Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'Address' ? '_blank' : undefined}
                    rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                    className={cn(
                      'group flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50 hover:bg-primary/10 transition-all duration-300',
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="font-semibold text-foreground mb-1">{item.label}</div>
                    <div className="text-muted-foreground text-sm">{item.value}</div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-col items-center">
                <p className="text-muted-foreground mb-4">Connect with us on social media</p>
                <div className="flex gap-4 mb-8">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg"
                >
                  <a href="tel:+919876543210">
                    <Phone className="w-5 h-5 mr-2" />
                    Get a Free Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
