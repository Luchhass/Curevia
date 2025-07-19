export default function ClinicCardSkeleton() {
  return (
    <div
      className="block rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white animate-pulse w-full"
      role="status"
      aria-label="Klinik kartı yükleniyor..."
    >
      <div className="relative w-full h-48 bg-gray-300"></div>
      <div className="p-5">
        <div className="h-7 bg-gray-300 rounded w-3/4 mb-1"></div>
        <div className="h-5 bg-gray-300 rounded w-1/2 mb-1"></div>
        <div className="flex items-center mb-1">
          <div className="w-4 h-4 bg-yellow-300 rounded mr-1"></div>
          <div className="h-5 bg-gray-300 rounded w-8"></div>
          <div className="h-5 bg-gray-300 rounded w-12 ml-1"></div>
        </div>
        <div className="inline-block bg-gray-300 rounded-full h-6 w-20 mb-2"></div>
        <div className="h-5 bg-gray-300 rounded w-1/3"></div>
        <div className="mt-2">
          <div className="h-5 bg-gray-300 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  );
}
