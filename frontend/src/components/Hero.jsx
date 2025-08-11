import { useEffect, useState, useRef } from "react";
import { Search } from "lucide-react";

const Hero = () => {
  const images = [
    "./bg1.png",
    "./bg2.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <section
      className="relative font-[inter] w-full h-screen bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${images[currentSlide]})`,
      }}
    >
      {/* Overlay coklat transparan */}
      <div className="absolute inset-0 bg-[#6F370F]/30"/>

      {/* Konten Hero */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top Bar dalam hero */}
        <div className="flex justify-between items-center px-6 pt-20">
          <div className="flex gap-3 items-center">
            <img src="./unsri.png" alt="Unsri Logo" className="w-16 h-16" />
            <div>
              <h1 className="w-80 font-medium text-2xl text-white">
                FAKULTAS ILMU KOMPUTER
              </h1>
              <h2 className="text-xl text-white">UNIVERSITAS SRIWIJAYA</h2>
            </div>
          </div>

          {/* Search + menu */}
          <div className="flex gap-5">
            <div className="bg-white rounded-full flex items-center px-4 py-2">
              <input
                placeholder="Search"
                className="outline-none border-none text-black"
              />
              <Search size={20} className="text-black" />
            </div>
            <button className="cursor-pointer">
              <img src="./Menu.png" alt="Menu" className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Tulisan Selamat Datang di tengah */}
        <div className="flex flex-1 justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Selamat Datang di <span className="block">Fakultas Ilmu Komputer</span><span className="block">Universitas Sriwijaya</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
