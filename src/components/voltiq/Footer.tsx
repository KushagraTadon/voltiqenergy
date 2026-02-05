import { Zap, MessageCircle, Instagram } from 'lucide-react';

const quickLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/917300426820' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/voltiq.energy/' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollToSection('#')}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Voltiq <span className="text-primary">Energy</span>
              </span>
            </button>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering India, One Watt at a Time. We provide smart power solutions 
              including lithium inverters, solar installations, and energy storage 
              systems for a sustainable future.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted-foreground/20 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="tel:+917300426820" className="hover:text-primary transition-colors">
                  +91 73004 26820
                </a>
              </li>
              <li>
                <a href="tel:+917014447232" className="hover:text-primary transition-colors">
                  +91 70144 47232
                </a>
              </li>
              <li>
                <a href="mailto:voltiqenergyinfra@gmail.com" className="hover:text-primary transition-colors">
                  voltiqenergyinfra@gmail.com
                </a>
              </li>
              <li>
                5th Floor, 09, Hansart,<br />
                Gangaram Nagar, New Aatish Market,<br />
                RHB, Mansarovar, Jaipur 302020
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Voltiq Energy. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm italic">
            "Empowering India, One Watt at a Time"
          </p>
        </div>
      </div>
    </footer>
  );
}
