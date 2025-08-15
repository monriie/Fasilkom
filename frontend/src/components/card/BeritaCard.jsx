const BeritaCard = ({ img, judul,tanggal, featured = false, isPlaceholder = false }) => {
  // Placeholder card untuk "Lihat berita lainnya"
  if (isPlaceholder) {
    return (
      <article className="col-span-1 lg:w-45 group cursor-pointer">
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
      <article className="col-span-2 group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#6F370F]/16" aria-hidden="true" />
          <img 
            src={img} 
            className="w-full h-48 md:h-64 lg:h-80 bg-no-repeat object-cover"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="p-4 md:p-6">
              <h3 className="text-white text-xs md:text-lg lg:text-2xl font-medium leading-tight">
                {judul}
              </h3>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="lg:w-50 group cursor-pointer">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <img 
          src={img}
          className="w-full h-32 sm:h-40 lg:h-53 object-cover"
        />
        <div className="p-4">
          <h3 className="flex flex-wrap font-medium text-sm md:text-base lg:text-base mb-2">
            {judul}
          </h3>
          <div className="flex items-center text-xs md:text-sm lg:text-sm font-normal">
            <time dateTime={tanggal}>{tanggal}</time>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BeritaCard;