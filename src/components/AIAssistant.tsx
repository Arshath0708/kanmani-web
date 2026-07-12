import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Bot,
  X,
  ArrowLeft,
  MessageCircle,
  Users,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Gem,
  Shirt,
  Baby,
} from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  shoppingFor: string[];
  categories: string[];
  size: string;
  colours: string[];
  customColour: string;
  budget: string;
  occasion: string;
  notes: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0); // 0 = Welcome screen, 1..9 = steps, 10 = Summary screen
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    shoppingFor: [],
    categories: [],
    size: "",
    colours: [],
    customColour: "",
    budget: "",
    occasion: "",
    notes: "",
  });

  // Track scroll position to subtly fade out floating button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 280);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic values based on selected category options
  const categoryOptions: Record<string, string[]> = {
    "Women": ["Kurtis", "Leggings", "Nightwear", "Tops", "Chudithars", "Traditional Wear", "Palazzos", "Dupattas"],
    "Men": ["Casual Shirts", "Formal Shirts", "T-Shirts", "Jeans", "Track Pants", "Cotton Pants"],
    "Kids": ["Boys Wear", "Girls Wear", "Infant Wear", "Party Wear", "Daily Wear", "Traditional Wear"],
    "Family": ["Sarees", "Dhotis", "Kids Festive Gowns", "Family Combo Sets", "Kurtas", "Casuals"],
  };

  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "Not Sure"];
  const colorOptions = ["Black", "Blue", "Pink", "Green", "White", "Maroon", "Yellow", "Orange", "Custom"];
  const budgets = ["Below ₹300", "₹300–₹500", "₹500–₹1000", "₹1000+", "Flexible"];
  const occasions = ["Today", "This Week", "Festival", "Birthday", "Wedding", "No Hurry"];
  const noteSuggestions = ["Cotton Fabric", "Party Wear", "Simple Design", "Printed", "Plain", "Office Wear", "No preference"];

  // Scroll to bottom helper
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [step, isTyping, isOpen, error]);

  // Pressing escape to close chatbot
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleStart = () => {
    setIsTyping(true);
    setTimeout(() => {
      setStep(1);
      setIsTyping(false);
    }, 600);
  };

  const handleBack = () => {
    setError("");
    if (step > 0) {
      setStep(prev => prev - 1);
    }
  };

  const validateAndNext = () => {
    setError("");

    if (step === 1) {
      if (!formData.name.trim()) {
        setError("Please enter your name to proceed.");
        return;
      }
    }

    if (step === 2) {
      const cleanPhone = formData.phone.replace(/\D/g, "");
      if (!cleanPhone || cleanPhone.length !== 10) {
        setError("Please enter a valid 10-digit mobile number to proceed.");
        return;
      }
    }

    if (step === 3) {
      if (formData.shoppingFor.length === 0) {
        setError("Please select at least one group to proceed.");
        return;
      }
    }

    if (step === 4) {
      if (formData.categories.length === 0) {
        setError("Please select at least one clothing type to proceed.");
        return;
      }
    }

    // Proceed to next step
    if (step < 10) {
      setIsTyping(true);
      setTimeout(() => {
        setStep(prev => prev + 1);
        setIsTyping(false);
      }, 700);
    }
  };

  // Multiple selection handlers
  const toggleShoppingFor = (item: string) => {
    setError("");
    setFormData(prev => {
      const shoppingFor = prev.shoppingFor.includes(item)
        ? prev.shoppingFor.filter(i => i !== item)
        : [...prev.shoppingFor, item];
      // Reset categories since selections changed
      return { ...prev, shoppingFor, categories: [] };
    });
  };

  const toggleCategory = (item: string) => {
    setError("");
    setFormData(prev => {
      const categories = prev.categories.includes(item)
        ? prev.categories.filter(c => c !== item)
        : [...prev.categories, item];
      return { ...prev, categories };
    });
  };

  const toggleColour = (item: string) => {
    setError("");
    setFormData(prev => {
      const colours = prev.colours.includes(item)
        ? prev.colours.filter(c => c !== item)
        : [...prev.colours, item];
      return { ...prev, colours };
    });
  };

  const selectSingleValue = (field: keyof FormData, value: string) => {
    setError("");
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Rule-based dynamic recommendation analyzer (emoji-free)
  const getAISuggestion = () => {
    const occasionLower = formData.occasion.toLowerCase();
    const notesLower = formData.notes.toLowerCase();
    const categoryStr = formData.categories.join(" ").toLowerCase();

    if (occasionLower.includes("wedding")) {
      return "Based on your occasion, we highly recommend checking out our rich heritage Silk Sarees & traditional designer Veshtis in-store!";
    }
    if (occasionLower.includes("festival")) {
      return "For the festive season, we suggest exploring our bright designer Kurtis & kids ethnic collections in-showroom.";
    }
    if (occasionLower.includes("birthday")) {
      return "Celebrating a birthday? We suggest checking out our adorable party gowns for kids and premium casual shirts for men.";
    }
    if (notesLower.includes("office") || notesLower.includes("college") || categoryStr.includes("formal")) {
      return "For everyday office or college wear, we suggest our breathable cotton shirts and tailored linen palazzos.";
    }
    if (notesLower.includes("casual") || notesLower.includes("daily") || categoryStr.includes("t-shirts")) {
      return "Looking for daily comfort? Check out our premium combed-cotton T-shirts and stretch jeans.";
    }
    if (notesLower.includes("cotton")) {
      return "We specialize in pure cotton kurtis and shirts sourced directly from local weavers for ultimate hot weather comfort.";
    }
    return null;
  };

  const suggestion = getAISuggestion();

  // WhatsApp click-to-chat generator (completely emoji-free)
  const getWhatsAppURL = () => {
    const message = `Hello Kanmani Readymades,

I would like assistance with shopping. Here is my request:

Customer Name: ${formData.name}
Mobile Number: ${formData.phone}
Shopping For: ${formData.shoppingFor.join(", ")}
Categories: ${formData.categories.join(", ")}
Preferred Size: ${formData.size || "Not Specified"}
Preferred Colours: ${formData.colours.join(", ")}${formData.customColour ? ` (${formData.customColour})` : ""}
Budget Range: ${formData.budget || "Not Specified"}
Needed By: ${formData.occasion || "Not Specified"}
Additional Preferences: ${formData.notes || "None"}

Please help me find the best available options. Thank you!`;

    return `https://wa.me/918428858856?text=${encodeURIComponent(message)}`;
  };

  const getShoppingForIcon = (item: string) => {
    switch (item) {
      case "Women":
        return <Gem size={22} className="text-primary" />;
      case "Men":
        return <Shirt size={22} className="text-primary" />;
      case "Kids":
        return <Baby size={22} className="text-primary" />;
      case "Family":
        return <Users size={22} className="text-primary" />;
      default:
        return null;
    }
  };

  const renderActiveInput = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col gap-3 w-full animate-fade-in">
            <input
              type="text"
              id="ai-assistant-name"
              name="name"
              aria-label="Your Name"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={(e) => {
                setError("");
                setFormData(prev => ({ ...prev, name: e.target.value }));
              }}
              onKeyDown={(e) => e.key === "Enter" && validateAndNext()}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              autoFocus
            />
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col gap-3 w-full animate-fade-in">
            <input
              type="tel"
              id="ai-assistant-phone"
              name="phone"
              aria-label="Phone Number"
              maxLength={10}
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={(e) => {
                setError("");
                const val = e.target.value.replace(/\D/g, "");
                setFormData(prev => ({ ...prev, phone: val }));
              }}
              onKeyDown={(e) => e.key === "Enter" && validateAndNext()}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm font-mono"
              autoFocus
            />
          </div>
        );

      case 3:
        return (
          <div className="grid grid-cols-2 gap-3 w-full animate-fade-in">
            {["Women", "Men", "Kids", "Family"].map((item) => {
              const selected = formData.shoppingFor.includes(item);
              return (
                <button
                  key={item}
                  onClick={() => toggleShoppingFor(item)}
                  className={`p-4 rounded-xl border text-center transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center gap-2 ${
                    selected
                      ? "border-primary bg-primary/5 text-primary shadow-sm ring-1 ring-primary"
                      : "border-gray-200 bg-white/60 hover:bg-white text-foreground"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    {getShoppingForIcon(item)}
                  </div>
                  <span className="text-xs font-bold font-body">{item}</span>
                </button>
              );
            })}
          </div>
        );

      case 4:
        const availableOptions = formData.shoppingFor.flatMap(
          (person) => categoryOptions[person] || []
        );
        const uniqueOptions = Array.from(new Set(availableOptions));

        return (
          <div className="flex flex-wrap gap-2 w-full max-h-[180px] overflow-y-auto pr-1 animate-fade-in">
            {uniqueOptions.map((cat) => {
              const selected = formData.categories.includes(cat);
              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`px-4 py-2 rounded-full border text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                    selected
                      ? "border-primary bg-primary/5 text-primary shadow-sm"
                      : "border-gray-200 bg-white/60 hover:bg-white text-foreground/80"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        );

      case 5:
        return (
          <div className="flex flex-wrap gap-2 w-full animate-fade-in">
            {sizes.map((size) => {
              const selected = formData.size === size;
              return (
                <button
                  key={size}
                  onClick={() => selectSingleValue("size", size)}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all duration-200 ${
                    selected
                      ? "border-primary bg-primary/5 text-primary shadow-sm"
                      : "border-gray-200 bg-white/60 hover:bg-white text-foreground/80"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        );

      case 6:
        return (
          <div className="flex flex-col gap-3 w-full animate-fade-in">
            <div className="flex flex-wrap gap-2">
              {colorOptions.map((color) => {
                const selected = formData.colours.includes(color);
                return (
                  <button
                    key={color}
                    onClick={() => toggleColour(color)}
                    className={`px-4 py-2 rounded-full border text-xs font-semibold uppercase transition-all duration-200 ${
                      selected
                        ? "border-primary bg-primary/5 text-primary shadow-sm"
                        : "border-gray-200 bg-white/60 hover:bg-white text-foreground/80"
                    }`}
                  >
                    {color}
                  </button>
                );
              })}
            </div>
            {formData.colours.includes("Custom") && (
              <input
                type="text"
                id="ai-assistant-custom-colour"
                aria-label="Custom Colour"
                placeholder="Enter custom colour name..."
                value={formData.customColour}
                onChange={(e) => setFormData(prev => ({ ...prev, customColour: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white/50 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                autoFocus
              />
            )}
          </div>
        );

      case 7:
        return (
          <div className="grid grid-cols-2 gap-2.5 w-full animate-fade-in">
            {budgets.map((budget) => {
              const selected = formData.budget === budget;
              return (
                <button
                  key={budget}
                  onClick={() => selectSingleValue("budget", budget)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all duration-200 hover:scale-[1.01] ${
                    selected
                      ? "border-primary bg-primary/5 text-primary shadow-sm"
                      : "border-gray-200 bg-white/60 hover:bg-white text-foreground/80"
                  }`}
                >
                  {budget}
                </button>
              );
            })}
          </div>
        );

      case 8:
        return (
          <div className="flex flex-wrap gap-2 w-full animate-fade-in">
            {occasions.map((occ) => {
              const selected = formData.occasion === occ;
              return (
                <button
                  key={occ}
                  onClick={() => selectSingleValue("occasion", occ)}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all duration-200 ${
                    selected
                      ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                      : "border-gray-200 bg-white/60 hover:bg-white text-foreground/80"
                  }`}
                >
                  {occ}
                </button>
              );
            })}
          </div>
        );

      case 9:
        return (
          <div className="flex flex-col gap-3 w-full animate-fade-in">
            <div className="flex flex-wrap gap-1.5 max-h-[75px] overflow-y-auto">
              {noteSuggestions.map((sug) => (
                <button
                  key={sug}
                  onClick={() => {
                    setFormData(prev => {
                      const notes = prev.notes
                        ? prev.notes.includes(sug)
                          ? prev.notes
                          : `${prev.notes}, ${sug}`
                        : sug;
                      return { ...prev, notes };
                    });
                  }}
                  className="px-2.5 py-1 rounded bg-gray-100 hover:bg-gray-200 border border-gray-200 text-[10px] uppercase font-bold tracking-wider text-foreground/75"
                >
                  + {sug}
                </button>
              ))}
            </div>
            <textarea
              id="ai-assistant-notes"
              aria-label="Additional requirements or notes"
              rows={2}
              placeholder="e.g. Pure cotton fabric, floral print, conservative cut..."
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              autoFocus
            />
          </div>
        );

      default:
        return null;
    }
  };

  const getBotQuestionText = () => {
    switch (step) {
      case 1:
        return "Hi there! I'd love to help you find the perfect outfit. What should I call you?";
      case 2:
        return `Nice to meet you, ${formData.name}! May I have your 10-digit mobile number so we can save your request?`;
      case 3:
        return "Great! Who are we shopping for today? Feel free to select multiple options if needed.";
      case 4:
        return "Excellent selection. What type of clothing are you looking for? Pick as many as you like.";
      case 5:
        return "Got it. What is your preferred clothing size?";
      case 6:
        return "Any favourite colours you'd like us to look for? Select multiple, or select Custom to write your own.";
      case 7:
        return "Perfect. What approximate budget range are you looking at?";
      case 8:
        return "And when do you need this outfit by?";
      case 9:
        return "Lastly, are there any other preferences? (fabric types, style keywords, or fit requirements)";
      default:
        return "";
    }
  };

  return (
    <>
      {/* 1. Floating Circular AI Button (With scroll-responsive scale and opacity) */}
      <button
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={`fixed bottom-6 right-6 z-[40] flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-gold via-accent to-gold-light text-foreground shadow-[0_8px_30px_rgba(212,175,55,0.35)] border border-gold/40 active:scale-95 hover:scale-105 hover:opacity-100 transition-all duration-300 group ${
          scrolled ? "opacity-50 scale-90" : "opacity-100 scale-100"
        }`}
        aria-label="AI Fashion Assistant"
      >
        <span className="absolute inset-0 rounded-full bg-gold/25 animate-ping pointer-events-none" />
        <Bot size={28} className="text-foreground shrink-0" />
        
        {/* Tooltip */}
        <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-black/85 text-white text-xs font-bold whitespace-nowrap shadow-lg select-none pointer-events-none border border-white/10">
          AI Fashion Assistant
        </span>
      </button>

      {/* 2. Chatbot Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-white/95 dark:bg-zinc-900/95 border border-white/20 rounded-3xl shadow-2xl max-w-md w-full h-[80vh] flex flex-col overflow-hidden animate-scale-in relative">
            
            {/* Header */}
            <div className="maroon-gradient text-white px-6 py-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/25 flex items-center justify-center border border-gold/30">
                  <Bot size={22} className="text-gold" />
                </div>
                <div className="text-left">
                  <h3 className="font-heading font-bold text-sm tracking-wide text-white">
                    Kanmani AI Assistant
                  </h3>
                  <span className="text-[10px] font-bold text-gold uppercase tracking-widest block">
                    Fashion Consultant
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                aria-label="Close Assistant"
              >
                <X size={20} />
              </button>
            </div>

            {/* Progress Bar (Only visible during step 1..9) */}
            {step > 0 && step <= 9 && (
              <div className="w-full bg-secondary/50 h-1.5 relative border-b border-gray-100">
                <div
                  className="gold-gradient h-full transition-all duration-300 rounded-r"
                  style={{ width: `${(step / 9) * 100}%` }}
                />
                <span className="absolute right-3 top-2.5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                  Step {step} of 9
                </span>
              </div>
            )}

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 flex flex-col justify-start">
              
              {/* Step 0: Welcome Screen (Emoji-free) */}
              {step === 0 && (
                <div className="my-auto py-6 text-center space-y-6 animate-fade-in flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-2 animate-bounce">
                    <Sparkles size={48} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-extrabold text-foreground mb-2">
                      Welcome to Kanmani
                    </h2>
                    <p className="text-muted-foreground font-body text-sm max-w-xs mx-auto leading-relaxed">
                      I'm your AI Fashion Assistant. I'll help you find the perfect clothing for your family's needs in less than a minute. Let's get started.
                    </p>
                  </div>
                  <button
                    onClick={handleStart}
                    className="px-8 py-3.5 gold-gradient text-foreground font-body font-bold text-sm tracking-widest uppercase rounded-full shadow-md hover:scale-[1.02] hover:shadow-gold/20 active:scale-95 transition-all duration-300 mt-4"
                  >
                    Start Shopping
                  </button>
                </div>
              )}

              {/* Steps 1 to 9: Conversational bubbles */}
              {step > 0 && step <= 9 && (
                <div className="space-y-4 text-left w-full">
                  <div className="space-y-4">
                    {/* Active Bot bubble */}
                    <div className="flex gap-3 items-start animate-fade-in">
                      <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                        <Bot size={16} className="text-primary" />
                      </div>
                      <div className="p-3.5 rounded-2xl rounded-tl-none bg-secondary/80 text-foreground font-body text-sm leading-relaxed max-w-[85%]">
                        {getBotQuestionText()}
                      </div>
                    </div>

                    {/* Bot Typing indicator */}
                    {isTyping && (
                      <div className="flex gap-3 items-start animate-pulse">
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                          <Bot size={16} className="text-primary" />
                        </div>
                        <div className="p-3 px-4 rounded-full bg-secondary/80 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]" />
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]" />
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 10: Summary & Confirmation Screen */}
              {step === 10 && (
                <div className="space-y-6 w-full animate-fade-in text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
                    <h4 className="font-heading text-lg font-bold text-foreground">
                      Shopping Request Prepared
                    </h4>
                  </div>
                  
                  {/* Summary Card */}
                  <div className="p-5 rounded-2xl bg-secondary/50 border border-gray-100 space-y-3 font-body text-xs leading-relaxed max-h-[30vh] overflow-y-auto">
                    <div className="grid grid-cols-3 border-b border-gray-200/50 pb-2">
                      <span className="font-bold text-muted-foreground uppercase tracking-wider text-[9px]">Name</span>
                      <span className="col-span-2 font-bold text-foreground">{formData.name}</span>
                    </div>
                    <div className="grid grid-cols-3 border-b border-gray-200/50 pb-2">
                      <span className="font-bold text-muted-foreground uppercase tracking-wider text-[9px]">Mobile</span>
                      <span className="col-span-2 font-mono font-bold text-foreground">{formData.phone}</span>
                    </div>
                    <div className="grid grid-cols-3 border-b border-gray-200/50 pb-2">
                      <span className="font-bold text-muted-foreground uppercase tracking-wider text-[9px]">Shopping For</span>
                      <span className="col-span-2 text-foreground font-semibold">{formData.shoppingFor.join(", ")}</span>
                    </div>
                    <div className="grid grid-cols-3 border-b border-gray-200/50 pb-2">
                      <span className="font-bold text-muted-foreground uppercase tracking-wider text-[9px]">Category</span>
                      <span className="col-span-2 text-foreground font-semibold">{formData.categories.join(", ")}</span>
                    </div>
                    <div className="grid grid-cols-3 border-b border-gray-200/50 pb-2">
                      <span className="font-bold text-muted-foreground uppercase tracking-wider text-[9px]">Size</span>
                      <span className="col-span-2 text-foreground font-semibold">{formData.size || "Not Sure"}</span>
                    </div>
                    <div className="grid grid-cols-3 border-b border-gray-200/50 pb-2">
                      <span className="font-bold text-muted-foreground uppercase tracking-wider text-[9px]">Colours</span>
                      <span className="col-span-2 text-foreground font-semibold">{formData.colours.join(", ")}{formData.customColour ? ` (${formData.customColour})` : ""}</span>
                    </div>
                    <div className="grid grid-cols-3 border-b border-gray-200/50 pb-2">
                      <span className="font-bold text-muted-foreground uppercase tracking-wider text-[9px]">Budget</span>
                      <span className="col-span-2 text-foreground font-semibold">{formData.budget}</span>
                    </div>
                    <div className="grid grid-cols-3 border-b border-gray-200/50 pb-2">
                      <span className="font-bold text-muted-foreground uppercase tracking-wider text-[9px]">Needed By</span>
                      <span className="col-span-2 text-foreground font-semibold">{formData.occasion}</span>
                    </div>
                    {formData.notes && (
                      <div className="grid grid-cols-3">
                        <span className="font-bold text-muted-foreground uppercase tracking-wider text-[9px]">Preferences</span>
                        <span className="col-span-2 text-foreground italic">{formData.notes}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our AI Assistant has prepared your shopping request. Our team will help you find the best available options. Click below to submit this directly to our Co-Founder.
                  </p>

                  {/* Actions */}
                  <div className="space-y-3 pt-2">
                    <a
                      href={getWhatsAppURL()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 gold-gradient hover:shadow-gold/25 hover:scale-[1.01] text-foreground font-body font-bold text-xs uppercase tracking-widest rounded-full transition-all"
                    >
                      <MessageCircle size={18} className="shrink-0" /> Send to Co-Founder
                    </a>
                    <a
                      href="https://chat.whatsapp.com/Bm38uRwXixgDqAUdpaFfGt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-primary/25 text-primary hover:bg-primary/5 font-body font-semibold text-xs uppercase tracking-widest rounded-full transition-all"
                    >
                      <Users size={18} className="shrink-0" /> Join Fashion Updates
                    </a>
                  </div>
                </div>
              )}

              {/* Dynamic rule-based AI Suggestion Panel (Visible when triggered in active step) */}
              {step > 0 && step <= 9 && suggestion && !isTyping && (
                <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 text-gold-dark dark:text-gold-light space-y-1.5 text-xs animate-fade-in mt-4">
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
                    <Sparkles size={14} className="text-gold" /> AI Recommendation
                  </div>
                  <p className="leading-relaxed font-body font-medium">{suggestion}</p>
                </div>
              )}

              {/* Bottom scroll anchor */}
              <div ref={chatEndRef} />
            </div>

            {/* Error Message banner */}
            {error && (
              <div className="px-6 py-2.5 bg-red-50 border-y border-red-100 text-red-600 text-xs font-semibold text-left animate-fade-in shrink-0 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-red-500 shrink-0" /> {error}
              </div>
            )}

            {/* Footer with Controls (Hide on Welcome and Summary screen) */}
            {step > 0 && step <= 9 && (
              <div className="p-4 border-t border-gray-100 bg-[#FAFAFA]/95 flex flex-col gap-4 shrink-0">
                
                {/* Active question input widget */}
                {!isTyping && (
                  <div className="w-full text-left">
                    {renderActiveInput()}
                  </div>
                )}

                {/* Footer back/next action buttons */}
                <div className="flex items-center justify-between gap-3 w-full">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-1 px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                  <button
                    onClick={validateAndNext}
                    disabled={isTyping}
                    className="px-6 py-2.5 maroon-gradient text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md flex items-center gap-1.5 hover:scale-[1.02] active:scale-95 disabled:opacity-50 transition-all"
                  >
                    {step === 9 ? "Finish" : "Next"} <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
