const BeasiswaCard = () => {
  return (
    <article className="font-[inter] flex items-center p-4 w-full lg:max-w-2xl border-b border-gray-300 cursor-pointer transition-colors">
      <img 
        className="w-16 h-16 lg:w-60 lg:h-36 lg:mr-4 object-cover rounded"
      />
      <div className="ml-3 lg:ml-0 flex-1">
        <h3 className="text-black text-sm lg:text-4xl font-medium leading-relaxed">
          Beasiswa A
          <span className="block text-gray-600 text-xs lg:text-2xl mt-1">
            (Perusahaan A)
          </span>
        </h3>
      </div>
    </article>
    
  );
};

export default BeasiswaCard;