import { useEffect, useState } from "react";
import AkademikCard from "../../components/card/AkademikCard";
import { getData } from "../../services/api";
import Loading from "../../services/Loading";


const Akademik = () => {
  const [akademikData, setAkademikData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
      const fetchAkademik = async () => {
        try {
          setLoading(true);
          const data = await getData("akademik");
          setAkademikData(data.akademik);
          console.log(data.akademik);
        } catch (err) {
          console.error('Error fetching akademik data:', err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAkademik();
    },[])
  
    if(loading) return <Loading/>

  return (
    <>
      <section id="Akademik" className="font-[inter] bg-white py-5 px-8 md:py-8">
        <div>
          <h1 className="text-left text-2xl md:text-3xl lg:text-4xl font-bold border-b-2 border-[#D3D3D3]">
            Akademik & Penelitian
          </h1>
          {akademikData?.map((akademik) =>(
            <div key={akademik.ID} className="flex flex-wrap justify-center items-center mt-5">
              <AkademikCard 
                img={akademik.img}
                tanggal={akademik.tanggal}
                judul={akademik.judul}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Akademik;
