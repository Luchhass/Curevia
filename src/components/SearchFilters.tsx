"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdCategory } from "react-icons/md";
import { FaCity } from "react-icons/fa";

type Props = {
  categories: string[];
  cities: string[];
  onFilterChange: (filters: {
    category: string;
    city: string;
    search: string;
  }) => void;
};

export default function SearchFilters({
  categories,
  cities,
  onFilterChange,
}: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  function handleFilterChange() {
    onFilterChange({ category, city, search });
  }

  return (
    <div className="w-full bg-[#0066CC] py-6 px-5 sm:px-10 mb-6 flex flex-col gap-4 mx-auto">
      <div className="relative flex items-center w-full max-w-7xl mx-auto">
        <FiSearch
          className="absolute left-3 text-gray-400 pointer-events-none"
          size={20}
        />
        <input
          type="text"
          placeholder="Search clinic name or city..."
          className="bg-white border border-gray-300 rounded-md p-3 pl-10 w-full
                 focus:outline-none focus:ring-2 focus:ring-blue-300
                 transition duration-200"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      <div className="flex gap-4 w-full max-w-7xl mx-auto">
        <div className="relative flex items-center flex-grow">
          <MdCategory
            className="absolute left-3 text-gray-400 pointer-events-none"
            size={20}
          />
          <select
            className="bg-white border border-gray-300 rounded-md p-3 pl-10 w-full
                   focus:outline-none focus:ring-2 focus:ring-blue-300
                   transition duration-200"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              handleFilterChange();
            }}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="relative flex items-center flex-grow">
          <FaCity
            className="absolute left-3 text-gray-400 pointer-events-none"
            size={20}
          />
          <select
            className="bg-white border border-gray-300 rounded-md p-3 pl-10 w-full
                   focus:outline-none focus:ring-2 focus:ring-blue-300
                   transition duration-200"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              handleFilterChange();
            }}
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
