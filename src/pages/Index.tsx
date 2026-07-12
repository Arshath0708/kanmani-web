import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  ShieldCheck,
  IndianRupee,
  Store,
  BadgeCheck,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import SEO from "@/components/SEO";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.kanmanireadymades.in/#website",
    "url": "https://www.kanmanireadymades.in",
    "name": "Kanmani Readymades",
    "description": "Premium Quality Clothing for Men, Women & Kids at Affordable Prices in Madurai.",
    "publisher": {
      "@id": "https://www.kanmanireadymades.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.kanmanireadymades.in/#organization",
    "name": "Kanmani Readymades",
    "url": "https://www.kanmanireadymades.in",
    "logo": "https://www.kanmanireadymades.in/apple-touch-icon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8428858856",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    },
    "sameAs": [
      "https://www.instagram.com/kanmani_readymades/"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": "https://www.kanmanireadymades.in/#clothingstore",
    "name": "Kanmani Readymades",
    "image": "https://www.kanmanireadymades.in/apple-touch-icon.png",
    "url": "https://www.kanmanireadymades.in",
    "telephone": "+918428858856",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "45A, Nethaji Rd, Periyar, Madurai Main",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "625001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.9166739,
      "longitude": 78.1136004
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/kanmani_readymades/"
    ]
  }
];


import heroBanner from "@/assets/hero-banner.png";
import categoryWomen from "@/assets/category-women.jpg";
import festiveBanner from "@/assets/festive-banner.jpg";

const testimonials = [
  { name: "Priya Lakshmi", text: "Best saree collection in Madurai! Excellent premium silk quality at prices that actually fit our budget. The staff is exceptionally welcoming.", rating: 5 },
  { name: "Ravi Kumar", text: "Fantastic selection of formal and casual shirts. We shop here for the whole family every Diwali. Truly the most affordable showroom in town.", rating: 5 },
  { name: "Meena Sundari", text: "Kanmani Readymades has been our family's trusted store for over two decades. The kids' festive wear is durable and beautiful.", rating: 5 },
];

