import { useEffect, useState } from "react";
import AkademikCard from "../../components/card/AkademikCard";
import { getData } from "../../services/api";
import Loading from "../../services/Loading";
import { getDummyData } from "../../data/dummyData";


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
          const data = getDummyData("akademik");
          setAkademikData(data);
          console.error('Error fetching akademik data:', err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAkademik();
    },[])

    const limits = {
      sm: 2,
      md: 3,
      lg: 8
    };
    
    const [screenSize, setScreenSize] = useState("md");
    
    useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("sm");
      } else {
        setScreenSize("md");
      }
    };
    
    updateSize(); // jalankan saat mount
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  
  const displayedItems = akademikData.slice(0, limits[screenSize]);
  
    if(loading ) return <Loading/>

  return (
    <>
      <section id="Akademik" className="font-[inter] bg-white py-5 px-8 md:py-8 lg:px-18">
          <h1 className="text-left text-2xl md:text-3xl lg:text-4xl font-bold border-b-2 border-[#D3D3D3]">
            Akademik & Penelitian
          </h1>
          <div className="flex items-center justify-between mt-5">
            {displayedItems?.map((akademik) =>(
                <AkademikCard 
                  key={akademik.ID}
                  img={akademik.img}
                  tanggal={akademik.tanggal}
                  judul={akademik.judul}
                />
            ))}
          </div>
      </section>
    </>
  );
};

export default Akademik;
