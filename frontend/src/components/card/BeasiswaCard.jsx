const BeasiswaCard = ({img,nama,upload}) => {
  return (
    <article className="font-[inter] w-85 lg:w-160 flex py-2 lg:py-4 items-center border-b border-gray-300 cursor-pointer transition-colors">
      <img 
        src={img}
        className="w-16 h-16 lg:w-60 lg:h-36 lg:mr-4 object-cover rounded"
      />
      <div className="ml-3 lg:ml-0 flex-1">
        <h3 className="text-black text-sm lg:text-4xl font-medium leading-relaxed">
          {nama}
          <span className="block text-gray-600 text-xs lg:text-2xl mt-1">
            ({upload})
          </span>
        </h3>
      </div>
    </article>
    
  );
};

export default BeasiswaCard;