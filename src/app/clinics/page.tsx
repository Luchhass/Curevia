"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import ClinicCard from "@/components/ClinicCard";
import ClinicCardSkeleton from "@/components/ClinicCardSkeleton";
import SearchFilters from "@/components/SearchFilters";
import { clinics } from "@/lib/data";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export default function ClinicsPage() {
  const categories = Array.from(new Set(clinics.map((c) => c.category)));
  const cities = Array.from(new Set(clinics.map((c) => c.city)));

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    city: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const filteredClinics = useMemo(() => {
    return clinics.filter((clinic) => {
      const searchText = filters.search.toLowerCase();

      const matchesSearch =
        clinic.name.toLowerCase().includes(searchText) ||
        clinic.city.toLowerCase().includes(searchText);

      const matchesCategory = filters.category
        ? clinic.category === filters.category
        : true;

      const matchesCity = filters.city ? clinic.city === filters.city : true;

      return matchesSearch && matchesCategory && matchesCity;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredClinics.length / itemsPerPage);

  const paginatedClinics = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredClinics.slice(start, start + itemsPerPage);
  }, [filteredClinics, currentPage]);

  return (
    <>
      <SearchFilters
        categories={categories}
        cities={cities}
        onFilterChange={setFilters}
      />

      <nav className="max-w-7xl mx-auto px-5 mt-4 text-sm flex items-center justify-between">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:underline text-[#0066CC]">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-700 font-medium" aria-current="page">
            Clinics
          </li>
        </ol>

        <div className="flex items-center space-x-3">
          <a
            href="https://wa.me/905551112233"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="p-2 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-green-600"
          >
            <FaWhatsapp size={22} aria-hidden="true" />
            <span className="sr-only">WhatsApp</span>
          </a>

          <a
            href="mailto:info@klinik.com"
            title="Email"
            className="p-2 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-blue-600"
          >
            <AiOutlineMail size={22} aria-hidden="true" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-5">
        <section className="bg-[#ccfae5] border-blue-100 rounded-xl p-6 max-w-full mt-6 mb-10 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-[#00CC66] text-center mb-2">
            Get Free Quotes from Hundreds of Clinics, Doctors, and Hospitals!
          </h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto text-sm sm:text-base">
            Simply fill out the form in a few easy steps to receive the best
            healthcare solution tailored to your needs.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading ? (
            [...Array(5)].map((_, i) => <ClinicCardSkeleton key={i} />)
          ) : paginatedClinics.length > 0 ? (
            paginatedClinics.map((clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No clinics found matching the filters.
            </p>
          )}
        </div>

        {!isLoading && totalPages > 1 && (
          <div
            className="mt-8 mb-4 flex justify-center gap-2"
            role="navigation"
            aria-label="Pagination Navigation"
          >
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                aria-label={`Go to page ${index + 1}`}
                className={`px-4 py-2 text-sm font-medium rounded-xl border shadow-sm transition-all duration-200
                  ${
                    currentPage === index + 1
                      ? "bg-[#0066CC] text-white border-[#0066CC]"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
