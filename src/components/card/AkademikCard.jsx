const AkademikCard = () => {
  return (
    <article className="flex md:flex-col lg:flex-col w-auto md:w-65 lg:w-[512px] cursor-pointer">
        <img className="w-40 h-auto rounded-xl md:w-60 md:h-40 lg:w-[512px] lg:h-[325px]"/>
        <div className="flex flex-col w-40 ml-2 md:w-60 lg:w-[512px]">
            <p className="text-black font-extralight text-xs my-1 md:text-base lg:text-xl">6 agustus 2025</p>
            <h3 className="text-black text-sm text-left md:text-xl lg:text-[32px]">PEMGUMUMAN ! PENGISIAN KRS SEMESTER GANJIL 2025/2026</h3>
            <button className="text-black p-0.5 border w-32 text-xs my-2 md:text-base lg:text-xl md:w-40 lg:w-48">Baca selengkapnya</button>
        </div>
       
    </article>

  );
};

export default AkademikCard;
