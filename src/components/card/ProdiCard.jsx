// import { useState } from 'react';

const ProdiCard = ({ 
  title = "Teknik Komputer",
  description = "Teknik Komputer adalah ilmu yang kokoh berdiri pada teori dan prinsip komputasi, matematika, serta rekayasa.",
  accreditation = "A",
  level = "D3",
  image = "./prodi.png",
  onLearnMore 
}) => {

  const handleLearnMore = () => {
    if (onLearnMore) {
      onLearnMore({ title, description, accreditation, level });
    } else {
      // Default behavior - could navigate to detail page
      console.log(`Learn more about ${title}`);
    }
  };

  return (
    <article 
      className="
        font-[inter] bg-white 
        flex flex-col justify-between px-2 py-2
        rounded-2xl shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        w-72 h-auto lg:w-[420px] xl:w-[450px]
      "
      role="article"
      aria-labelledby={`prodi-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {/* Header */}
      <header className="flex items-center justify-between p-4 sm:p-5 md:p-6">
        <div className="flex-shrink-0">
            <img
              src={image}
              alt={`${title} program logo`}
              className="w-8 h-8 md:w-12 md:h-12 object-contain"
            />
        </div>

        {/* Badges */}
        <div className="flex gap-1 sm:gap-2" role="group">
          <span 
            className="
              px-4 py-1
              bg-[#FFFF00] 
              text-xs lg:text-sm font-medium 
              rounded-2xl border
              transition-colors duration-200
            "
            aria-label={`Accreditation ${accreditation}`}
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
          id={`prodi-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="
            font-semibold text-black
            text-xl md:text-2xl xl:text-3xl
            leading-tight mb-3 
          "
        >
          {title}
        </h3>
        
        <p className="
          font-light text-black
          text-base h-30 xl:text-lg
          leading-relaxed text-justify mb-4 sm:mb-6
        ">
          {description}
        </p>

        {/* CTA Button */}
        <button
          type="button"
          onClick={handleLearnMore}
          className="
            w-full text-left
            text-base lg:text-xl pb-5 md:pb-3 h-auto
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