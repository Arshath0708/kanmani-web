import categoryWomen from "@/assets/category-women.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryKids from "@/assets/category-kids.jpg";
import categoryFestive from "@/assets/category-festive.jpg";
import newArrival1 from "@/assets/new-arrival-1.jpg";
import newArrival2 from "@/assets/new-arrival-2.jpg";
import newArrival3 from "@/assets/new-arrival-3.jpg";

const collections = [
  {
    title: "Silk Sarees",
    desc: "Exquisite Kanchipuram & Banarasi silks for every occasion",
    items: [
      { name: "Kanchipuram Bridal Silk", price: "₹8,999 - ₹25,000", image: categoryWomen },
      { name: "Mysore Silk Saree", price: "₹4,999 - ₹12,000", image: newArrival1 },
      { name: "Pattu Saree Collection", price: "₹6,999 - ₹18,000", image: categoryFestive },
    ],
  },
  {
    title: "Cotton Sarees",
    desc: "Breathable, elegant cotton weaves for daily & festive wear",
    items: [
      { name: "Chettinad Cotton", price: "₹1,499 - ₹3,500", image: newArrival1 },
      { name: "Handloom Cotton", price: "₹999 - ₹2,500", image: categoryWomen },
      { name: "Printed Cotton Saree", price: "₹799 - ₹1,999", image: newArrival1 },
    ],
  },
  {
    title: "Salwar Sets & Kurtis",
    desc: "Trendy salwar kameez and designer kurtis for modern women",
    items: [
      { name: "Designer Salwar Set", price: "₹1,999 - ₹5,500", image: newArrival2 },
      { name: "Embroidered Kurti", price: "₹899 - ₹2,499", image: newArrival2 },
      { name: "Party Wear Anarkali", price: "₹2,999 - ₹7,500", image: categoryFestive },
    ],
  },
  {
    title: "Men's Shirts & Veshtis",
    desc: "Classic veshtis, formal shirts & ethnic kurtas for men",
    items: [
      { name: "Premium Silk Veshti", price: "₹999 - ₹3,500", image: newArrival3 },
      { name: "Formal Shirt Collection", price: "₹699 - ₹1,999", image: categoryMen },
      { name: "Designer Kurta Set", price: "₹1,499 - ₹4,500", image: categoryMen },
    ],
  },
  {
    title: "Kids Party Wear",
    desc: "Adorable ethnic & party outfits for your little ones",
    items: [
      { name: "Girls Lehenga Set", price: "₹999 - ₹3,500", image: categoryKids },
      { name: "Boys Ethnic Kurta", price: "₹699 - ₹2,499", image: categoryKids },
      { name: "Kids Festival Collection", price: "₹599 - ₹1,999", image: categoryKids },
    ],
  },
  {
    title: "Wedding Collections",
    desc: "Make your special day unforgettable with our bridal & groom wear",
    items: [
      { name: "Bridal Silk Package", price: "₹15,000 - ₹50,000", image: categoryFestive },
      { name: "Groom Sherwani Set", price: "₹8,999 - ₹25,000", image: categoryMen },
      { name: "Wedding Family Pack", price: "₹25,000 - ₹75,000", image: categoryWomen },
    ],
  },
];

const Collections = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 maroon-gradient text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3">Our Collections</h1>
          <p className="font-tamil text-gold text-lg">வண்ணமயமான ரகங்களுக்கு கண்மணி ரெடிமேட்ஸ்</p>
          <p className="text-primary-foreground/70 text-sm mt-1">For Colorful Collections — Kanmani Readymades</p>
        </div>
      </section>

      {/* Collections */}
      {collections.map((collection, idx) => (
        <section
          key={collection.title}
          className={`py-16 ${idx % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1">{collection.title}</h2>
              <p className="text-muted-foreground text-sm">{collection.desc}</p>
              <div className="w-12 h-0.5 bg-gold mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {collection.items.map((item) => (
                <div key={item.name} className="group bg-background rounded-sm overflow-hidden hover-lift shadow-sm border border-border">
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
                    <p className="text-gold-dark font-body font-bold mt-1">{item.price}</p>
                    <a
                      href={`https://wa.me/918428858856?text=${encodeURIComponent(`Hi! I'm interested in ${item.name} from ${collection.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-body font-semibold text-primary hover:text-gold transition-colors"
                    >
                      Enquire on WhatsApp →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Collections;
