import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = 2026; // Set to 2026 to match prompt requirements

  return (
    <footer className="maroon-gradient text-white border-t border-maroon-light/20 relative z-20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Column 1: Brand & Vision */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-heading font-extrabold tracking-wider">
                KANMANI
              </h3>
              <p className="text-xs font-body text-gold font-bold tracking-[0.4em] -mt-1">
                READYMADES
              </p>
            </div>
            
            <div className="border-l-2 border-gold/40 pl-4 py-1">
              <h4 className="text-xs font-body uppercase text-gold font-bold tracking-widest mb-1">
                Our Vision
              </h4>
              <p className="font-tamil text-sm text-white/95 leading-relaxed">
                "குறைந்த விலையில் சிறந்த தரம்"
              </p>
              <p className="font-body text-xs text-white/80 mt-1 italic">
                Providing Quality Dresses at the Lowest Possible Price.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/kanmani_readymades_madurai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-gold hover:border-gold hover:bg-white/5 transition-all duration-300 hover:scale-105"
                aria-label="Instagram Profile"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://chat.whatsapp.com/Bm38uRwXixgDqAUdpaFfGt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-green-400 hover:border-green-400 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                aria-label="Join Fashion Updates Group"
                title="Join Fashion Updates Group"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-8">
            <h4 className="font-heading text-lg font-bold mb-6 text-gold tracking-wide">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 font-body text-sm text-white/70">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Explore Store", path: "/explore" },
                { label: "Why Choose Us", path: "/why-choose-us" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="hover:text-gold transition-colors duration-250 w-fit hover:translate-x-1 transform transition-transform"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-heading text-lg font-bold mb-4 text-gold tracking-wide">
                Visit Us
              </h4>
              <div className="flex flex-col gap-3 font-body text-sm text-white/70">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-gold mt-1 shrink-0" />
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=45A,+Nethaji+Rd,+Periyar,+Madurai+Main,+Madurai,+Tamil+Nadu+625001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors duration-250 leading-relaxed"
                  >
                    45A, Nethaji Rd, Periyar, Madurai Main, Madurai, Tamil Nadu 625001
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gold shrink-0" />
                  <a href="tel:8428858856" className="hover:text-gold transition-colors">
                    8428858856
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gold shrink-0" />
                  <a href="mailto:a.arshathabdulla@gmail.com" className="hover:text-gold transition-colors text-xs truncate">
                    a.arshathabdulla@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom copyright row */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center font-body text-xs text-white/50">
          <p className="mb-3 text-gold font-semibold tracking-widest text-[11px] uppercase">
            Fair Pricing • Equal for Every Customer • GST Certified
          </p>
          <p>© {currentYear} Kanmani Readymades. All Rights Reserved.</p>
          <p className="mt-0.5 text-[10px] tracking-wide text-white/30">
            Premium fashion at local family values.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

