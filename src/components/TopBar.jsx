const TopBar = () => {
  return (
    <>
        <div className='flex justify-between bg-[#6F370F] p-3 w-full gap-10'>
        <div className='flex w-100 justify-between ml-35'>
            <div className='flex gap-2 items-center cursor-pointer'>
                <img src='./mail.png'></img>
                <p className='flex text-white space-y-1'>humas@ilkom.unsri.ac.id</p>
            </div>
            <div className='flex gap-2 cursor-pointer'>
                <img src='./Phone.png'></img>
                <p className='flex text-white space-y-1.5'>(0711) 379249</p>
            </div>
        </div>
            <div className='flex gap-2 cursor-pointer mr-10'>
                <button className='flex'>
                    <select class='bg-transparent border-none text-white font-semibold appearance-none'>
                        <option value='id' >ID</option>
                        <option value='en' >EN</option>
                    </select>
                    <img src='./bahasa.png' className='space-y-1.5'></img>
                </button>
            </div>
        </div>
    </>
  );
}

export default TopBar;