// Interactive statistic counter helper
const StatCounter = ({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1800; // ms
    const increment = Math.ceil(target / (duration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, hasStarted]);

  return (
    <div ref={containerRef} className="text-center p-8 glass-card rounded-2xl border border-white/10 hover-lift">
      <span className="block font-heading text-4xl md:text-5xl font-extrabold text-gold tracking-tight mb-2">
        {count}{suffix}
      </span>
      <span className="block text-xs font-body font-bold text-white/80 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
};

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <main className="bg-[#FAFAFA] text-foreground overflow-x-hidden page-transition">
      <SEO
        title="Kanmani Readymades | Best Family Clothing Store in Madurai"
        description="Kanmani Readymades is Madurai's trusted family clothing store. Explore premium silk sarees, men's wear, kids' wear & wedding collections at affordable prices."
        keywords="Kanmani Readymades, Readymades Shop in Madurai, Best Clothing Store in Madurai, Family Clothing Store, Traditional Wear Madurai, Men's Wear Madurai, Women's Wear Madurai, Kids Wear Madurai"
        canonicalPath="/"
        schema={homeSchema}
        preloadImages={[heroBanner]}
      />
      
      {/* 1. Premium Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            alt="Premium fashion collection banner at Kanmani Readymades Madurai"
            className="w-full h-full object-cover scale-105"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          {/* Subtle Dark Premium Overlay */}
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-32 md:py-48 flex justify-start items-center">
          <div className="max-w-3xl text-left animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs uppercase tracking-widest font-body font-bold mb-6">
              <Sparkles size={12} /> Family Clothing Showroom
            </span>
            <p className="font-tamil text-gold text-lg md:text-2xl mb-4 font-medium tracking-wide">
              வண்ணமயமான ரகங்களுக்கு கண்மணி ரெடிமேட்ஸ்
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight">
              Fashion for Every<br />
              <span className="gold-text">Generation</span>
            </h1>
            <p className="text-white/80 font-body text-base md:text-lg lg:text-xl mb-10 max-w-xl leading-relaxed">
              Premium Quality Clothing for Men, Women & Kids at Affordable Prices. Trusted by families in Madurai for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 gold-gradient text-foreground font-body font-bold text-sm tracking-widest uppercase rounded-full shadow-lg hover:shadow-gold/20 hover:scale-[1.03] transition-all duration-300"
              >
                Explore Our Store <ArrowRight size={16} />
              </Link>
              <a
                href="https://chat.whatsapp.com/Bm38uRwXixgDqAUdpaFfGt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 glass-btn text-white font-body font-semibold text-sm tracking-widest uppercase rounded-full"
              >
                Join Fashion Updates
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-pulse select-none pointer-events-none">
          <span className="text-[10px] tracking-[0.35em] uppercase font-bold">Scroll</span>
          <div className="w-1.5 h-6 rounded-full border border-white/35 flex justify-center items-start p-0.5">
            <div className="w-1 h-1.5 rounded-full bg-white animate-bounce" />
          </div>
        </div>
      </section>

      {/* Visual Trust Indicator Ribbon */}
      <section className="py-6 bg-white border-y border-gray-100 shadow-sm relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-center text-xs font-body font-bold text-foreground/80 tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <BadgeCheck size={16} className="text-gold shrink-0" /> GST Certified Business
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck size={16} className="text-gold shrink-0" /> Family Fashion Store
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck size={16} className="text-gold shrink-0" /> Affordable Pricing
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck size={16} className="text-gold shrink-0" /> Premium Quality Products
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Vision Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={festiveBanner}
            alt="Elegance vision cover - Kanmani Readymades family clothing showroom"
            className="w-full h-full object-cover scale-105"
            loading="lazy"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-[#3d0f1a]/85 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Visual Frame */}
            <div className="md:col-span-5 relative flex justify-center md:justify-start">
              <div className="w-64 h-80 rounded-2xl overflow-hidden relative shadow-2xl border-4 border-gold/45 z-10 scale-95 hover:scale-100 transition-transform duration-500">
                <img
                  src={categoryWomen}
                  alt="Traditional fashion visual - Women's wear collection at Kanmani Readymades"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="256"
                  height="320"
                />
              </div>
              <div className="absolute top-10 left-10 md:-left-4 w-64 h-80 rounded-2xl bg-white/5 border border-white/10 z-0" />
            </div>

            {/* Emotional Content */}
            <div className="md:col-span-7 text-white text-left flex flex-col gap-6">
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-gold">The Soul of Kanmani</span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-wide">
                Our Vision
              </h2>
              <div className="w-12 h-0.5 bg-gold" />
              <p className="font-tamil text-xl text-gold-light italic tracking-wide leading-relaxed">
                "நம்பிக்கை நாணயம் தரம், என்றும் எங்களது லட்சியம்"
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-white/90">
                At Kanmani Readymades, we believe every family deserves quality clothing without paying premium prices. Our vision is to make stylish, comfortable, and durable fashion affordable for everyone while maintaining trust, honesty, and customer satisfaction in every purchase.
              </p>
              <div className="flex gap-6 mt-2">
                <div className="flex flex-col gap-0.5">
                  <span className="font-tamil text-gold font-bold text-sm">20+ ஆண்டுகள்</span>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider">Madurai Loyalty</span>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-tamil text-gold font-bold text-sm">100% நேர்மை</span>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider">Business Ethics</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Business Highlights Section */}
      <section className="py-20 bg-[#2b0a12] text-white relative z-10 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            
            {/* Counter 1 */}
            <StatCounter target={1000} suffix="+" label="Happy Customers" />
            
            {/* Counter 2 */}
            <StatCounter target={100} suffix="+" label="New Arrivals" />
            
            {/* Feature 3: Affordable */}
            <div className="text-center p-8 glass-card rounded-2xl border border-white/10 hover-lift flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <IndianRupee size={22} className="text-gold" />
              </div>
              <span className="block text-xs font-body font-bold text-white/80 uppercase tracking-widest leading-relaxed">
                Affordable Prices
              </span>
            </div>

            {/* Feature 4: GST Certified */}
            <div className="text-center p-8 glass-card rounded-2xl border border-white/10 hover-lift flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <BadgeCheck size={22} className="text-gold" />
              </div>
              <span className="block text-xs font-body font-bold text-white/80 uppercase tracking-widest leading-relaxed">
                GST Certified
              </span>
            </div>

            {/* Feature 5: Family Trusted */}
            <div className="text-center p-8 glass-card rounded-2xl border border-white/10 hover-lift flex flex-col items-center justify-center col-span-2 md:col-span-1">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <Store size={22} className="text-gold" />
              </div>
              <span className="block text-xs font-body font-bold text-white/80 uppercase tracking-widest leading-relaxed">
                Family Trusted Store
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Customer Testimonials Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-gold block mb-3">Customer Love</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Family Testimonials
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto" />
          </div>

          {/* Scrolling Carousel Viewport */}
          <div className="relative max-w-4xl mx-auto overflow-hidden px-4">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="w-full shrink-0 px-2 md:px-4">
                  <div className="bg-[#FAFAFA] border border-gray-100 rounded-3xl p-8 md:p-12 text-center hover:shadow-lg transition-all duration-300 relative">
                    {/* Glowing Accent */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 gold-gradient rounded-b-full" />
                    
                    {/* Five Stars */}
                    <div className="flex justify-center gap-1.5 mb-6">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={18} className="text-gold fill-gold" />
                      ))}
                    </div>

                    <p className="text-foreground/90 font-body text-base md:text-xl italic leading-relaxed mb-8 max-w-2xl mx-auto">
                      "{t.text}"
                    </p>

                    <h3 className="font-heading text-gold font-bold text-sm uppercase tracking-widest">
                      {t.name}
                    </h3>
                    <span className="text-[10px] text-muted-foreground uppercase font-body mt-1 block tracking-wider">
                      Verified Purchaser • Madurai
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Left/Right Action Arrows */}
            <button
              onClick={() => setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-150 flex items-center justify-center shadow-md hover:bg-gold hover:text-white transition-colors duration-250 z-10 shrink-0"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setActiveTestimonial((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-150 flex items-center justify-center shadow-md hover:bg-gold hover:text-white transition-colors duration-250 z-10 shrink-0"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === idx ? "bg-gold w-8" : "bg-gray-200 w-2.5"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={festiveBanner}
            alt="CTA backdrop - Kanmani Readymades customer invitation showroom banner"
            className="w-full h-full object-cover scale-105"
            loading="lazy"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d0f1a] via-[#661a2d] to-[#a37c3f]/90 opacity-95" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight">
            Ready to Upgrade<br />Your Wardrobe?
          </h2>
          <p className="text-white/80 font-body text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Experience premium quality fashion clothes for every member of your family at local, unbeatable Madurai prices. Visit our physical showroom today or contact us on WhatsApp!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-body font-bold text-sm tracking-widest uppercase rounded-full hover:bg-gold hover:text-foreground hover:scale-[1.03] transition-all duration-300 shadow-xl"
            >
              Visit Store
            </Link>
            <a
              href="https://chat.whatsapp.com/Bm38uRwXixgDqAUdpaFfGt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 glass-btn text-white font-body font-semibold text-sm tracking-widest uppercase rounded-full"
            >
              Join Our Fashion Community
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Index;
