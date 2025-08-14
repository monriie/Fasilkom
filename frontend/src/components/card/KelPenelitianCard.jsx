const KelPenelitianCard = ({logo,singkatan, kepanjangan}) => {
  return (
    <article className="font-[inter] flex items-center p-3 rounded-4xl w-[311px] h-[64px]">
        <img src={logo} className="w-12 h-12 mr-3 ml-1"/>
        <div className="pl-2 border-l-1 border-white">
            <h3 className="text-white text-sm">{singkatan}</h3>
            <p className="flex flex-wrap text-white text-sm font-extralight ">{kepanjangan}</p>
        </div>

    </article>
  );
};

export default KelPenelitianCard;