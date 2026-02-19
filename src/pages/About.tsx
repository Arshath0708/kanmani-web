import heroBanner from "@/assets/hero-banner.jpg";
import { Clock, IndianRupee, ShoppingBag, Heart } from "lucide-react";

const strengths = [
  { icon: Clock, title: "Experience", desc: "Over 20 years of trusted service in Madurai." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality fashion starting from just ₹200." },
  { icon: ShoppingBag, title: "Wide Variety", desc: "From sarees to shirts, kids wear to festive collections." },
  { icon: Heart, title: "Customer Trust", desc: "Generations of families continue to shop with us." },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <img src={heroBanner} alt="Kanmani Readymades store" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Journey</h1>
          <p className="font-tamil text-gold text-lg">பாரம்பரியம் மற்றும் புதுமை ஒன்றாக</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Journey – Kanmani Readymades</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          </div>
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p>
              <strong className="text-foreground">KANMANI READYMADES</strong> was established over 20 years ago in the heart of Madurai by{" "}
              <strong className="text-foreground">Syed Abuthahir</strong>, with a vision to provide quality and affordable fashion for every family.
            </p>
            <p>
              With dedication, honesty, and strong customer relationships, the store quickly became a trusted name among the people of Madurai.
            </p>
            <p>
              Today, the business is successfully managed and expanded by{" "}
              <strong className="text-foreground">Abdul Muthalip S</strong>, continuing the legacy with the same commitment to trust, affordability, and customer satisfaction.
            </p>
            <p>
              From traditional sarees to modern shirts and kids wear, Kanmani Readymades has proudly served generations of families with clothing that blends comfort, culture, and affordability.
            </p>
            <p className="text-foreground font-semibold text-lg">
              We believe that fashion should not be expensive — it should be accessible to everyone.
            </p>
          </div>

          {/* Tamil Quote Divider */}
          <div className="my-12 text-center py-6 border-t border-b border-gold/30">
            <p className="font-tamil text-gold text-xl italic">
              "உங்கள் குடும்பத்தின் நம்பிக்கைக்குரிய ஆடை மையம்"
            </p>
            <p className="text-muted-foreground text-sm mt-2">Your Family's Trusted Fashion Destination</p>
          </div>

          {/* Strengths */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-foreground">Our Strengths</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.map((s) => (
              <div key={s.title} className="text-center p-6 bg-secondary rounded-sm">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <s.icon size={22} className="text-accent-foreground" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-gold-dark mb-2">{s.title}</h4>
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
