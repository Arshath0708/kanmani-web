import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 maroon-gradient text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3">
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 font-body">
            We’d love to hear from you
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      Address
                    </h3>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=45A,+Nethaji+Rd,+Periyar,+Madurai+Main,+Madurai,+Tamil+Nadu+625001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-gold transition-colors underline underline-offset-2"
                    >
                      45A, Nethaji Rd, Periyar, Madurai Main, Tamil Nadu 625001
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      Phone
                    </h3>
                    <a
                      href="tel:8428858856"
                      className="text-muted-foreground text-sm hover:text-gold transition-colors"
                    >
                      8428858856
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      Email
                    </h3>
                    <a
                      href="mailto:a.arshathabdulla@gmail.com"
                      className="text-muted-foreground text-sm hover:text-gold transition-colors"
                    >
                      a.arshathabdulla@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <Instagram size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      Instagram
                    </h3>
                    <a
                      href="https://www.instagram.com/kanmani_readymades_madurai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-gold transition-colors"
                    >
                      @kanmani_readymades_madurai
                    </a>
                  </div>
                </div>

                {/* Store Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      Store Timings
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Mon – Sat: 9:00 AM – 9:00 PM
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Sunday: 10:00 AM – 8:00 PM
                    </p>
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
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-body font-semibold rounded-sm hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                />

                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                />

                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3 gold-gradient text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
              Find Us
            </h2>

            <div className="rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps?q=9.9166739,78.1136004&output=embed"
                width="100%"
                height="400"
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