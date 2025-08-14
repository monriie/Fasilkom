import { useEffect, useState } from "react";
import KelPenelitianCard from "../../components/card/KelPenelitianCard";
import { getData } from "../../services/api";
import Loading from "../../services/Loading";


const KelPenelitian = () => {
  const [kelompokPenelitianData, setKelompokPenelitianData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
      const fetchKelompokPenelitian = async () => {
        try {
          setLoading(true);
          const data = await getData("kelompokPenelitian");
          setKelompokPenelitianData(data.kelompokPenelitian);
          console.log(data.kelompokPenelitian);
        } catch (err) {
          console.error('Error fetching KelompokPenelitian data:', err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchKelompokPenelitian();
    },[])
  
    if(loading) return <Loading/>

  return (
    <>
      <section className="font-[inter] bg-[#6F370F] py-5 px-8 md:py-8">
        <div>
          <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold">
            Kelompok Penelitian
          </h1>
          {kelompokPenelitianData?.map((kelompokPenelitian) => (
            <div key={kelompokPenelitian.ID} className="flex flex-wrap justify-center items-center mt-5">
              <KelPenelitianCard 
                logo={kelompokPenelitian.logo}
                singkatan={kelompokPenelitian.singkatan}
                kepanjangan={kelompokPenelitian.kepanjangan}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default KelPenelitian;
