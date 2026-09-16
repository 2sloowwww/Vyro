import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./whatsapp-icon";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi VYRO, I'd like to place an order.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      data-cursor-hover
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
