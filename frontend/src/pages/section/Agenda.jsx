import { useEffect, useState } from "react";
import AgendaCard from "../../components/card/AgendaCard";
import { getData } from "../../services/api";
import Loading from "../../services/Loading";

const Agenda = () => {
  const [agendaData, setAgendaData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
      const fetchAgenda = async () => {
        try {
          setLoading(true);
          const data = await getData("agenda");
          setAgendaData(data.agenda);
          console.log(data.agenda);
        } catch (err) {
          console.error('Error fetching Agenda data:', err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAgenda();
    },[])
  
    
    
    const limits = {
      sm: 2,
      md: 3,
      lg: 8
    };
    
    const [screenSize, setScreenSize] = useState("lg");
    
    useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("sm");
      } else if (window.innerWidth < 1024) {
        setScreenSize("md");
      } else {
        setScreenSize("lg");
      }
    };
    
    updateSize(); // jalankan saat mount
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  
  const displayedItems = agendaData.slice(0, limits[screenSize]);
  if(loading) return <Loading/>
  
  return (
    <section className="font-[inter] mb-16 w-full">
      <div className="flex flex-col text-right my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 pb-2 sm:mb-0 border-b-2 border-[#D3D3D3]">
          Agenda
        </h2>
      </div>

      <div className="flex flex-row gap-4">
        {/* Lihat agenda lainnya card */}
        <AgendaCard isPlaceholder={true} />

        {/* Training cards */}
        {displayedItems.map((agenda) => (
          <AgendaCard 
          key={agenda.ID}
          img={agenda.img}
          judul={agenda.judul}
          />
        ))}
      </div>
    </section>
  );
};

export default Agenda;