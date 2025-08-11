import { Link } from "react-router";

const Navbar = ({ isFixed, isVisible }) => {
  return (
    <nav className={`
      ${isFixed ? 'fixed top-0 left-0 right-0 bg-white shadow-lg' : 'static'}  bg-white shadow-lg
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
       z-50 p-3 w-full transition-all duration-300
    `}>
      <ul className='font-[inter] font-light text-black flex gap-5 justify-around'>
        <li className={`flex items-center justify-center p-5 w-[244px] h-[56px] rounded-2xl cursor-pointer hover:bg-[#FFFF00] active:bg-[#FFFF00] transition-colors ${isFixed}`}>
          <Link to='/Prodi'>Prodi</Link>
        </li>
        <li className={`flex items-center justify-center p-5 w-[244px] h-[56px] rounded-2xl cursor-pointer hover:bg-[#FFFF00] active:bg-[#FFFF00] transition-colors ${isFixed}`}>
          <Link to='/Akademik'>Akademik</Link>
        </li>
        <li className={`flex items-center justify-center p-5 w-[244px] h-[56px] rounded-2xl cursor-pointer hover:bg-[#FFFF00] active:bg-[#FFFF00] transition-colors ${isFixed}`}>
          <Link to='/Mahasiswa'>Mahasiswa</Link>
        </li>
        <li className={`flex items-center justify-center p-5 w-[244px] h-[56px] rounded-2xl cursor-pointer hover:bg-[#FFFF00] active:bg-[#FFFF00] transition-colors ${isFixed}`}>
          <Link to='/Informasi'>Informasi</Link>
        </li>
        <li className={`flex items-center justify-center p-5 w-[244px] h-[56px] rounded-2xl cursor-pointer hover:bg-[#FFFF00] active:bg-[#FFFF00] transition-colors ${isFixed}`}>
          <Link to='/Kontak'>Kontak</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
