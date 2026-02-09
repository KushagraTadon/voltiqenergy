import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

// WhatsApp SVG icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: ['+91 73004 26820', '+91 70144 47232'],
    href: 'tel:+917300426820',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@voltiqenergy.in',
    href: 'mailto:info@voltiqenergy.in',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '5th Floor, 09, Hansart, Gangaram Nagar, New Aatish Market, RHB, Mansarovar, Jaipur, Rajasthan 302020',
    href: 'https://maps.google.com',
  },
];

const socialLinks = [
  { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/917300426820' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/voltiq.energy/', isLucide: true },
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
                    <div className="text-muted-foreground text-sm">
                      {Array.isArray(item.value) ? (
                        item.value.map((v, i) => (
                          <div key={i}>{v}</div>
                        ))
                      ) : (
                        item.value
                      )}
                    </div>
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
                      {'isLucide' in social && social.isLucide ? (
                        <social.icon className="w-5 h-5" />
                      ) : (
                        <social.icon className="w-5 h-5" />
                      )}
                    </a>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg"
                >
                  <a href="tel:+917300426820">
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
