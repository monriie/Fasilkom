import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="Kontak" className="font-[inter] bg-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo & Title */}
          <div className="flex items-start space-x-4">
            <img src="./unsri.png" alt="Logo Unsri" className="w-15 h-15 flex-shrink-0" />
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                FAKULTAS ILMU KOMPUTER<br />
                UNIVERSITAS SRIWIJAYA
              </h3>
            </div>
          </div>

          {/* Lokasi */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              LOKASI
            </h4>
            <div className="space-y-4 text-sm md:text-base text-gray-600">
              <div className='flex gap-1'>
                <img src='../Map.png' className="w-5 h-5 mr-2" />
                <div>
                  <h5 className="font-medium text-gray-800 mb-1">Kampus Utama</h5>
                  <address className="not-italic">
                    Palembang - Prabumulih KM.32<br />
                    Kabupaten Ogan Ilir, Sumatera Selatan,<br />
                    Indonesia
                  </address>
                </div>
              </div>
              <div className='flex gap-1'>
                <img src='../Map.png' className="w-5 h-5 mr-2" />
                <div>
                  <h5 className="font-medium text-gray-800 mb-1">Kampus Palembang</h5>
                  <address className="not-italic">
                    Jl. Srijaya Negara Bukit Besar Palembang<br />
                    30139
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">KONTAK</h4>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-center text-gray-600">
                <img src='../mail(1).png' className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:humas@ilkom.unsri.ac.id" className="hover:text-blue-600 transition-colors">
                  humas@ilkom.unsri.ac.id
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <img src='../Phone(1).png' className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:(0711)379249" className="hover:text-blue-600 transition-colors">
                  (0711) 379249
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <img src='../Instagram.png' className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Humas Fasilkom Unsri
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <img src='../Facebook.png' className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Humas Fasilkom Unsri
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6">
          <p className="text-center text-sm md:text-base text-gray-600">
            Copyright © 2025 Fakultas Ilmu Komputer, Universitas Sriwijaya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;