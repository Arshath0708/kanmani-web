import { Gift, Percent, Clock, Users } from "lucide-react";
import festiveBanner from "@/assets/festive-banner.jpg";

const offers = [
  {
    icon: Percent,
    title: "Pongal Special – Up to 30% Off",
    desc: "Celebrate the harvest festival with exclusive discounts on sarees starting from ₹250, shirts from ₹200, and kids wear from ₹250!",
    badge: "Festival Offer",
  },
  {
    icon: Gift,
    title: "Family Combo Pack – Save More!",
    desc: "Buy outfits for 4 family members and get extra discounts on the total bill. Affordable fashion for the whole family!",
    badge: "Combo Deal",
  },
  {
    icon: Users,
    title: "Wedding Season Special",
    desc: "Get complimentary blouse stitching with every bridal silk saree purchase. Quality wedding collections at honest prices!",
    badge: "Wedding Offer",
  },
  {
    icon: Clock,
    title: "Weekend Flash Sale",
    desc: "Visit us this weekend for exclusive in-store discounts on selected collections. New deals every Saturday!",
    badge: "Limited Time",
  },
];

const Offers = () => {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32">
        <img src={festiveBanner} alt="Festive season celebrations with traditional clothing" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 gold-gradient text-accent-foreground text-sm font-body font-semibold rounded-sm mb-4">
            🎉 Festive Season Deals
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3">
            Exclusive Offers & Deals
          </h1>
          <p className="text-primary-foreground/80 font-body max-w-lg mx-auto">
            Premium quality fashion at affordable prices for every family
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {offers.map((offer) => (
              <div key={offer.title} className="bg-secondary rounded-sm p-6 hover-lift border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <offer.icon size={22} className="text-accent-foreground" />
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-xs font-body font-semibold rounded-sm mb-2">
                      {offer.badge}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{offer.title}</h3>
                    <p className="text-muted-foreground text-sm font-body">{offer.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Visit our store to avail these exclusive offers!</p>
            <a
              href={`https://wa.me/918428858856?text=${encodeURIComponent("Hi! I'd like to know more about your current offers.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 gold-gradient text-accent-foreground font-body font-semibold tracking-wide rounded-sm hover:opacity-90 transition-opacity"
            >
              Enquire About Offers
            </a>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-xs">
            * Offers valid on in-store purchases only. Terms & conditions apply. Subject to availability. Cannot be combined with other offers.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Offers;
