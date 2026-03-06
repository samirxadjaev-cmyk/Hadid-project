import React from 'react'

export const CatalogCard = ({ price = "По запросу", specs, carName, carImg }) => {
 

  return (
    <div className="bg-[#141414] border border-[#1f1f1f] rounded-sm overflow-hidden text-white transition-transform hover:scale-[1.02]">
      <div className="p-6 relative">
        <span className="text-[#6366f1] text-[10px] uppercase tracking-wider font-medium">
          Электрический
        </span>
        <div className="my-8 flex justify-center">
          <img src={carImg} alt="VW ID.6" className="w-full h-auto object-contain max-h-32" />
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">{carName}</h3>
        <p className={`text-center font-medium ${price.includes('$') ? 'text-white' : 'text-[#00C06B]'}`}>
          {price}
        </p>
      </div>
      <div className="grid grid-cols-3 border-t border-[#1f1f1f] bg-[#0d0d0d]">
        {specs.map((spec, i) => (
          <div key={i} className={`p-4 text-center ${i !== 2 ? 'border-r border-[#1f1f1f]' : ''}`}>
            <p className="text-sm font-bold">{spec.value}</p>
            <p className="text-[10px] text-neutral-500 uppercase mt-1">{spec.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


