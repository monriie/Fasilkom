import ProdiCard from "../../components/card/ProdiCard";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Loading from "../../services/Loading";
import { getData } from "../../services/api";

const Prodi = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [prodiData, setProdiData] = useState([]);
  const scrollContainerRef = useRef(null);
  const [loading,setLoading] = useState(true);

  useEffect (() => {
    const fetchProdi = async () => {
      try {
        setLoading(true);
        const data = await getData("programstudi");
        setProdiData(data.programstudi);
        console.log(data.programstudi);
      } catch (err) {
        console.error('Error fetching prodi data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProdi();
  },[])

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

  if(loading) return <Loading/>

  return (
    <section id="Prodi" className="flex flex-col md:flex-row max-h-screen">
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
          px-4 md:px-0 lg:px-0 md:w-full lg:w-full xl:w-full md:justify-end lg:justify-end
          py-8 lg:py-20
          relative
        "
        style={{
          backgroundImage: `url(../bg3.png)`,
        }}
      >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#6F370F]/30" aria-hidden="true" />
      
        {/* Slider Container */}
        <div className="w-full max-w-xl md:max-w-2xl lg:max-3xl xl:max-w-5xl relative">
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
            {prodiData?.map((prodi) => (
              <div key={prodi.ID} className="flex-shrink-1 snap-center mx-2">
                <ProdiCard
                  jurusan={prodi.jurusan}
                  deskripsi={prodi.deskripsi}
                  akreditasi={prodi.akreditasi}
                  jenjang={prodi.jenjang}
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