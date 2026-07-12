import heroBanner from "@/assets/hero-banner.png";
import ownerImage from "@/assets/kanmani-readymades-owner.jpg";
import {
  ShieldCheck,
  IndianRupee,
  BadgeCheck,
  Users,
  Compass,
  Target,
  Sparkles,
  Handshake,
} from "lucide-react";
import SEO from "@/components/SEO";

const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.kanmanireadymades.in/about/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.kanmanireadymades.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.kanmanireadymades.in/about"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.kanmanireadymades.in/about/#webpage",
    "url": "https://www.kanmanireadymades.in/about",
    "name": "About Us | Kanmani Readymades Madurai",
    "description": "Learn about the heritage, mission, and co-founders of Kanmani Readymades. Providing quality family fashion at affordable prices in Madurai.",
    "breadcrumb": {
      "@id": "https://www.kanmanireadymades.in/about/#breadcrumb"
    }
  }
];


const About = () => {
  return (
    <main className="bg-[#FAFAFA] text-foreground min-h-screen page-transition">
      <SEO
        title="About Us | Kanmani Readymades Madurai - Family Clothing Legacy"
        description="Learn about the legacy, mission, and co-founders of Kanmani Readymades. Discover why we have been Madurai's trusted family clothing showroom since 2006."
        keywords="About Kanmani Readymades, Family Clothing Store legacy, Clothing shop history Madurai, Arshath Abdulla, Jannathul Firthouse"
        canonicalPath="/about"
        schema={aboutSchema}
        preloadImages={[heroBanner]}
      />
      
      {/* 1. Header Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            alt="Kanmani Readymades showroom interior in Madurai Main"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-[#3d0f1a]/85 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs uppercase tracking-widest font-body font-bold mb-4">
            <Sparkles size={12} /> Our Legacy
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-wide text-white">
            About Kanmani
          </h1>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <p className="font-tamil text-gold text-base md:text-lg tracking-wider">
            பாரம்பரியம் • நம்பிக்கை • தரம்
          </p>
        </div>
      </section>

      {/* 2. Business Introduction & History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Story Image */}
            <div className="relative flex justify-center">
              <div className="w-72 h-72 rounded-full overflow-hidden shadow-xl border-4 border-gold/25 relative z-10 scale-95 hover:scale-100 transition-transform duration-500">
                <img
                  src={ownerImage}
                  alt="Founder of Kanmani Readymades Clothing Store in Madurai"
                  className="w-full h-full object-cover animate-fade-in"
                  loading="lazy"
                  width="288"
                  height="288"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-72 h-72 rounded-full bg-gold/5 border border-gold/10 z-0" />
            </div>

            {/* Content Details */}
            <div className="text-left flex flex-col gap-5">
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-gold">Est. 2006</span>
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Our History & Journey
              </h2>
              <div className="w-12 h-0.5 bg-gold" />
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Kanmani Readymades was founded in Madurai with a singular, simple mission: to make premium quality clothing accessible to local families without the high markup prices found at conventional retailers.
              </p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Over the past two decades, what started as a modest local shop has flourished into a trusted multi-generation family fashion hub. We operate on the principles of honesty, community values, and uncompromising clothing standards, ensuring every customer walks away with genuine satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Grid */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex gap-6 hover-lift text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                <Target size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">
                  To supply a diverse array of comfortable and stylish fashion wear for all generations at transparent rates, while maintaining maximum honesty in billing and service.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex gap-6 hover-lift text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                <Compass size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">
                  To make quality, durable family clothing affordable to every household in Tamil Nadu, fostering deep relationships built on trust, respect, and mutual value.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values, Pricing & GST Certification */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-gold block mb-3">Brand Integrity</span>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Our Core Guarantees
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Pricing Philosophy */}
            <div className="p-8 rounded-2xl bg-[#FAFAFA] border border-gray-100 hover-lift flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mb-6">
                <IndianRupee size={22} className="text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Affordable Luxury</h3>
              <p className="text-muted-foreground font-body text-xs leading-relaxed">
                By optimizing logistics and sourcing directly, we guarantee high-grade fabrics at the lowest possible showroom prices.
              </p>
            </div>

            {/* Values */}
            <div className="p-8 rounded-2xl bg-[#FAFAFA] border border-gray-100 hover-lift flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mb-6">
                <ShieldCheck size={22} className="text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Honest Operations</h3>
              <p className="text-muted-foreground font-body text-xs leading-relaxed">
                We believe in straightforward pricing without gimmicks. What you see is what you pay—durable clothes at honest rates.
              </p>
            </div>

            {/* GST Certified */}
            <div className="p-8 rounded-2xl bg-[#FAFAFA] border border-gray-100 hover-lift flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mb-6">
                <BadgeCheck size={22} className="text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">GST Registered</h3>
              <p className="text-muted-foreground font-body text-xs leading-relaxed">
                As a verified business with GSTIN 33ALPPA4897B1Z5, we fully comply with corporate laws, guaranteeing verified business practices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Pricing Promise Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-[#4a101e] text-white relative z-20 overflow-hidden">
        {/* Background visual detail */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mb-6 mx-auto border border-gold/30">
            <Handshake size={32} className="text-gold" />
          </div>
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-gold block mb-2">Our Values</span>
          <h2 className="text-3xl font-heading font-extrabold text-white mb-6">
            Our Pricing Promise
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-body text-base md:text-lg leading-relaxed text-white/90 max-w-2xl mx-auto">
            At Kanmani Readymades, every customer is equally valued. We maintain transparent fixed pricing, ensuring everyone receives the same affordable price without bargaining or hidden variations.
          </p>
        </div>
      </section>

      {/* 5. Co-Founders Section */}
      <section className="py-24 bg-[#FAFAFA] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-gold block mb-3">Leadership team</span>
            <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">
              Our Co-Founders
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto" />
            <p className="text-muted-foreground font-body text-xs mt-4">
              Leading Kanmani Readymades with a joint focus on pricing integrity and service quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            
            {/* Founder 1 */}
            <div className="bg-white border border-gray-150 p-8 rounded-2xl shadow-sm hover-lift flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading text-2xl font-bold mb-4">
                AA
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Arshath Abdulla A
              </h3>
              <span className="text-[10px] text-gold uppercase tracking-widest font-bold mt-1 font-body">
                Co-Founder & Executive Director
              </span>
              <p className="text-muted-foreground font-body text-xs mt-4 text-center leading-relaxed">
                Oversees supply chains, direct weavers sourcing programs, and corporate accounting systems.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white border border-gray-150 p-8 rounded-2xl shadow-sm hover-lift flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading text-2xl font-bold mb-4">
                JF
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Jannathul Firthouse A
              </h3>
              <span className="text-[10px] text-gold uppercase tracking-widest font-bold mt-1 font-body">
                Co-Founder & Operations Director
              </span>
              <p className="text-muted-foreground font-body text-xs mt-4 text-center leading-relaxed">
                Guides store management, retail operations, customer relations, and visual showrooms display.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default About;