import { clinics } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return clinics.map((clinic) => ({
    id: clinic.id.toString(),
  }));
}

export default async function ClinicPage({ params }: Props) {
  const { id } = await params;
  const clinic = clinics.find((c) => c.id.toString() === id);

  if (!clinic) return notFound();

  return (
    <>
      <nav className="max-w-5xl mx-auto p-4 text-sm text-gray-600">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="text-[#0066CC] hover:underline">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/clinics" className="text-[#0066CC] hover:underline">
              Clinics
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-800 font-medium truncate max-w-[200px]">
            {clinic.name}
          </li>
        </ol>
      </nav>

      <main className="max-w-5xl mx-auto p-4 md:p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{clinic.name}</h1>
          <div className="flex items-center text-yellow-500 mt-2">
            <Star className="w-5 h-5 fill-yellow-400 mr-1" />
            <span className="text-lg font-semibold">{clinic.rating}</span>
            <span className="text-sm text-gray-600 ml-2">
              ({clinic.reviewCount} reviews)
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {clinic.city} / {clinic.district} · Category:{" "}
            <span className="font-medium">{clinic.category}</span>
          </p>
        </header>

        <div className="rounded-xl overflow-hidden mb-6 shadow">
          <Image
            src={clinic.image}
            alt={clinic.name}
            width={1000}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-[#0066CC] mb-2">
            About the Clinic
          </h2>
          <p className="text-gray-700 leading-relaxed">{clinic.description}</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {clinic.services.map((service) => (
              <div
                key={service.name}
                className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition"
              >
                <h3 className="text-lg font-medium text-[#0066CC]">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {service.priceRange}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#0066CC] mb-1">
              Accreditations
            </h3>
            <ul className="flex flex-wrap gap-2">
              {clinic.accreditations.map((acc) => (
                <li
                  key={acc}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {acc}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-1">
              Languages Spoken
            </h3>
            <p className="text-sm text-gray-700">
              {clinic.languages.join(", ")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-1">
              Specialties
            </h3>
            <ul className="flex flex-wrap gap-2">
              {clinic.specialties.map((s) => (
                <li
                  key={s}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href={`tel:${clinic.phone}`}
            className="bg-[#FF6B35] hover:bg-[#e55a2d] text-white px-6 py-3 rounded-lg text-center font-semibold transition"
          >
            Call Clinic
          </a>
          <a
            href={`https://wa.me/${clinic.whatsapp.replace(/^\+/, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00CC66] hover:bg-[#00b355] text-white px-6 py-3 rounded-lg text-center font-semibold transition"
          >
            Chat on WhatsApp
          </a>
        </section>
      </main>
    </>
  );
}
