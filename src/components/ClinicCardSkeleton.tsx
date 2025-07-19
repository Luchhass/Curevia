export default function ClinicCardSkeleton() {
  return (
    <div
      className="block rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white animate-pulse p-4 sm:p-5 w-full max-w-xs sm:max-w-sm"
      role="status"
      aria-label="Klinik kartı yükleniyor..."
    >
      {/* Klinik Görseli */}
      <div className="bg-gray-300 h-40 sm:h-48 rounded-xl mb-4 sm:mb-5 w-full"></div>

      {/* Klinik Adı */}
      <div className="h-6 sm:h-7 bg-gray-300 rounded w-3/4 mb-3"></div>

      {/* Konum */}
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>

      {/* Yıldız Değerlendirmesi */}
      <div
        className="flex items-center space-x-2 mb-3"
        role="img"
        aria-label="Yıldız değerlendirmesi"
      >
        <div className="w-4 h-4 bg-yellow-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-10"></div>
        <div className="h-4 bg-gray-300 rounded w-6 ml-2"></div>
      </div>

      {/* Kategori Badge */}
      <div className="inline-block bg-gray-300 rounded-full h-6 w-20 mb-3"></div>

      {/* Fiyat */}
      <div className="h-5 bg-gray-300 rounded w-1/3 mb-3"></div>

      {/* Açıklama - İlk Satır */}
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>

      {/* Açıklama - İkinci Satır */}
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
  );
}
