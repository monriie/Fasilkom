const AgendaCard = ({img, judul ,isPlaceholder = false }) => {
  if (isPlaceholder) {
    return (
      <article className="col-span-1 group cursor-pointer">
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 px-6 flex items-center justify-center border lg:rounded-2xl h-33 w-33 md:h-46 md:w-35 lg:h-36 lg:w-70 lg:px-12">
          <div className="text-center">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold">
              Lihat Selengkapnya
            </h3>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="col-span-2 group cursor-pointer">
      <div className="bg-white rounded-lg duration-300 overflow-hidden">
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