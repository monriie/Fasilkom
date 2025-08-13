import { useState, useEffect } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";

const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedMenus, setExpandedMenus] = useState({
    profile: false,
    unit: false
  });

  const toggleSubmenu = (menuKey) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset expanded menus when menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedMenus({ profile: false, unit: false });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Mobile Menu Content */}
      <div className="fixed top-0 right-0 w-80 bg-gray-100 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl">
        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto">
          {/* PROFILE Menu */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSubmenu('profile')}
              className="w-full flex items-center justify-between p-4 bg-[#8B4513] text-white font-medium hover:bg-[#654321] transition-colors"
            >
              <span>PROFILE</span>
              {expandedMenus.profile ? 
                <ChevronUp className="w-5 h-5" /> : 
                <ChevronDown className="w-5 h-5" />
              }
            </button>
            
            {expandedMenus.profile && (
              <div className="bg-[#8B4513] text-white">
                <a href="#" className="block px-6 py-2 text-sm hover:bg-[#654321] border-b border-[#654321]">PROFILE</a>
                <a href="#" className="block px-6 py-2 text-sm hover:bg-[#654321] border-b border-[#654321]">VISI & MISI</a>
                <a href="#" className="block px-6 py-2 text-sm hover:bg-[#654321] border-b border-[#654321]">STRUKTUR ORGANISASI FASILKOM</a>
                <a href="#" className="block px-6 py-2 text-sm hover:bg-[#654321] border-b border-[#654321]">KERJA SAMA</a>
                <a href="#" className="block px-6 py-2 text-sm hover:bg-[#654321]">GRUP RISET</a>
              </div>
            )}
          </div>

          {/* UNIT Menu */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSubmenu('unit')}
              className="w-full flex items-center justify-between p-4 bg-gray-100 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
            >
              <span>UNIT</span>
              {expandedMenus.unit ? 
                <ChevronUp className="w-5 h-5" /> : 
                <ChevronDown className="w-5 h-5" />
              }
            </button>
            
            {expandedMenus.unit && (
              <div className="bg-gray-50">
                <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200">LABORATORIUM</a>
                <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200">ICT</a>
                <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200">UNIT PENJAMINAN MUTU (UPM)</a>
                <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200">LAYANAN RISET & INOVASI</a>
                <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">UPPM</a>
              </div>
            )}
          </div>

          {/* DOSEN & PEGAWAI */}
          <div className="border-b border-gray-200">
            <a
              href="#"
              className="block p-4 bg-[#8B4513] text-white font-medium hover:bg-[#654321] transition-colors"
            >
              DOSEN & PEGAWAI
            </a>
          </div>

          {/* Z I */}
          <div className="border-b border-gray-200">
            <a
              href="#"
              className="block p-4 bg-gray-100 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
            >
              Z I
            </a>
          </div>

          {/* E-PPT */}
          <div>
            <a
              href="#"
              className="block p-4 bg-[#8B4513] text-white font-medium hover:bg-[#654321] transition-colors"
            >
              E-PPT
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;