import { useState } from "react";
import { Search, Menu } from "lucide-react";
import MobileMenu from "./Menu";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-20 px-4 pt-16 sm:px-6 sm:pt-20 md:px-8 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start lg:items-center">
          
          {/* Logo and Title */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img 
              src="./unsri.png" 
              alt="Universitas Sriwijaya" 
              className="w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16"
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
            <div className="flex">
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
                  onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                />
                <button 
                  onClick={handleSearchSubmit}
                  aria-label="Submit search"
                  className="ml-2"
                >
                  <Search size={16} className="text-black sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
            
            <button 
              className="cursor-pointer p-1"
              aria-label="Open menu"
              onClick={toggleMobileMenu}
            >
              <Menu className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>
            <MobileMenu/>
          </div>

          {/* Mobile Search and Menu */}
          <div className="flex sm:hidden items-center justify-between w-full">
            <div className="flex-1 max-w-xs">
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
                  onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                />
                <button 
                  onClick={handleSearchSubmit}
                  aria-label="Submit search"
                >
                  <Search size={16} className="text-black ml-2" />
                </button>
              </div>
              <MobileMenu/>
            </div>
            
            <button 
              className="ml-3 p-1"
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Navbar;