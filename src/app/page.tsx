import { clinics } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const featuredClinics = clinics.slice(0, 6);

  const cities = [...new Set(clinics.map((c) => c.city))];

  const allSpecialties = clinics.flatMap((c) => c.specialties);
  const specialties = [...new Set(allSpecialties)];

  return (
    <main>
      <section className="relative bg-[#0066CC] h-[calc(100vh-88px)] flex flex-col justify-center items-center text-center px-5 py-10 overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg animate-fadeIn">
            Global Health Tourism Clinics
          </h1>
          <p className="text-white text-xl md:text-2xl mb-6 italic drop-shadow-md animate-fadeIn delay-200">
            Turkey&apos;s #1 Leading Health Tourism Platform
          </p>
          <Link
            href="/clinics"
            className="inline-block bg-[#FF6B35] hover:bg-[#e55a2d] text-white font-semibold rounded-md px-8 py-3 shadow-lg transition"
          >
            Make an Appointment Now
          </Link>
        </div>
      </section>

      <section className="bg-[#f7fafd] py-10 px-6">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 w-[292px] md:w-auto mx-auto">
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold text-black">
              {specialties.length}+
            </span>
            <div className="h-6 w-1 bg-[#FF6B35]" />
            <span className="text-[#0066CC] text-base font-medium whitespace-nowrap">
              Operation Services
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold text-black">
              {clinics.length}+
            </span>
            <div className="h-6 w-1 bg-[#FF6B35]" />
            <span className="text-[#0066CC] text-base font-medium whitespace-nowrap">
              Clinics, Doctors and Hospitals
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold text-black">
              {cities.length}+
            </span>
            <div className="h-6 w-1 bg-[#FF6B35]" />
            <span className="text-[#0066CC] text-base font-medium whitespace-nowrap">
              Countries and Cities
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 px-10 bg-gradient-to-b min-h-screen">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Most Popular Clinics Preferred by Patients
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Browse the clinics below to learn more about the treatments they
            offer and the experienced medical professionals they work with.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {featuredClinics.map((clinic) => (
            <Link
              key={clinic.id}
              href={`/clinic/${clinic.id}`}
              className="bg-white rounded-xl shadow-lg flex flex-col transition duration-300 ease-in-out hover:brightness-95 hover:-translate-y-3"
            >
              {clinic.image && (
                <div
                  className="relative w-full h-[200px] overflow-hidden rounded-t-xl"
                  style={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <Image
                    src={clinic.image}
                    alt={clinic.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}

              <div className="p-5 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {clinic.name}
                </h3>
                <p className="text-gray-700 text-center text-sm">
                  {clinic.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full bg-white px-6 sm:px-12 py-16 pt-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              A Platform Connecting Clinics, Doctors, and Hospitals with
              Patients.
            </h2>

            <ul className="space-y-5 mb-6">
              <li className="flex items-start gap-3 text-base sm:text-lg text-gray-800">
                <span className="text-[#00CC66] text-xl mt-1">✔</span>
                Patients search for the treatment or clinic they are looking for
                on our site.
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg text-gray-800">
                <span className="text-[#00CC66] text-xl mt-1">✔</span>
                They contact the clinic that caught their attention.
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg text-gray-800">
                <span className="text-[#00CC66] text-xl mt-1">✔</span>
                After reaching an agreement on price and service.
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg text-gray-800">
                <span className="text-[#00CC66] text-xl mt-1">✔</span>
                They make an appointment and finalize the agreement with the
                clinic.
              </li>
            </ul>

            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              To find an expert and quality clinic for free, all you need to do
              is click the button below and find the clinic that provides the
              best service in the treatment you are looking for.
            </p>

            <div className="flex justify-end">
              <Link
                href="/clinics"
                className="bg-[#FF6B35] hover:bg-[#e55a2d] text-white px-4 py-2 rounded-full text-base font-medium transition-all"
              >
                Discover Clinics →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
