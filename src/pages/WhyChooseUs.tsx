import {
  ShieldCheck,
  IndianRupee,
  BadgeCheck,
  Layers,
  Store,
  Users,
  Heart,
  TrendingUp,
  Sparkles,
  Handshake,
} from "lucide-react";
import festiveBanner from "@/assets/festive-banner.jpg";

const pillars = [
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Quality fashion clothes thoughtfully priced to make style accessible for every family, without premium markups.",
  },
  {
    icon: Handshake,
    title: "Fixed & Fair Pricing",
    desc: "We believe every customer deserves the same honest price. Our fixed pricing policy ensures complete transparency, fairness, and equal value for everyone who shops with us.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Handpicked materials sourced directly from top weavers, ensuring premium comfort, fit, and durability.",
  },
  {
    icon: BadgeCheck,
    title: "GST Certified",
    desc: "A completely transparent, government-registered business providing genuine billing on every purchase.",
  },
  {
    icon: Layers,
    title: "Wide Variety",
    desc: "A massive inventory of clothing styles ranging from traditional silk sarees to modern casual menswear.",
  },
  {
    icon: Store,
    title: "Family Fashion Store",
    desc: "A complete family shopping center offering curated clothing collections for Men, Women, and Kids.",
  },
  {
    icon: Users,
    title: "Trusted Local Business",
    desc: "Proudly serving generations of loyal families in Madurai main region with reliable fashion values.",
  },
  {
    icon: Heart,
    title: "Friendly Customer Service",
    desc: "A warm, respectful, and family-oriented shopping environment where our staff guides your choices.",
  },
  {
    icon: TrendingUp,
    title: "Latest Fashion Trends",
    desc: "Frequently updated catalog capturing current style trends, festive cuts, and modern fabrics.",
  },
];

const WhyChooseUs = () => {
  return (
    <main className="bg-[#FAFAFA] text-foreground min-h-screen page-transition">
      {/* Header Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={festiveBanner}
            alt="Kanmani Readymades showroom values header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3d0f1a]/85 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs uppercase tracking-widest font-body font-bold mb-4">
            <Sparkles size={12} /> Our Core Pillars
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-wide text-white">
            Why Choose Us
          </h1>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-white/80 font-body max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Discover the foundational values that make Kanmani Readymades Madurai's preferred family fashion store.
          </p>
        </div>
      </section>

      {/* Pillars Presentation Grid */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover-lift flex flex-col justify-start items-center text-center transition-all duration-350"
              >
                {/* Visual Glass Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Premium Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10 shrink-0">
                  <item.icon size={26} className="text-primary transition-colors duration-300" />
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground mb-3 relative z-10">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground font-body text-xs leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Emotional Statement Banner */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl border border-gray-100 bg-white text-center shadow-sm max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
            <h4 className="font-heading text-xl font-bold text-foreground mb-4">
              Our Uncompromising Promise
            </h4>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              We started with a pledge to ensure families don't have to choose between cost and quality. Every purchase at our store is backed by our promise of authenticity, fair GST compliance, and the lowest rates possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUs;
