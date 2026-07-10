import { useEffect } from "react";
import {
  MapPin,
  MessageCircle,
  Users,
  Sparkles,
  ArrowRight,
  Shirt,
  Baby,
  Crown,
  CalendarDays,
  Gift,
  CheckCircle2,
  Gem,
  Compass,
  Heart,
  ShieldCheck,
  Clock,
} from "lucide-react";
import festiveBanner from "@/assets/explore-page-banner.png";

export default function Explore() {
  useEffect(() => {
    // Dynamic SEO title & description injection
    document.title = "Explore Our Store | Kanmani Readymades Madurai - Family Clothing";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore Kanmani Readymades in Madurai. Discover affordable Men's wear, Women's wear, Kids' wear, and Traditional wear. High-quality family clothing showroom with transparent GST compliance."
      );
    }
  }, []);

  const categories = [
    {
      icon: Gem,
      title: "Women's Wear",
      items: ["Kurtis", "Chudithars", "Tops", "Leggings", "Nightwear", "Palazzo", "Dupattas", "Innerwear"],
      description: "Elegant daily wear and gorgeous semi-formal selections. Crafted with soft, durable fabrics tailored for perfect comfort.",
    },
    {
      icon: Shirt,
      title: "Men's Wear",
      items: ["Casual Shirts", "Formal Shirts", "T-Shirts", "Jeans", "Cotton Pants", "Track Pants", "Innerwear"],
      description: "Smart formals and relaxed casual outfits. Pick from a diverse palette of colors, cuts, and premium cotton weaves.",
    },
    {
      icon: Baby,
      title: "Kids Wear",
      items: ["Boys Wear", "Girls Wear", "Infant Wear", "Party Wear", "Daily Wear"],
      description: "Playful, comfortable, and skin-friendly clothing for the little ones, spanning daily playwear to festive outfits.",
    },
    {
      icon: Crown,
      title: "Traditional Wear",
      items: ["Festive Sarees", "Dhotis & Veshtis", "Pattu Pavadais", "Traditional Kurtas"],
      description: "Graceful heritage garments celebrating cultural festivals and family ceremonies. Designed with rich details and classic textures.",
    },
    {
      icon: CalendarDays,
      title: "Seasonal Collections",
      items: ["Summer Cottons", "Winter Warmers", "Festive Specials", "Monsoon Daily Wear"],
      description: "Thoughtfully updated catalogs timed to keep you comfortable and stylish through every changing season of the year.",
    },
    {
      icon: Gift,
      title: "Fashion Accessories",
      items: ["Belts & Wallets", "Handkerchiefs", "Premium Socks", "Matching Dupattas & Stoles"],
      description: "The finishing touches to elevate your family outfits. High quality basic essentials chosen to complement your style.",
    },
  ];

  const features = [
    { title: "Affordable Prices", desc: "Premium grade styling at highly competitive price points that fit every family budget." },
    { title: "Quality Products", desc: "Hand-inspected stitches, color-fast fabrics, and durable materials sourced directly." },
    { title: "Huge Variety", desc: "Thousands of options spanning different cuts, patterns, and textiles under one roof." },
    { title: "New Arrivals Frequently", desc: "Fresh collections and trending designs hit our shelves almost every week." },
    { title: "Friendly Customer Service", desc: "Welcoming store staff dedicated to assisting your family with patient guidance." },
    { title: "GST Certified Business", desc: "Fully registered enterprise. Clear, transparent billing ensuring trust in every purchase." },
    { title: "Family Shopping Destination", desc: "A comprehensive showroom designed for a synchronized family shopping day out." },
    { title: "Comfortable Experience", desc: "Spacious layout, pleasant lighting, and clean atmosphere for comfortable browsing." },
  ];

  const whatsappGroupLink = "https://chat.whatsapp.com/Bm38uRwXixgDqAUdpaFfGt";
  const whatsappChatLink = "https://wa.me/918428858856?text=Hello!%20I%20have%20an%20enquiry%20about%20product%20availability,%20sizes,%20or%20timings%20at%20Kanmani%20Readymades.";
  const googleMapsDirections = "https://www.google.com/maps/dir/?api=1&destination=45A,+Nethaji+Rd,+Periyar,+Madurai+Main,+Madurai,+Tamil+Nadu+625001";

  return (
    <main className="bg-[#FAFAFA] text-foreground min-h-screen page-transition">
      
      {/* 1. Page Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={festiveBanner}
            alt="Explore Kanmani Readymades clothing collections banner"
            className="w-full h-full object-cover scale-105 object-center"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-32 flex justify-start items-center">
          <div className="max-w-3xl text-left animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs uppercase tracking-widest font-body font-bold mb-6">
              <Sparkles size={12} /> Explore Our Showroom
            </span>
            <p className="font-tamil text-gold text-lg md:text-2xl mb-3 font-medium tracking-wide">
              வண்ணமயமான ஆடைகளின் சங்கமம்
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
              Explore Our Store
            </h1>
            <p className="text-white/85 font-body text-base md:text-lg mb-10 max-w-2xl leading-relaxed font-light">
              Discover quality clothing for every member of your family. From daily essentials to festive collections, Kanmani Readymades offers a wide variety of styles at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href={googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 gold-gradient text-foreground font-body font-bold text-sm tracking-widest uppercase rounded-full shadow-lg hover:shadow-gold/20 hover:scale-[1.02] transition-all duration-300"
              >
                Visit Our Store <ArrowRight size={16} />
              </a>
              <a
                href={whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 glass-btn text-white font-body font-semibold text-sm tracking-widest uppercase rounded-full"
              >
                Join Our Fashion Community
              </a>
              <a
                href={whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-body font-semibold text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:scale-[1.02]"
              >
                Get New Arrivals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Our Store */}
      <section className="py-24 bg-white relative z-20 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-primary mb-3 block">Trusted in Madurai</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground tracking-wide">
              About Our Store
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 flex flex-col gap-6 text-left">
              <h3 className="font-heading text-2xl font-bold text-primary leading-snug">
                Welcome to Kanmani Readymades — Madurai's Complete Family Clothing Destination.
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Located in the heart of Madurai, Kanmani Readymades has earned the trust of families by providing exceptionally styled clothes that couple premium wearability with budget-friendly rates. We serve men, women, and kids with collections ranging from essential comfortwear to stunning festive highlights.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Our inventory is dynamic—new, fresh designs arrive regularly, making every single visit to our Nethaji Road showroom a brand-new discovery. Shop with peace of mind knowing that we focus strictly on high fabrics, honest values, and beautiful choices.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/5 text-primary text-xs font-body font-bold uppercase tracking-wider">
                  <Gem size={12} className="shrink-0" /> Women
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/5 text-primary text-xs font-body font-bold uppercase tracking-wider">
                  <Shirt size={12} className="shrink-0" /> Men
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/5 text-primary text-xs font-body font-bold uppercase tracking-wider">
                  <Baby size={12} className="shrink-0" /> Kids
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary/5 text-primary text-xs font-body font-bold uppercase tracking-wider">
                  <Crown size={12} className="shrink-0" /> Traditional
                </span>
              </div>
            </div>

            <div className="md:col-span-5 relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-[#4a101e] text-white shadow-xl relative overflow-hidden">
                {/* Background glow overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
                <h4 className="font-heading text-xl font-bold text-gold mb-4">Our Core Value</h4>
                <p className="font-tamil text-lg leading-relaxed text-white/95 italic mb-4">
                  "குறைந்த விலையில் சிறந்த தரம்"
                </p>
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  We strive to ensure families in Madurai never have to compromise quality for cost. Premium clothing should be accessible to all.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  <Users className="text-gold shrink-0" size={24} />
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest">Generations of Trust</p>
                    <p className="text-sm font-bold font-body text-white">Serving Madurai Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What You'll Find */}
      <section className="py-24 bg-[#FAFAFA] relative z-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-primary mb-3 block">Collections Guide</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground tracking-wide">
              What You'll Find
            </h2>
            <p className="text-muted-foreground text-sm font-body mt-2 max-w-md mx-auto">
              Browse through our broad categories designed for daily living and special memories.
            </p>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover-lift flex flex-col justify-between transition-all duration-350"
              >
                {/* Accent line hover glow */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                    <cat.icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {cat.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="border-t border-gray-50 pt-4 mt-auto">
                  <p className="text-[11px] uppercase font-bold tracking-wider text-primary mb-2.5">
                    Includes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="text-xs px-2.5 py-1 rounded bg-[#FAFAFA] border border-gray-100 font-body text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Customers Visit Us */}
      <section className="py-24 bg-white relative z-20 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-primary mb-3 block">Why Choose Kanmani</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground tracking-wide">
              Why Customers Visit Us
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-100 hover:border-gold/30 hover:bg-white hover:shadow-md transition-all duration-300 text-left flex flex-col gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="font-heading text-base font-bold text-primary">
                  {feat.title}
                </h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shopping Experience */}
      <section className="py-24 bg-[#FAFAFA] relative z-20 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-gold/10 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-primary/5 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-primary mb-3 block">Our Showroom Environment</span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground tracking-wide mb-6">
            Our Shopping Experience
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />
          
          <div className="prose prose-lg mx-auto text-muted-foreground font-body text-base md:text-lg leading-relaxed text-center flex flex-col gap-6">
            <p>
              Visiting Kanmani Readymades is about more than just buying clothes; it is an experience rooted in local family traditions. We provide a spacious, clean, and beautifully lit showroom that invites you to comfortably browse our extensive garment collection.
            </p>
            <p>
              Our staff is trained to offer helpful, warm, and highly respectful assistance, guiding you through styles without pressure. We take pride in maintaining an extensive and fresh selection of designs, ensuring that you discover something new with every seasonal and festive arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm flex flex-col items-center gap-2">
              <Compass className="text-gold" size={24} />
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">Wide Selection</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm flex flex-col items-center gap-2">
              <Heart className="text-primary" size={24} />
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">Helpful Staff</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm flex flex-col items-center gap-2">
              <Clock className="text-gold" size={24} />
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">Fresh Arrivals</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Stay Updated */}
      <section className="py-24 bg-white relative z-20 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-primary mb-3 block">Fashion Alerts</span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground tracking-wide mb-4">
            Never Miss New Arrivals
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Stay fully informed about our latest collections, seasonal specials, upcoming festival releases, and exclusive group-only events.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
            <div className="p-8 rounded-2xl border border-gray-100 bg-[#FAFAFA] flex flex-col justify-between items-start gap-6 hover:shadow-md transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">Weekly Collections Updates</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  Receive real-time photos of new clothing collections and seasonal arrivals directly on your mobile device.
                </p>
              </div>
              <a
                href={whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3 border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-full font-body font-bold text-xs uppercase tracking-wider transition-all duration-300"
              >
                Get New Arrivals
              </a>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100 bg-[#FAFAFA] flex flex-col justify-between items-start gap-6 hover:shadow-md transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-4">
                  <Users size={20} />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">Festival & Discount Alerts</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  Stay updated on upcoming festival clothes launches, special seasonal offers, and trending designs.
                </p>
              </div>
              <a
                href={whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3 bg-primary text-white hover:bg-primary/95 rounded-full font-body font-bold text-xs uppercase tracking-wider transition-all duration-300"
              >
                Join Our Fashion Community
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shop With Confidence Trust Box */}
      <section className="py-16 bg-[#FAFAFA] relative z-20 border-t border-gray-150">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-gray-150 shadow-md relative overflow-hidden text-center hover-lift">
            <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-primary mb-4 flex items-center justify-center gap-2">
              <ShieldCheck className="text-gold shrink-0" size={28} /> Shop With Confidence
            </h3>
            <p className="text-muted-foreground font-body text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              We operate Kanmani Readymades with complete honesty and family-first service values. Before you visit us, rest assured of our pricing and trust guarantees:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="flex items-center gap-3 p-3 bg-[#FAFAFA] rounded-xl border border-gray-100 shadow-sm">
                <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                <span className="font-body text-sm font-bold text-foreground">Fixed & Fair Pricing</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#FAFAFA] rounded-xl border border-gray-100 shadow-sm">
                <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                <span className="font-body text-sm font-bold text-foreground">Affordable Fashion</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#FAFAFA] rounded-xl border border-gray-100 shadow-sm">
                <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                <span className="font-body text-sm font-bold text-foreground">Equal Prices for Every Customer</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#FAFAFA] rounded-xl border border-gray-100 shadow-sm">
                <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                <span className="font-body text-sm font-bold text-foreground">GST Certified Business</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#FAFAFA] rounded-xl border border-gray-100 shadow-sm md:col-span-2">
                <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                <span className="font-body text-sm font-bold text-foreground">Friendly Customer Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GST Certified */}
      <section className="py-16 bg-gradient-to-br from-primary to-[#3d0f1a] text-white relative z-20">
        <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center gap-4">
          <ShieldCheck size={48} className="text-gold mb-2" />
          <h2 className="font-heading text-2xl font-bold tracking-wide text-white">
            GST Certified Business
          </h2>
          <div className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 font-mono text-lg md:text-xl font-bold tracking-widest text-gold mb-2 select-all">
            GSTIN: 33ALPPA4897B1Z5
          </div>
          <p className="text-white/80 font-body text-sm max-w-md leading-relaxed">
            Shop with absolute confidence. Kanmani Readymades is a fully registered, law-compliant business. We offer genuine billing for every purchase.
          </p>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-24 bg-white relative z-20 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-6 leading-tight">
            Your Next Favourite Outfit <br />is Waiting
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Visit Kanmani Readymades today and explore a wide collection of quality clothing for Men, Women, and Kids at prices that fit every budget.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 gold-gradient text-foreground font-body font-bold text-sm tracking-widest uppercase rounded-full shadow-lg hover:shadow-gold/20 hover:scale-[1.02] transition-all duration-300"
            >
              Visit Store
            </a>
            <a
              href={whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-300 text-foreground hover:bg-gray-50 font-body font-semibold text-sm tracking-widest uppercase rounded-full transition-colors"
            >
              Join Our Fashion Community
            </a>
            <a
              href={whatsappChatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-body font-semibold text-sm tracking-widest uppercase rounded-full transition-colors hover:scale-[1.02]"
            >
              Get New Arrivals
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
