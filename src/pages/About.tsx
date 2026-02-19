import heroBanner from "@/assets/hero-banner.jpg";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <img src={heroBanner} alt="Kanmani Readymades store" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Story</h1>
          <p className="font-tamil text-gold text-lg">பாரம்பரியம் மற்றும் புதுமை ஒன்றாக</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">The Kanmani Legacy</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          </div>
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p>
              Born in the heart of Madurai, <strong className="text-foreground">Kanmani Readymades</strong> has been a cornerstone of family fashion for years. 
              What started as a humble shop has grown into one of Madurai's most trusted fashion destinations, serving thousands of families 
              with premium clothing that blends the rich traditions of Tamil Nadu with modern trends.
            </p>
            <p>
              Our name, "Kanmani" — meaning the apple of the eye — reflects our belief that every customer is precious. 
              We curate collections that make every family member feel special, whether it's a bride choosing her wedding silk, 
              a father picking the perfect veshti, or a child dressed in their finest for a festival.
            </p>
            <p>
              From handloom cotton sarees to designer party wear, every piece in our store is carefully selected to meet 
              the highest standards of quality, comfort, and style. We take pride in making premium fashion accessible 
              to every family in Madurai.
            </p>
          </div>

          {/* Tamil Quote Divider */}
          <div className="my-12 text-center py-6 border-t border-b border-gold/30">
            <p className="font-tamil text-gold text-xl italic">
              "உங்கள் குடும்பத்தின் நம்பிக்கைக்குரிய ஆடை மையம்"
            </p>
            <p className="text-muted-foreground text-sm mt-2">Your Family's Trusted Fashion Destination</p>
          </div>

          {/* Vision */}
          <div className="bg-secondary rounded-sm p-8 text-center">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              To become Madurai's most trusted family fashion destination — where every visit is an experience, 
              every purchase is a memory, and every customer becomes family.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Tradition", desc: "Rooted in the rich textile heritage of Tamil Nadu" },
              { title: "Trust", desc: "Built on decades of honest customer relationships" },
              { title: "Trend", desc: "Always evolving with the latest fashion sensibilities" },
            ].map((v) => (
              <div key={v.title} className="text-center p-6">
                <h4 className="font-heading text-xl font-semibold text-gold-dark mb-2">{v.title}</h4>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
