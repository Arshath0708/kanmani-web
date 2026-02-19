import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-2">KANMANI</h3>
            <p className="text-xs tracking-[0.3em] text-gold mb-4">READYMADES</p>
            <p className="font-tamil text-gold/80 text-sm italic">
              "உங்கள் குடும்பத்தின் நம்பிக்கைக்குரிய ஆடை மையம்"
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">Your Family's Trusted Fashion Destination</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Collections", path: "/collections" },
                { label: "Offers", path: "/offers" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">Collections</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span>Silk Sarees</span>
              <span>Cotton Sarees</span>
              <span>Salwar Sets</span>
              <span>Men's Wear</span>
              <span>Kids Party Wear</span>
              <span>Wedding Collections</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">Visit Us</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>45A, Nethaji Rd, Periyar, Madurai Main, Madurai, Tamil Nadu 625001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:8428858856" className="hover:text-gold transition-colors">8428858856</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:a.arshathabdulla@gmail.com" className="hover:text-gold transition-colors text-xs">
                  a.arshathabdulla@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Kanmani Readymades. All rights reserved. | Serving Madurai with Pride
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
