import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0066CC] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">CUREVIA CLINICS</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We offer the highest quality healthcare services with experienced
              doctors and the most advanced technologies that modern medicine
              provides.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Our Doctors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  General Check-up
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Cardiology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Internal Medicine
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Eye Diseases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Laboratory
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Radiology
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Contact Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  className="text-blue-400 mt-1 flex-shrink-0"
                  size={16}
                />
                <p className="text-gray-300 text-sm">
                  Merkez Mah. Sağlık Cad. No:123
                  <br />
                  Şişli / Istanbul
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={16} />
                <a
                  href="tel:+905061234567"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  +90 506 123 45 67
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={16} />
                <a
                  href="mailto:info@curevia.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  info@curevia.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Working Hours:</p>
                  <p>Monday - Friday: 08:00 - 18:00</p>
                  <p>Saturday: 09:00 - 15:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Curevia Clinics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                GDPR
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
