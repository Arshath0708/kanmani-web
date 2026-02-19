import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "918428858856";
  const message = encodeURIComponent("Hello! I'd like to enquire about your collections at Kanmani Readymades.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
