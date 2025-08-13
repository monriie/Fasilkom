import MahasiswaCard from "../../components/card/MahasiswaCard";

const Mahasiswa = () => {
  return (
    <section className="font-[inter] flex flex-col px-4 mb-4 pb-2 lg:px-8 items-center justify-center">
      <h2 className="text-black mt-10 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        Kemahasiswaan <span className="md:block lg:inline">& Kerja Sama</span>
      </h2>
      <div className="flex flex-col mt-4 w-full">
        <MahasiswaCard />
      </div>
      <button className="text-base w-85 lg:w-160 px-5 lg:py-2 lg:font-semibold lg:text-3xl border-b border-r border-l rounded-b-xl border-[#D3D3D3] hover:bg-gray-50 transition-colors">
        Lihat lainnya
      </button>
    </section>
  );
};

export default Mahasiswa;
