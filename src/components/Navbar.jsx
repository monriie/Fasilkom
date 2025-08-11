import {Link} from 'react-router';

const Navbar = () => {
  return (
    <>
      <nav className='static z-50 p-6 top-0 left-0 right-0 w-full'>
        <ul className='font-[inter] font-light flex gap-5 justify-around'>
          <li className='flex items-center justify-center p-5 w-[244px] h-[56px] rounded-2xl cursor-pointer hover:bg-[#FFFF00] active:bg-[#FFFF00]'><Link to="/prodi">Prodi</Link></li>
          <li className='flex items-center justify-center p-5 w-[244px] h-[56px] rounded-2xl cursor-pointer hover:bg-[#FFFF00] active:bg-[#FFFF00]'><Link to="/akademik">Akademik</Link></li>
          <li className='flex items-center justify-center p-5 w-[244px] h-[56px] rounded-2xl cursor-pointer hover:bg-[#FFFF00] active:bg-[#FFFF00]'><Link to="/mahasiswa">Mahasiswa</Link></li>
          <li className='flex items-center justify-center p-5 w-[244px] h-[56px] rounded-2xl cursor-pointer hover:bg-[#FFFF00] active:bg-[#FFFF00]'><Link to="/informasi">Informasi</Link></li>
          <li className='flex items-center justify-center p-5 w-[244px] h-[56px] rounded-2xl cursor-pointer hover:bg-[#FFFF00] active:bg-[#FFFF00]'><Link to="/kontak">Kontak</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
