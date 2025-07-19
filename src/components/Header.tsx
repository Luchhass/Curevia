"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="bg-white shadow-md px-5 py-6 md:px-8 fixed w-full top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto relative z-50">
          <Link href="/" className="text-xl font-bold text-[#0066CC]">
            CUREVIA
          </Link>

          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-md hover:text-[#0066CC] transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex space-x-8 py-2">
            <Link
              href="/"
              className={`transition duration-200 font-medium ${
                isActive("/") ? "text-[#0066CC]" : "text-gray-700"
              } hover:text-[#0066CC]`}
            >
              Home
            </Link>
            <Link
              href="/clinics"
              className={`transition duration-200 font-medium ${
                isActive("/clinics") ? "text-[#0066CC]" : "text-gray-700"
              } hover:text-[#0066CC]`}
            >
              Clinics
            </Link>
          </nav>
        </div>

        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0 max-h-96 pointer-events-auto"
              : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
          }`}
          style={{ top: "100%" }}
        >
          <nav className="px-6 py-6">
            <div className="space-y-4">
              <Link
                href="/"
                onClick={toggleMenu}
                className={`block text-lg font-medium transition duration-200 ${
                  isActive("/") ? "text-[#0066CC]" : "text-gray-700"
                } hover:text-[#0066CC] hover:bg-blue-50 px-3 py-2 rounded-lg`}
              >
                Home
              </Link>
              <Link
                href="/clinics"
                onClick={toggleMenu}
                className={`block text-lg font-medium transition duration-200 ${
                  isActive("/clinics") ? "text-[#0066CC]" : "text-gray-700"
                } hover:text-[#0066CC] hover:bg-blue-50 px-3 py-2 rounded-lg`}
              >
                Clinics
              </Link>
            </div>
          </nav>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#0066CC]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
                  <p className="text-sm text-gray-800 font-semibold">
                    +90 532 123 45 67
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#0066CC]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Email</p>
                  <p className="text-sm text-gray-800 font-semibold">
                    info@curevia.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/clinics"
                onClick={toggleMenu}
                className="w-full bg-[#0066CC] hover:bg-[#0052a3] text-white text-center py-2.5 rounded-lg font-semibold transition duration-200 block"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={toggleMenu}
          style={{ top: "88px" }}
        />
      )}
    </>
  );
}
