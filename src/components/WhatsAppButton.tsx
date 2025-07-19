"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+901112223344";

  return (
    <a
      href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-[#00CC66] hover:bg-[#00b355] text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
      aria-label="WhatsApp ile iletişim"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}
