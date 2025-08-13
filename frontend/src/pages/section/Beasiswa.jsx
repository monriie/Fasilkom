import BeasiswaCard from "../../components/card/BeasiswaCard";

const Beasiswa = () => {
  return (
    <section className="font-[inter] flex flex-col lg:col-span-1 mt-4 px-4 pb-2 md:pt-11 lg:pt-7 items-center justify-center">
      <h2 className="text-black text-center text-2xl md:text-3xl md:pb-8 lg:pb-3 lg:text-4xl font-bold">
        Beasiswa
      </h2>
      <div className="flex flex-col px-4 w-full">
        <BeasiswaCard />
      </div>
      <button className="text-base w-85 lg:w-160 mb-4 lg:py-2 lg:font-semibold lg:text-3xl border-b border-r border-l rounded-b-xl border-[#D3D3D3] hover:bg-gray-50 transition-colors">
        Lihat lainnya
      </button>
    </section>
  );
};

export default Beasiswa;
