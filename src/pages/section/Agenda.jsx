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
  ];

  return (
    <section className="font-[inter] mb-16 w-full">
      <div className="flex flex-col text-right my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 pb-2 sm:mb-0 border-b-2 border-[#D3D3D3]">
          Agenda
        </h2>
      </div>

      <div className="flex flex-row sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Lihat agenda lainnya card */}
        <AgendaCard isPlaceholder={true} />

        {/* Training cards */}
        {trainingItems.map((item) => (
          <AgendaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Agenda;