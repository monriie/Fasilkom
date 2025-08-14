const AgendaCard = ({img, judul ,isPlaceholder = false }) => {
  if (isPlaceholder) {
    return (
      <article className="col-span-1 group cursor-pointer">
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex items-center justify-center h-48 md:h-64 lg:h-53">
          <div className="text-center">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold">
              Lihat agenda lainnya
            </h3>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="col-span-1 group cursor-pointer">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <img 
          src={img}
          alt={judul}
          className="w-full h-32 md:h-46 lg:h-37 object-cover"
        />
      </div>
    </article>
  );
};

export default AgendaCard;