import { Link } from "react-router-dom";
import { Star, ShieldCheck, TrendingUp, Users, ChevronRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryKids from "@/assets/category-kids.jpg";
import categoryFestive from "@/assets/category-festive.jpg";
import newArrival1 from "@/assets/new-arrival-1.jpg";
import newArrival2 from "@/assets/new-arrival-2.jpg";
import newArrival3 from "@/assets/new-arrival-3.jpg";

const categories = [
  { name: "Women", image: categoryWomen, desc: "Sarees, Salwars & More" },
  { name: "Men", image: categoryMen, desc: "Shirts, Veshtis & Kurtas" },
  { name: "Kids", image: categoryKids, desc: "Party & Ethnic Wear" },
  { name: "Festive", image: categoryFestive, desc: "Wedding & Celebration" },
];

const newArrivals = [
  { name: "Kanchipuram Silk Saree", price: "₹4,999", image: newArrival1 },
  { name: "Designer Salwar Set", price: "₹2,499", image: newArrival2 },
  { name: "Premium Veshti Set", price: "₹1,299", image: newArrival3 },
];

const whyChooseUs = [
  { icon: ShieldCheck, title: "Premium Quality Fabrics", desc: "Handpicked materials from the finest weavers of Tamil Nadu" },
  { icon: TrendingUp, title: "Latest Tamil Nadu Trends", desc: "Stay ahead with the newest styles and patterns" },
  { icon: Star, title: "Affordable Pricing", desc: "Premium fashion that doesn't break the bank" },
  { icon: Users, title: "Family Collections", desc: "Complete fashion solutions for every family member" },
];

const testimonials = [
  { name: "Priya Lakshmi", text: "Best saree collection in Madurai! I always shop here for festivals.", rating: 5 },
  { name: "Ravi Kumar", text: "Excellent quality veshtis and shirts. Very professional service.", rating: 5 },
  { name: "Meena Sundari", text: "My kids love the party wear collection. Great designs at fair prices!", rating: 5 },
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <img
          src={heroBanner}
          alt="Kanmani Readymades premium fashion store interior with silk sarees"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <p className="font-tamil text-gold text-lg md:text-xl mb-4 animate-fade-up">
              வண்ணமயமான ரகங்களுக்கு கண்மணி ரெடிமேட்ஸ்
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Where Tradition<br />
              <span className="gold-text">Meets Trend</span>
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg md:text-xl mb-8 max-w-lg">
              Discover premium fashion for the entire family at Madurai's most trusted readymade store.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 px-8 py-3 gold-gradient text-accent-foreground font-body font-semibold tracking-wide rounded-sm hover:opacity-90 transition-opacity"
              >
                Explore Collections <ChevronRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 border border-gold text-gold font-body font-semibold tracking-wide rounded-sm hover:bg-gold/10 transition-colors"
              >
                Visit Our Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              Shop By Category
            </h2>
            <p className="font-tamil text-gold text-sm">பாரம்பரியம் மற்றும் புதுமை ஒன்றாக</p>
            <p className="text-muted-foreground text-sm mt-1">Where Tradition Meets Innovation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to="/collections"
                className="group relative overflow-hidden rounded-sm hover-lift"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={`${cat.name} collection at Kanmani Readymades`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                  <h3 className="font-heading text-xl font-bold">{cat.name}</h3>
                  <p className="text-sm text-primary-foreground/70">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              New Arrivals
            </h2>
            <p className="text-muted-foreground">Freshly curated for you</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {newArrivals.map((item) => (
              <div key={item.name} className="group bg-background rounded-sm overflow-hidden hover-lift shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.name}</h3>
                  <p className="text-gold-dark font-body font-bold text-lg mt-1">{item.price}</p>
                  <a
                    href={`https://wa.me/918428858856?text=${encodeURIComponent(`Hi! I'm interested in ${item.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-body font-semibold text-primary hover:text-gold transition-colors"
                  >
                    Enquire on WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              Why Choose Kanmani?
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center p-6 rounded-sm bg-secondary hover-lift">
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 maroon-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2">
              What Our Customers Say
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-primary-foreground/10 backdrop-blur-sm rounded-sm p-6 border border-primary-foreground/10">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-primary-foreground/90 font-body mb-4 italic">"{t.text}"</p>
                <p className="text-gold font-heading font-semibold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Visit Our Store in Madurai Today
          </h2>
          <p className="text-muted-foreground mb-2 max-w-lg mx-auto">
            Experience the finest collection of traditional and modern fashion, handpicked for your family.
          </p>
          <p className="font-heading font-semibold text-gold-dark text-lg mb-6">
            Serving Madurai with Pride
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-8 py-3 gold-gradient text-accent-foreground font-body font-semibold tracking-wide rounded-sm hover:opacity-90 transition-opacity"
            >
              Get Directions
            </Link>
            <a
              href="tel:8428858856"
              className="px-8 py-3 border border-primary text-primary font-body font-semibold tracking-wide rounded-sm hover:bg-primary/5 transition-colors"
            >
              Call Us: 8428858856
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
