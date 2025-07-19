"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
          <Link href="/" className="text-xl font-bold">
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

          <nav className="hidden md:flex space-x-6 py-2">
            <Link
              href="/"
              className={`transition duration-200 ${
                isActive("/") ? "text-[#0066CC]" : "text-gray-700"
              } hover:underline`}
            >
              Home
            </Link>
            <Link
              href="/clinics"
              className={`transition duration-200 ${
                isActive("/clinics") ? "text-[#0066CC]" : "text-gray-700"
              } hover:underline`}
            >
              Clinics
            </Link>
          </nav>
        </div>

        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0 max-h-96 pointer-events-auto"
              : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
          }`}
          style={{ top: "100%" }}
        >
          <nav className="flex flex-col gap-2 px-5 py-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className={`transition duration-200 ${
                isActive("/") ? "text-[#0066CC]" : "text-gray-700"
              } hover:underline`}
            >
              Home
            </Link>
            <Link
              href="/clinics"
              onClick={toggleMenu}
              className={`transition duration-200 ${
                isActive("/clinics") ? "text-[#0066CC]" : "text-gray-700"
              } hover:underline`}
            >
              Clinics
            </Link>
          </nav>

          <div className="px-5 pb-4 mt-3 border-t pt-4 space-y-3">
            <div>
              <p className="text-[#0066CC] font-medium">WhatsApp</p>
              <p className="text-black font-medium">+90 532 123 45 67</p>
            </div>
            <div>
              <p className="text-[#0066CC] font-medium">Mail</p>
              <p className="text-black font-medium">info@curevia.com</p>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
          style={{ top: "88px" }}
        />
      )}
    </>
  );
}
