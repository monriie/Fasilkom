const BeritaCard = ({ img, judul,tanggal, featured = false, isPlaceholder = false }) => {
  // Placeholder card untuk "Lihat berita lainnya"
  if (isPlaceholder) {
    return (
      <article className="col-span-1 group cursor-pointer">
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex items-center justify-center h-48 md:h-64 lg:h-80">
          <div className="text-center">
            <h3 className="text-sm md:text-lg lg:text-xl font-semibold">
              Lihat berita lainnya
            </h3>
          </div>
        </div>
      </article>
    );
  }

  if (featured) {
    return (
      <article className="col-span-3 group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <img 
            src={img} 
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="p-4 md:p-6">
              <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold leading-tight">
                {judul}
              </h3>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group cursor-pointer">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <img 
          src={img}
          className="w-full h-32 sm:h-40 lg:h-59 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-2 line-clamp-2">
            {judul}
          </h3>
          <div className="flex items-center text-xs md:text-sm text-gray-500">
            <time dateTime={tanggal}>{tanggal}</time>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BeritaCard;