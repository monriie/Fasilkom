import ProdiCard from "../../components/card/ProdiCard";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Prodi = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  // Sample data - replace with your actual data
  const prodiData = [
    {
      id: 1,
      title: "Teknik Komputer",
      description:
        "Teknik Komputer adalah ilmu yang kokoh berdiri pada teori dan prinsip komputasi, matematika, serta rekayasa.",
      accreditation: "A",
      level: "D3",
      image: "./prodi.png",
    },
    {
      id: 2,
      title: "Sistem Informasi",
      description:
        "Sistem Informasi menggabungkan teknologi informasi dengan proses bisnis untuk menciptakan solusi digital yang efektif.",
      accreditation: "A",
      level: "S1",
      image: "./prodi.png",
    },
    {
      id: 3,
      title: "Teknik Informatika",
      description:
        "Teknik Informatika fokus pada pengembangan perangkat lunak dan sistem komputer yang inovatif.",
      accreditation: "A",
      level: "S1",
      image: "./prodi.png",
    },
    {
      id: 4,
      title: "Ilmu Komputer",
      description:
        "Ilmu Komputer mempelajari algoritma, struktur data, dan teori komputasi untuk memecahkan masalah kompleks.",
      accreditation: "B+",
      level: "S1",
      image: "./prodi.png",
    },
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.children[0]?.offsetWidth || 0;
      const gap = 30;
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.children[0]?.offsetWidth || 0;
      const gap = 30; // gap-6 = 24px
      scrollContainerRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);

      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, []);

  return (
    <section className="flex flex-col md:flex-row max-h-screen">
      {/* Left Section - Title */}
      <div
        className="
        flex font-[inter] items-center justify-start
        bg-[#6F370F] 
        w-full h-auto md:w-60 lg:w-80 xl:w-96 md:h-auto
        px-6 sm:px-8 md:px-10 lg:px-12
        py-8 lg:py-0
      "
      >
        <div className="text-left">
          <h1
            className="
              font-bold text-white
              text-2xl md:text-4xl xl:text-5xl 
              leading-tight
              border-b-4 border-white
              pb-4 inline-block
            "
          >
            Program <span className="md:block">Studi</span>
          </h1>
        </div>
      </div>

      {/* Right Section - Slider Content */}
      <div
        className="
          flex h-auto
          bg-cover bg-center bg-no-repeat items-center justify-center
          px-4 lg:px-12 xl:w-full
          py-8 lg:py-20
          relative
        "
        style={{
          backgroundImage: `url(../bg3.png)`,
        }}
      >
        {/* Slider Container */}
        <div className="w-full max-w-xl xl:max-w-5xl relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className={`
              absolute left-0 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 
              bg-white/90 hover:bg-white
              rounded-full shadow-lg
              flex items-center justify-center
              transition-all duration-200
              -ml-2 sm:-ml-4 lg:-ml-6 md:hidden lg:hidden
            `}
            aria-label="Scroll to previous programs"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#6F370F] xl:hidden" />
          </button>

          <button
            onClick={scrollRight}
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              w-10 h-10 sm:w-12 sm:h-12 
              bg-white/90 hover:bg-white
              rounded-full shadow-lg
              flex items-center justify-center
              transition-all duration-200
              -mr-2 sm:-mr-4 lg:-mr-6 md:hidden lg:hidden
            `}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#6F370F] xl:hidden" />
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="
              flex gap-4 sm:gap-6 
              overflow-x-auto scrollbar-hide
              px-12
              py-4 xl:px-1
              scroll-smooth
              snap-x snap-mandatory
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {prodiData.map((prodi) => (
              <div key={prodi.id} className="flex-shrink-1 snap-center mx-2">
                <ProdiCard
                  title={prodi.title}
                  description={prodi.description}
                  accreditation={prodi.accreditation}
                  level={prodi.level}
                  image={prodi.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prodi;
