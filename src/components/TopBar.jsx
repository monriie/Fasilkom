
const TopBar = ({ isVisible }) => {
  return (
    <>
    {/* info email + nomor */}
        <div className={`transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-[#6F370F] p-3 w-full flex justify-between gap-10 relative z-40`}>
        <div className='flex font-[inter] w-100 justify-between ml-35'>
            <div className='flex gap-2 items-center cursor-pointer'>
                <img src='./mail.png'></img>
                <p className='flex text-white space-y-1'>humas@ilkom.unsri.ac.id</p>
            </div>
            <div className='flex gap-2 cursor-pointer'>
                <img src='./Phone.png'></img>
                <p className='flex text-white space-y-1.5'>(0711) 379249</p>
            </div>
        </div>
        {/* bahasa */}
            <div className='flex gap-2 cursor-pointer mr-10'>
                <button className='flex cursor-pointer'>
                    <select class='bg-transparent border-none px-1.5 text-white font-semibold appearance-none focus:ring-0'>
                        <option value='id' className='text-black text-center'>ID</option>
                        <option value='en' className='text-black text-center' >EN</option>
                    </select>
                    <img src='./bahasa.png' className='space-y-1.5'></img>
                </button>
            </div>
        </div>
    </>
  );
};

export default TopBar;
