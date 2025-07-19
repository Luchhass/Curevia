import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0066CC] py-10 px-5">
      <div className="max-w-7xl mx-auto text-center text-white flex flex-col gap-6 items-center">
        {/* Brand Logo/Title */}
        <div
          className="text-3xl sm:text-4xl font-extrabold tracking-wide"
          role="banner"
        >
          CUREVIA CLINICS
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 sm:space-y-0 space-y-2 text-lg">
          <div className="flex items-center justify-center gap-2">
            <Phone size={20} aria-hidden="true" />
            <a
              href="tel:+905061234567"
              className="underline hover:text-gray-300 transition-colors duration-200"
              aria-label="Telefon numarasını ara: +90 506 123 45 67"
            >
              +90 506 123 45 67
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Mail size={20} aria-hidden="true" />
            <a
              href="mailto:info@curevia.com"
              className="underline hover:text-gray-300 transition-colors duration-200"
              aria-label="E-posta gönder: info@curevia.com"
            >
              info@curevia.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Curevia Clinics. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
