import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ isFixed, isVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { to: '/Prodi', label: 'Prodi' },
    { to: '/Akademik', label: 'Akademik' },
    { to: '/Mahasiswa', label: 'Mahasiswa' },
    { to: '/Informasi', label: 'Informasi' },
    { to: '/Kontak', label: 'Kontak' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = isFixed ? 80 : 0; // Sesuaikan dengan tinggi navbar Anda
      const offsetTop = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    // Tutup mobile menu setelah klik
    closeMobileMenu();
  };

  return (
    <>
      <nav 
        className={`
          ${isFixed ? 'fixed top-0 left-0 right-0' : 'static'}
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          bg-white shadow-lg z-50 transition-all duration-300
          px-4 py-3 sm:px-6 md:px-8 lg:px-12
        `}
        role="navigation"
      >
        <div className="font-[inter] max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex font-light text-black justify-between gap-10 py-2 xl:gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <a href={`#${item.label}`}
                  to={item.to}
                  className="
                    flex items-center justify-center
                    py-2 xl:px-6
                    w-full min-w-[180px] xl:min-w-[220px]
                    rounded-2xl cursor-pointer
                    hover:bg-[#FFFF00] active:bg-[#FFFF00]
                    transition-colors duration-200
                    text-sm xl:text-base
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Tablet Navigation */}
          <ul className="hidden md:flex lg:hidden font-light text-black justify-between gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <a href={`#${item.label}`}
                  to={item.to}
                  aria-label={item.ariaLabel}
                  className="
                    flex items-center justify-center
                    py-2
                    min-w-[120px]
                    rounded-xl cursor-pointer
                    hover:bg-[#FFFF00] active:bg-[#FFFF00]
                    transition-colors duration-200
                    text-base
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden justify-between items-center">
            <div className="font-medium text-[#6F370F] text-lg">
              Menu
            </div>
            <button
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#6F370F]" />
              ) : (
                <Menu className="w-6 h-6 text-[#6F370F]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`
            md:hidden transition-all duration-300 ease-in-out
            ${isMobileMenuOpen 
              ? 'max-h-96 visible' 
              : 'max-h-0 invisible'
            }
            overflow-hidden
          `}
        >
          <div className="pt-4 pb-2 border-t border-gray-200 mt-3">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <button
                    onClick={() => scrollToSection(item.to)}
                    aria-label={item.ariaLabel}
                    className="
                      block w-full text-center
                      px-4 py-3
                      cursor-pointer
                      hover:bg-[#FFFF00] active:bg-[#FFFF00]
                      transition-colors duration-200
                      font-light text-black
                      border-none bg-transparent
                    "
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;