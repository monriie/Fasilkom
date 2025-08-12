import MahasiswaCard from "../../components/card/MahasiswaCard";

const Mahasiswa = () => {
  return (
    <section className="font-[inter] flex flex-col items-center justify-center px-8 py-10 w-full max-w-md lg:max-w-2xl lg:mr-8 lg:border-r-2 lg:border-gray-300 ">
      <h2 className="text-black mb-2 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        Kemahasiswaan <span className="md:block lg:inline">&nbsp;& Kerja Sama</span>
      </h2>
      <div className="flex flex-col mt-4 lg:mt-0 w-full">
        <MahasiswaCard />
      </div>
      <button className="text-base w-full max-w-xs lg:max-w-xl p-2 lg:font-semibold lg:text-3xl border-b border-r border-l rounded-b-xl border-gray-300 hover:bg-gray-50 transition-colors">
        Lihat lainnya
      </button>
    </section>
  );
};

export default Mahasiswa;
