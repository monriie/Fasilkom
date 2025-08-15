import { useEffect, useState } from "react";
import MahasiswaCard from "../../components/card/MahasiswaCard";
import { getData } from "../../services/api";
import Loading from "../../services/Loading";
import { getDummyData } from "../../data/dummyData";

const Mahasiswa = () => {
  const [mahasiswaData, setMahasiswaData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
      const fetchMahasiswa = async () => {
        try {
          setLoading(true);
          const data = await getData("mahasiswa");
          setMahasiswaData(data.mahasiswa);
          console.log(data.mahasiswa);
        } catch (err) {
          const data = getDummyData("mahasiswa");
          setMahasiswaData(data);
          console.error('Error fetching Mahasiswa data:', err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMahasiswa();
    },[])
  
    if(loading) return <Loading/>

  return (
    <section className="font-[inter] flex flex-col px-4 mb-4 lg:px-8 items-center justify-center">
      <h2 className="text-black text-center text-2xl md:text-3xl lg:text-4xl md:h-25 flex md:flex-col items-center justify-center font-bold">
        Kemahasiswaan <span className="md:block lg:inline">& Kerja Sama</span>
      </h2>
      <div className="flex flex-col mt-4 w-full justify-end md:h-92 lg:h-222">
        {mahasiswaData?.map((mahasiswa) => (
            <MahasiswaCard 
              key={mahasiswa.ID}
              img={mahasiswa.img}
              judul={mahasiswa.judul}
              upload={mahasiswa.postedby}
            />
        ))}
      </div>
      <button className="text-base w-85 lg:w-128 px-5 lg:py-2 lg:font-semibold lg:text-3xl border-b border-r border-l rounded-b-xl border-[#D3D3D3] lg:border-none hover:bg-gray-50 transition-colors">
        Lihat lainnya
      </button>
    </section>
  );
};

export default Mahasiswa;
