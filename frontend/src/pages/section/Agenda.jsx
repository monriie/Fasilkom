import { useEffect, useState } from "react";
import AgendaCard from "../../components/card/AgendaCard";

const Agenda = () => {
  const trainingItems = [
    {
      id: 1,
      title: "Pelatihan & Sertifikasi Internasional",
      image: "/api/placeholder/300/200",
      logos: ["Oracle", "Adobe", "Nvidia", "Cisco"]
    },
    {
      id: 2,
      title: "Pelatihan & Sertifikasi Internasional",
      image: "/api/placeholder/300/200", 
      logos: ["Oracle", "Adobe", "Nvidia", "Cisco"]
    },
    {
      id: 2,
      title: "Pelatihan & Sertifikasi Internasional",
      image: "/api/placeholder/300/200", 
      logos: ["Oracle", "Adobe", "Nvidia", "Cisco"]
    },
    {
      id: 2,
      title: "Pelatihan & Sertifikasi Internasional",
      image: "/api/placeholder/300/200", 
      logos: ["Oracle", "Adobe", "Nvidia", "Cisco"]
    },
    {
      id: 2,
      title: "Pelatihan & Sertifikasi Internasional",
      image: "/api/placeholder/300/200", 
      logos: ["Oracle", "Adobe", "Nvidia", "Cisco"]
    },
    {
      id: 2,
      title: "Pelatihan & Sertifikasi Internasional",
      image: "/api/placeholder/300/200", 
      logos: ["Oracle", "Adobe", "Nvidia", "Cisco"]
    },
  ];


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

  const displayedItems = trainingItems.slice(0, limits[screenSize]);

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
        {displayedItems.map((item,idx) => (
          <AgendaCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Agenda;