import { Clinic } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

type Props = {
  clinic: Clinic;
};

export default function ClinicCard({ clinic }: Props) {
  return (
    <Link
      href={`/clinic/${clinic.id}`}
      className="block rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={clinic.image}
          alt={clinic.name}
          width={400}
          height={200}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{clinic.name}</h3>

        <p className="text-sm text-gray-600 mb-1">
          {clinic.city} - {clinic.district}
        </p>

        <div className="flex items-center text-sm text-yellow-500 mb-1">
          <Star className="w-4 h-4 fill-yellow-400 mr-1" />
          {clinic.rating}{" "}
          <span className="text-gray-500 ml-1">({clinic.reviewCount})</span>
        </div>

        <span className="inline-block bg-blue-100 text-[#0066CC] text-xs px-2 py-1 rounded-full mb-2">
          {clinic.category}
        </span>

        <p className="text-sm font-medium text-gray-800">{clinic.priceRange}</p>

        {clinic.description && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {clinic.description}
          </p>
        )}
      </div>
    </Link>
  );
}
