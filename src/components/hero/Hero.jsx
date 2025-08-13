import { useEffect, useState, useRef } from "react";

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
      className="relative font-[inter] w-auto h-110 xl:h-185 bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${images[currentSlide]})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#6F370F]/30" aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Welcome Message */}
        <div className="flex-1 flex items-center justify-center px-4 pt-15 text-center">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg leading-tight">
              Selamat Datang di{" "}
              <span className="block mt-2">Fakultas Ilmu Komputer</span>
              <span className="block mt-2">Universitas Sriwijaya</span>
            </h1>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 xl:my-5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-10 h-2 rounded-xs transition-colors ${
                index === currentSlide ? 'bg-[#FFFF00]' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;