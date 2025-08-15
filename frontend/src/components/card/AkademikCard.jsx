const AkademikCard = ({img,tanggal,judul}) => {
  return (
    <article className="flex flex-col w-auto md:w-65 lg:w-95 cursor-pointer">
        <img src={img} className="w-40 h-auto rounded-xl md:w-60 md:h-40 lg:w-95 lg:h-70"/>
        <div className="flex flex-col w-40 ml-2 md:w-60 lg:w-95">
            <p className="text-black font-extralight text-xs my-1 md:text-base lg:text-base">{tanggal}</p>
            <h3 className="text-black text-sm text-left md:text-xl lg:text-2xl line-clamp-3">{judul}</h3>
            <button className="text-black p-0.5 border w-32 text-xs my-2 md:text-base lg:text-base md:w-40 lg:w-42">Baca selengkapnya</button>
        </div>
       
    </article>

  );
};

export default AkademikCard;
