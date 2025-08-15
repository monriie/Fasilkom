const ProdiCard = ({ akreditasi,jenjang, jurusan, deskripsi}) => {

  return (
    <article 
      className="
        font-[inter] bg-white 
        flex flex-col justify-between px-2 py-2
        rounded-2xl h-auto shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        w-72 lg:w-80
      "
    >
      {/* Header */}
      <header className="flex items-center justify-between p-5 md:p-6">
        <div className="flex-shrink-0">
            <img
              src="../prodi.png"
              className="w-8 h-8 object-contain"
            />
        </div>

        {/* Badges */}
        <div className="flex gap-2 " role="group">
          <span 
            className="
              px-4 flex items-center
              bg-[#FFFF00] 
              text-xs 
              rounded-2xl border
              transition-colors duration-200
            "

          >
            {akreditasi}
          </span>
          <span 
            className="
              px-4 flex items-center
              bg-[#FFFF00] 
              text-xs font-medium 
              rounded-2xl border
              transition-colors duration-200
            "
          >
            {jenjang}
          </span>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 flex-1 flex flex-col">
        <h3 
          className="
            font-semibold h-15 text-black flex items-center justify-start
            text-xl md:text-2xl xl:text-2xl
            leading-tight mb-3 
          "
        >
          {jurusan}
        </h3>
        
        <p className="
          font-extralight text-black
          text-sm h-auto
          leading-relaxed text-justify mb-4 line-clamp-3
        ">
          {deskripsi}
        </p>

        {/* CTA Button */}
        <button
          type="button"
          className="
            w-full items-end justify-start text-left
            text-sm py-2 md:pb-3 h-auto
            rounded-full font-medium text-black
            transition-all duration-300 ease-in-out
          "
        >
          <span className='transition-transform duration-300'>
            Pelajari Lebih Lanjut
          </span>
        </button>
      </div>
    </article>
  );
};

export default ProdiCard;