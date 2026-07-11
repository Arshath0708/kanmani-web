import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Explore Store", path: "/explore" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-gray-100 text-foreground animate-fade-in"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col group select-none">
          <span
            className={`text-2xl md:text-3xl font-heading font-extrabold tracking-wider transition-colors duration-500 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            KANMANI
          </span>
          <span className="text-[10px] md:text-xs font-body text-gold font-bold tracking-[0.4em] -mt-1 group-hover:text-gold-light transition-colors">
            READYMADES
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.label}
                to={link.path}
                className={`relative font-body text-xs font-semibold tracking-widest uppercase transition-colors duration-300 py-1 border-b-2 ${
                  isActive
                    ? "border-gold text-gold"
                    : scrolled
                    ? "border-transparent text-foreground/80 hover:text-primary hover:border-primary/20"
                    : "border-transparent text-white/90 hover:text-gold hover:border-gold/20"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Actions (Socials) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.instagram.com/kanmani_readymades/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-300 hover:scale-110 p-2 rounded-full ${
              scrolled
                ? "text-foreground/80 hover:text-primary hover:bg-secondary"
                : "text-white/90 hover:text-gold hover:bg-white/10"
            }`}
            aria-label="Instagram Profile"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="https://www.instagram.com/kanmani_readymades/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform duration-300 hover:scale-110 p-2 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Instagram Profile"
          >
            <Instagram size={20} />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-fade-in text-foreground">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`font-body text-sm font-bold tracking-widest uppercase py-2 border-b border-gray-50 transition-colors ${
                    isActive ? "text-gold" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

