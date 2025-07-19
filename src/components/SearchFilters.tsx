"use client";

import { useState, useEffect } from "react";

type Props = {
  categories: string[];
  cities: string[];
  onFilterChange: (filters: {
    category: string;
    city: string;
    search: string;
  }) => void;
};

// SVG icons
const SearchIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const CategoryIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
    />
  </svg>
);

const CityIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

export default function SearchFilters({
  categories,
  cities,
  onFilterChange,
}: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onFilterChange({ category, city, search });
    }, 300);

    return () => clearTimeout(timer);
  }, [category, city, search]);

  return (
    <div className="w-full bg-[#0066CC] py-6 px-5 sm:px-10 mb-6 flex flex-col gap-4 mx-auto max-w-7xl">
      <div className="relative w-full">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search clinic name or city..."
          className="bg-white border border-gray-300 rounded-md p-3 pl-10 w-full
                     focus:outline-none focus:ring-2 focus:ring-blue-300
                     transition duration-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search clinics"
        />
      </div>

      <div className="flex gap-4 w-full">
        <div className="relative flex-grow">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <CategoryIcon />
          </div>
          <select
            className="bg-white border border-gray-300 rounded-md p-3 pl-10 w-full
                       focus:outline-none focus:ring-2 focus:ring-blue-300
                       transition duration-200"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by category"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="relative flex-grow">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <CityIcon />
          </div>
          <select
            className="bg-white border border-gray-300 rounded-md p-3 pl-10 w-full
                       focus:outline-none focus:ring-2 focus:ring-blue-300
                       transition duration-200"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            aria-label="Filter by city"
          >
            <option value="">All Cities</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
