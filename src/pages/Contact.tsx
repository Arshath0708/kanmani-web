import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
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
    // Send via WhatsApp as fallback
    const text = encodeURIComponent(
      `Name: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nMessage: ${form.message.trim()}`
    );
    window.open(`https://wa.me/918428858856?text=${text}`, "_blank");
    toast({ title: "Redirecting to WhatsApp!", description: "We'll respond to your enquiry shortly." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 maroon-gradient text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-3">Contact Us</h1>
          <p className="text-primary-foreground/80 font-body">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground text-sm">45A, Nethaji Rd, Periyar, Madurai Main, Madurai, Tamil Nadu 625001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Phone</h3>
                    <a href="tel:8428858856" className="text-muted-foreground text-sm hover:text-gold transition-colors">8428858856</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Email</h3>
                    <a href="mailto:a.arshathabdulla@gmail.com" className="text-muted-foreground text-sm hover:text-gold transition-colors">
                      a.arshathabdulla@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Store Timings</h3>
                    <p className="text-muted-foreground text-sm">Mon – Sat: 9:00 AM – 9:00 PM</p>
                    <p className="text-muted-foreground text-sm">Sunday: 10:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/918428858856?text=${encodeURIComponent("Hello! I'd like to enquire about your collections.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-background font-body font-semibold rounded-sm hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-body font-semibold text-foreground mb-1">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-semibold text-foreground mb-1">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    maxLength={15}
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-semibold text-foreground mb-1">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 gold-gradient text-accent-foreground font-body font-semibold tracking-wide rounded-sm hover:opacity-90 transition-opacity"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">Find Us</h2>
            <div className="rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1!2d78.119!3d9.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnMzAuMCJOIDc4wrAwNycwOC40IkU!5e0!3m2!1sen!2sin!4v1700000000000"
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
