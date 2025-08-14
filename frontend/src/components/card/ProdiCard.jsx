const ProdiCard = ({title,description, accreditation,level}) => {

  return (
    <article 
      className="
        font-[inter] bg-white 
        flex flex-col justify-between px-2 py-2
        rounded-2xl h-80 shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        w-72 lg:w-[420px] xl:w-[450px]
      "
    >
      {/* Header */}
      <header className="flex items-center justify-between p-4 sm:p-5 md:p-6">
        <div className="flex-shrink-0">
            <img
              src="../prodi.png"
              className="w-8 h-8 md:w-12 md:h-12 object-contain"
            />
        </div>

        {/* Badges */}
        <div className="flex gap-2 " role="group">
          <span 
            className="
              px-4 py-1
              bg-[#FFFF00] 
              text-xs lg:text-sm font-medium 
              rounded-2xl border
              transition-colors duration-200
            "

          >
            {accreditation}
          </span>
          <span 
            className="
              px-4 py-1
              bg-[#FFFF00] 
              text-xs lg:text-sm font-medium 
              rounded-2xl border
              transition-colors duration-200
            "
            aria-label={`Level ${level}`}
          >
            {level}
          </span>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 flex-1 flex flex-col">
        <h3 
          className="
            font-semibold h-15 text-black flex items-center justify-start
            text-xl md:text-2xl xl:text-3xl
            leading-tight mb-3 
          "
        >
          {title}
        </h3>
        
        <p className="
          font-light text-black
          text-base h-auto xl:text-lg
          leading-relaxed text-justify mb-4 line-clamp-3
        ">
          {description}
        </p>

        {/* CTA Button */}
        <button
          type="button"
          className="
            w-full items-end justify-start text-left
            text-base lg:text-xl py-2 md:pb-3 h-auto
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