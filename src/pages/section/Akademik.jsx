import AkademikCard from "../../components/card/AkademikCard";

const Akademik = () => {
  return (
    <>
      <section className="font-[inter] bg-white py-5 px-8 md:py-8">
        <div>
          <h1 className="text-left text-2xl md:text-3xl lg:text-4xl font-bold border-b-2 border-[#D3D3D3]">
            Akademik & Penelitian
          </h1>
          <div className="flex flex-wrap justify-center items-center mt-5">
            <AkademikCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Akademik;
