import { useState } from 'react';

const TopBar = ({ isVisible }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('id');

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <header 
      className={`
        font-[inter] transition-transform duration-300 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
        bg-[#6F370F] w-full relative z-40
        px-4 py-3
        sm:px-6 sm:py-3
        md:px-8 md:py-3
        lg:px-12 lg:py-4
      `}
      role="banner"
      aria-label="Top navigation bar"
    >
      <div className="max-w-7xl mx-auto flex flex-row justify-between sm:items-center">
        {/* Contact Information */}
        <div className="flex flex-row gap-2 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="flex items-center gap-2 cursor-pointer group">
            <img 
              src="./mail.png" 
              alt="Email icon"
              className="w-4 h-4 sm:w-5 sm:h-5"
              loading="lazy"
            />
            <a 
              href="mailto:humas@ilkom.unsri.ac.id"
              className="hidden md:inline text-white text-sm sm:text-base group-hover:text-yellow-200 transition-colors"
              aria-label="Send email to humas@ilkom.unsri.ac.id"
            >
              humas@ilkom.unsri.ac.id
            </a>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer group">
            <img 
              src="./Phone.png" 
              alt="Phone icon"
              className="w-4 h-4 sm:w-5 sm:h-5"
              loading="lazy"
            />
            <a 
              href="tel:+62711379249"
              className="hidden md:inline text-white text-sm sm:text-base group-hover:text-yellow-200 transition-colors"
              aria-label="Call (0711) 379249"
            >
              (0711) 379249
            </a>
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center justify-end sm:justify-start">
          <div className="relative flex items-center gap-2">
            <label htmlFor="language-select" className="sr-only">
              Select Language
            </label>
            <select
              id="language-select"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="
                bg-transparent border-none text-white font-semibold 
                appearance-none px-1 focus:outline-none focus:ring-1 rounded-xs focus:ring-white 
                cursor-pointer pr-6 sm:text-base
              "
            >
              <option value="id" className="text-black bg-white text-center">ID</option>
              <option value="en" className="text-black bg-white text-center">EN</option>
            </select>
            <img 
              src="./bahasa.png" 
              alt="Language selector icon"
              className="w-4 h-4 sm:w-5 sm:h-5 absolute right-0 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;