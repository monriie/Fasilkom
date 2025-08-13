import OrmawaCard from "../../components/card/OrmawaCard";

const Ormawa = () => {
  return (
    <>
      <section className="font-[inter] bg-[#6F370F] py-5 px-8 md:py-8">
        <div>
          <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold">
            Organisasi Mahasiswa
          </h1>
          <div className="flex px-6 justify-center items-center mt-5">
            <OrmawaCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Ormawa;
