"use client";

import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <section className="bg-[#0066CC] py-10 px-5">
      <div className="max-w-7xl mx-auto text-center text-white flex flex-col gap-6 items-center">
        <h1 className="text-4xl font-extrabold tracking-wide">
          CUREVIA CLINICS
        </h1>

        <div className="flex flex-col space-y-2 text-lg">
          <div className="flex items-center justify-center gap-2">
            <Phone size={20} />
            <a
              href="tel:+905061234567"
              className="underline hover:text-gray-300"
            >
              +90 506 123 45 67
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail size={20} />
            <a
              href="mailto:info@curevia.com"
              className="underline hover:text-gray-300"
            >
              info@curevia.com
            </a>
          </div>
        </div>

        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </section>
  );
}
