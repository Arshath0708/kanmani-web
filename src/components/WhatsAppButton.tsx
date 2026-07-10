import { MessageCircle, Users } from "lucide-react";
import { useLocation } from "react-router-dom";

const WhatsAppButton = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  
  const phoneNumber = "918428858856";
  const directMessage = encodeURIComponent("Hello! I have a product enquiry / support request about Kanmani Readymades.");
  
  const link = isContactPage
    ? `https://wa.me/${phoneNumber}?text=${directMessage}`
    : "https://chat.whatsapp.com/Bm38uRwXixgDqAUdpaFfGt";

  const label = isContactPage ? "Chat on WhatsApp" : "Join Fashion Updates";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-[104px] z-[40] flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label={label}
      title={label}
    >
      {isContactPage ? (
        <MessageCircle size={28} fill="currentColor" />
      ) : (
        <Users size={24} className="text-white animate-pulse" />
      )}
    </a>
  );
};

export default WhatsAppButton;
