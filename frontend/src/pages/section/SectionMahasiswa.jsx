import { useEffect, useState } from "react";
import MahasiswaCard from "../../components/card/MahasiswaCard";
import { getData } from "../../services/api";
import Loading from "../../services/Loading";
import { getDummyData } from "../../data/dummyData";

const SectionMahasiswa = ({title,data}) => {
  const [sectionData, setSectionData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
      const fetchMahasiswa = async () => {
        try {
          setLoading(true);
          const datas = await getData(data);
          setSectionData(datas.data);
          console.log(datas.data);
        } catch (err) {
          const dummiesData = getDummyData(data);
          // console.log(dummiesData)
          setSectionData(dummiesData);
          // console.log(sectionData)
          console.error('Error fetching section data:', err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMahasiswa();
    },[])
  
    if(loading || sectionData.length == 0) return <Loading/>

  return (
    <section className="font-[inter] flex flex-col px-4 mb-4 lg:px-8 items-center justify-center">
      <h2 className="text-black text-center text-2xl md:text-3xl lg:text-4xl md:h-25 flex md:flex-col items-center justify-center font-bold">
        {title}
      </h2>
      <div className="flex flex-col mt-4 w-full justify-end">
        {sectionData?.map((sectionDataValue) => (
            <MahasiswaCard 
              key={sectionDataValue.ID}
              data={sectionDataValue}
            />
        ))}
      </div>
      <button className="text-base w-full lg:py-2 lg:font-semibold lg:text-3xl border-b border-r border-l rounded-b-xl border-[#D3D3D3] lg:border-none hover:bg-[#D3D3D3] transition-colors">
        Lihat lainnya
      </button>
    </section>
  );
};

export default SectionMahasiswa;
