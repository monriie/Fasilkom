import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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

  // Reset expanded menus when menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedMenus({ profile: false, unit: false });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>      
      {/* Mobile Menu Content */}
      <div className="w-full lg:flex lg:flex-row bg-[#D3D3D3] z-50 transform transition-transform duration-300 ease-in-out shadow-2xl">
        <div className="lg:w-70 lg:border-[#6F370F] lg:border-1"/>
        {/* Menu Items */}
        <nav className="flex flex-col flex-1">
          {/* profile Menu */}
          <div>
            <button
              onClick={() => toggleSubmenu('profile')}
              className="w-full flex items-center justify-between p-4 bg-[#6F370F] text-white font-medium transition-colors"
            >
              <span>PROFILE</span>
              {expandedMenus.profile ? 
                <ChevronUp className="w-5 h-5" /> : 
                <ChevronDown className="w-5 h-5" />
              }
            </button>
            
            {expandedMenus.profile && (
              <div className="bg-[#6F370F] text-white">
                <a href="#" className="block px-6 py-2 text-sm ">PROFILE</a>
                <a href="#" className="block px-6 py-2 text-sm ">VISI & MISI</a>
                <a href="#" className="block px-6 py-2 text-sm ">STRUKTUR ORGANISASI FASILKOM</a>
                <a href="#" className="block px-6 py-2 text-sm  ">KERJA SAMA</a>
                <a href="#" className="block px-6 py-2 text-sm">GRUP RISET</a>
              </div>
            )}
          </div>

          {/* UNIT Menu */}
          <div>
            <button
              onClick={() => toggleSubmenu('unit')}
              className="w-full flex items-center justify-between p-4 bg-[#D3D3D3] text-[#6F370F] font-medium transition-colors"
            >
              <span>UNIT</span>
              {expandedMenus.unit ? 
                <ChevronUp className="w-5 h-5" /> : 
                <ChevronDown className="w-5 h-5" />
              }
            </button>
            
            {expandedMenus.unit && (
              <div className="bg-[#D3D3D3]">
                <a href="#" className="block px-6 py-2 text-sm ">LABORATORIUM</a>
                <a href="#" className="block px-6 py-2 text-sm ">ICT</a>
                <a href="#" className="block px-6 py-2 text-sm ">UNIT PENJAMINAN MUTU (UPM)</a>
                <a href="#" className="block px-6 py-2 text-sm ">LAYANAN RISET & INOVASI</a>
                <a href="#" className="block px-6 py-2 text-sm">UPPM</a>
              </div>
            )}
          </div>

          {/* DOSEN & PEGAWAI */}
          <div>
            <a
              href="#"
              className="block p-4 bg-[#6F370F] text-white font-medium transition-colors"
            >
              DOSEN & PEGAWAI
            </a>
          </div>

          {/* Z I */}
          <div>
            <a
              href="#"
              className="block p-4 bg-[#D3D3D3] text-[#6F370F] font-medium transition-colors"
            >
              Z I
            </a>
          </div>

          {/* E-PPT */}
          <div>
            <a
              href="#"
              className="block p-4 bg-[#6F370F] text-white font-medium transition-colors"
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