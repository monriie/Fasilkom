import { useEffect, useState } from "react";
import BeasiswaCard from "../../components/card/BeasiswaCard";
import { getData } from "../../services/api";
import Loading from "../../services/Loading";
import { getDummyData } from "../../data/dummyData";

const Beasiswa = () => {
  const [beasiswaData, setBeasiswaData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
      const fetchBeasiswa = async () => {
        try {
          setLoading(true);
          const data = await getData("beasiswa");
          setBeasiswaData(data.beasiswa);
          console.log(data.beasiswa);
        } catch (err) {
          const data = getDummyData("beasiswa");
          setBeasiswaData(data);
          console.error('Error fetching Beasiswa data:', err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBeasiswa();
    },[])
  
    if(loading) return <Loading/>

  return (
    <section className="font-[inter] flex flex-col lg:col-span-1 mt-4 px-4 pb-2 lg:pt-7 items-center justify-between">
      <h2 className="text-black text-center text-2xl md:text-3xl md:h-22 flex items-center justify-center lg:pb-3 lg:text-4xl font-bold">
        Beasiswa
      </h2>
      <div className="flex flex-col px-4 mt-4 w-full justify-end md:h-92 lg:h-216">
        {beasiswaData?.map((beasiswa) => (
            <BeasiswaCard 
              key={beasiswa.ID}
              img={beasiswa.img}
              nama={beasiswa.nama}
              upload={beasiswa.postedby}
            />
        ))}
      </div>
      <button className="text-base w-85 lg:w-128 mb-4 lg:py-2 lg:font-semibold lg:text-3xl border-b border-r border-l rounded-b-xl border-[#D3D3D3] lg:border-none hover:bg-gray-50 transition-colors">
        Lihat lainnya
      </button>
    </section>
  );
};

export default Beasiswa;
