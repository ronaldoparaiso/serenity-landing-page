import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const WhatsappFloat = () => {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-soft hover:scale-110 hover:shadow-gold transition-all duration-300 flex items-center justify-center"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-20" />
    </a>
  );
};
