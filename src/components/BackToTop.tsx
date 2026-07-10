import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 z-[40] flex items-center justify-center w-12 h-12 rounded-full glass-btn text-gold shadow-lg hover:shadow-gold/10 hover:border-gold border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 group ${
        isVisible
          ? "bottom-[104px] opacity-100 scale-100"
          : "bottom-[80px] opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Back to Top"
    >
      <ArrowUp
        size={20}
        className="transition-transform duration-300 group-hover:-translate-y-1"
      />
    </button>
  );
};

export default BackToTop;
