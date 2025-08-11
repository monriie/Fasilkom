import ProdiCard from '../components/ProdiCard';

const Prodi = () => {
  return (
    <section className='flex'>
      {/* Bagian kiri */}
      <div className='flex font-[inter] items-center bg-[#6F370F] w-70 h-100 px-10'>
        <h1 className='py-4 font-bold text-5xl text-white border-b-4 border-white'>
          Program Studi
        </h1>
      </div>

      {/* Bagian kanan */}
      <div
        className='w-full h-100 bg-cover bg-center transition-all duration-700 flex items-center'
        style={{
          backgroundImage: `url(../bg3.png)`,
        }}
      >
        <div className='px-15'>
            <ProdiCard/>
        </div>
      </div>
    </section>
  );
};

export default Prodi;
