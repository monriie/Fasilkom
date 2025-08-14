import KelPenelitianCard from "../../components/card/KelPenelitianCard";
const KelPenelitian = () => {

  return (
    <>
      <section className="font-[inter] bg-[#6F370F] py-5 px-8 md:py-8">
        <div>
          <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold">
            Kelompok Penelitian
          </h1>
          <div className="flex flex-wrap justify-center items-center mt-5">
            <KelPenelitianCard />
            </div>
        </div>
      </section>
    </>
  );
};

export default KelPenelitian;
