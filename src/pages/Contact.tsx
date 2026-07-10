import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Sparkles,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroBanner from "@/assets/hero-banner.png";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }

    const text = encodeURIComponent(
      `Name: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nMessage: ${form.message.trim()}`
    );

    window.open(`https://wa.me/918428858856?text=${text}`, "_blank");

    toast({
      title: "Redirecting to WhatsApp!",
      description: "We'll respond to your enquiry shortly.",
    });

    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <main className="bg-[#FAFAFA] text-foreground min-h-screen page-transition">
      {/* Header Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            alt="Kanmani Readymades contact banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3d0f1a]/85 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs uppercase tracking-widest font-body font-bold mb-4">
            <Sparkles size={12} /> Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-wide text-white">
            Contact Us
          </h1>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-white/80 font-body max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Have questions about sizing, pricing, or custom designs? Visit our Madurai showroom or reach out.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info Cards */}
            <div className="text-left flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-[0.3em] text-gold block mb-3">Reach Us</span>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-sm">
                        Address
                      </h3>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=45A,+Nethaji+Rd,+Periyar,+Madurai+Main,+Madurai,+Tamil+Nadu+625001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground font-body text-xs hover:text-gold transition-colors leading-relaxed"
                      >
                        45A, Nethaji Rd, Periyar, Madurai Main, Tamil Nadu 625001
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-sm">
                        Phone
                      </h3>
                      <a
                        href="tel:8428858856"
                        className="text-muted-foreground font-body text-xs hover:text-gold transition-colors"
                      >
                        8428858856
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-sm">
                        Email
                      </h3>
                      <a
                        href="mailto:a.arshathabdulla@gmail.com"
                        className="text-muted-foreground font-body text-xs hover:text-gold transition-colors"
                      >
                        a.arshathabdulla@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Instagram size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-sm">
                        Instagram
                      </h3>
                      <a
                        href="https://www.instagram.com/kanmani_readymades_madurai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground font-body text-xs hover:text-gold transition-colors"
                      >
                        @kanmani_readymades_madurai
                      </a>
                    </div>
                  </div>

                  {/* Store Timings */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-sm">
                        Store Timings
                      </h3>
                      <p className="text-muted-foreground font-body text-xs leading-relaxed">
                        Mon – Sat: 9:00 AM – 9:00 PM <br />
                        Sunday: 10:00 AM – 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/918428858856?text=${encodeURIComponent(
                  "Hello! I'd like to enquire about your collections."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-green-500 text-green-600 font-body font-bold text-xs tracking-widest uppercase rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 w-fit shrink-0"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover-lift text-left">
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-gold block mb-3">Enquiry</span>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-transparent transition-all font-body text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-transparent transition-all font-body text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={4}
                    placeholder="Tell us what you are looking for..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-transparent transition-all font-body text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 gold-gradient text-foreground font-body font-bold text-xs tracking-widest uppercase rounded-full shadow-lg hover:shadow-gold/15 transition-shadow"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-20 max-w-5xl mx-auto text-center">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-gold block mb-3">Map Direction</span>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              Find Us In Madurai
            </h2>

            <div className="rounded-3xl overflow-hidden border border-gray-150 shadow-sm aspect-video max-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=9.9166739,78.1136004&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kanmani Readymades Location - Madurai"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;