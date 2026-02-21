import heroBanner from "@/assets/hero-banner.jpg";
import ownerImage from "@/assets/kanmani-readymades-owner.jpg";
import { Clock, IndianRupee, ShoppingBag, Heart } from "lucide-react";

const strengths = [
  {
    icon: Clock,
    title: "20+ Years of Excellence",
    desc: "Serving families in Madurai with dedication, consistency, and trust for over two decades.",
  },
  {
    icon: IndianRupee,
    title: "Honest & Affordable Pricing",
    desc: "Quality fashion collections thoughtfully priced to make style accessible for every family.",
  },
  {
    icon: ShoppingBag,
    title: "Extensive Collections",
    desc: "From traditional silk sarees to modern menswear and kids' festive outfits — all under one roof.",
  },
  {
    icon: Heart,
    title: "Built on Customer Trust",
    desc: "Generations of families continue to choose us for reliability, respect, and lasting relationships.",
  },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <img
          src={heroBanner}
          alt="Kanmani Readymades showroom in Madurai"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Our Legacy
          </h1>
          <p className="font-tamil text-gold text-lg">
            பாரம்பரியம் • நம்பிக்கை • தரம்
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Owner Image */}
            <div className="flex justify-center">
              <img
                src={ownerImage}
                alt="Founder of Kanmani Readymades, Madurai"
                className="w-72 h-72 object-cover rounded-full shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Founder Content */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Our Founder
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  Kanmani Readymades
                </strong>{" "}
                was established with a simple yet powerful vision — to provide
                quality, affordable fashion for every family in Madurai.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                With dedication, integrity, and a deep understanding of
                customer needs, our founder laid the foundation for a store
                built not just on business, but on relationships and trust.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Over the years, Kanmani Readymades has grown into a trusted
                household name, proudly serving generations of families with
                clothing that reflects tradition, comfort, and value.
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="my-16 text-center py-8 border-t border-b border-gold/30">
            <p className="font-tamil text-gold text-xl italic">
              "உங்கள் குடும்பத்தின் நம்பிக்கைக்குரிய ஆடை மையம்"
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Your Family’s Trusted Fashion Destination
            </p>
          </div>

          {/* Strengths Section */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-heading font-bold text-foreground">
              Why Families Choose Us
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="text-center p-6 bg-secondary rounded-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <s.icon size={22} className="text-accent-foreground" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-gold-dark mb-2">
                  {s.title}
                </h4>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;