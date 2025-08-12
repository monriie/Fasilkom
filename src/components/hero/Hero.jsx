import { useEffect, useState, useRef } from "react";
import { Search, Menu, X } from "lucide-react";

const Hero = () => {
  const images = [
    "./bg1.png",
    "./bg2.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search query:", searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section
      className="relative font-[inter] w-auto h-100 md:h-120 xl:h-185 bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${images[currentSlide]})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#6F370F]/30" aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header Navigation */}
        <header className="px-4 pt-16 sm:px-6 sm:pt-20 md:px-8 lg:px-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start lg:items-center">
            
            {/* Logo and Title */}
            <div className="flex items-center gap-3 sm:gap-4">
              <img 
                src="./unsri.png" 
                alt="Universitas Sriwijaya logo" 
                className="w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16"
                loading="eager"
              />
              <div>
                <h1 className="text-sm sm:text-xl md:text-2xl font-medium text-white leading-tight max-w-xs sm:max-w-sm md:max-w-md">
                  FAKULTAS ILMU KOMPUTER
                </h1>
                <h2 className="text-xs sm:text-lg md:text-xl text-white">
                  UNIVERSITAS SRIWIJAYA
                </h2>
              </div>
            </div>

            {/* Search and Menu - Desktop/Tablet */}
            <div className="hidden sm:flex items-center gap-3 md:gap-5">
              <form onSubmit={handleSearchSubmit} className="flex">
                <div className="bg-white rounded-full flex items-center px-3 py-2 md:px-4">
                  <label htmlFor="search-input" className="sr-only">
                    Search
                  </label>
                  <input
                    id="search-input"
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="outline-none border-none text-black text-sm md:text-base w-24 md:w-32"
                    aria-label="Search the website"
                  />
                  <button 
                    type="submit"
                    aria-label="Submit search"
                    className="ml-2"
                  >
                    <Search size={16} className="text-black sm:w-5 sm:h-5" />
                  </button>
                </div>
              </form>
              
              <button 
                className="cursor-pointer p-1"
                aria-label="Open menu"
                onClick={toggleMobileMenu}
              >
                <Menu className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </button>
            </div>

            {/* Mobile Search and Menu */}
            <div className="flex sm:hidden items-center justify-between w-full">
              <form onSubmit={handleSearchSubmit} className="flex-1 max-w-xs">
                <div className="bg-white rounded-full flex items-center px-3 py-2">
                  <label htmlFor="mobile-search" className="sr-only">
                    Search
                  </label>
                  <input
                    id="mobile-search"
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="outline-none border-none text-black text-sm flex-1"
                    aria-label="Search the website"
                  />
                  <button 
                    type="submit"
                    aria-label="Submit search"
                  >
                    <Search size={16} className="text-black ml-2" />
                  </button>
                </div>
              </form>
              
              <button 
                className="ml-3 p-1"
                aria-label="Toggle menu"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? 
                  <X className="w-6 h-6 text-white" /> : 
                  <Menu className="w-6 h-6 text-white" />
                }
              </button>
            </div>
          </div>
        </header>

        {/* Welcome Message */}
        <div className="flex-1 flex items-center justify-center px-4 text-center">
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 sm:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </section>
  );
};

export default Hero;