import React from 'react';
import { BSImage1, BSImage2,BSImage3, BSImage4 } from '../../../assets';


const BrowseByDressStyle = () => {
  return (
    <div className="my-10 p-4 xl:mx-20 lg:mx-12 md:mx-6">
      <h2 className="md:text-5xl text-3xl font-bold font-integral text-center mb-10">BROWSE BY DRESS STYLE</h2>
      <div className="grid lg:grid-cols-5 grid-cols-2 md:gap-10 gap-2">
        {/* All Bras */}
        <div className="relative lg:col-span-2 col-span-1">
          <img
            src={BSImage1}
            alt="All Bras"
            className="md:w-full w-auto sm:h-72 h-32 object-cover rounded-xl"
          />
          <div className="absolute lg:flex hidden inset-0 top-10 left-6">
            <span className=" font-normal font-[Poppins] text-4xl">All Bras</span>
          </div>
          <div className="absolute lg:hidden flex inset-0 top-4 left-2">
            <span className=" font-normal font-[Poppins] md:text-4xl sm:text-2xl text-sm">Camisole</span>
          </div>
        </div>
        {/* Nightwear */}
        <div className="relative lg:col-span-3 col-span-1 flex justify-end">
          <img
            src={BSImage2}
            alt="Nightwear"
            className="w-auto lg:flex hidden sm:h-72 h-32 object-cover rounded"
          />
          <div className="absolute inset-0 top-10 left-0">
            <span className=" font-normal lg:flex hidden font-[Poppins] md:text-4xl sm:text-2xl text-sm">Nightwear</span>
          </div>
          <img
            src={BSImage3}
            alt="Panties"
            className="w-auto sm:h-72 lg:hidden flex h-32 object-cover rounded"
          />
          <div className="absolute inset-0 top-4 md:-left-6 left-2">
            <span className="font-normal lg:hidden flex font-[Poppins] md:text-4xl sm:text-2xl text-sm">Panties</span>
          </div>
        </div>
        {/* Camisole */}
        <div className="relative lg:col-span-3 col-span-1 flex justify-end">
          <img
            src={BSImage4}
            alt="Camisole"
            className="w-auto sm:h-72 h-40 object-cover rounded"
          />
          <div className="absolute inset-0 top-10 left-8">
            <span className=" font-normal hidden lg:flex font-[Poppins] md:text-4xl sm:text-2xl text-sm">Camisole</span>
          </div>
          <div className="absolute inset-0 top-4 left-2">
            <span className=" font-normal flex lg:hidden font-[Poppins] md:text-4xl sm:text-2xl text-sm">Nightwear</span>
          </div>
        </div>
        {/* Panties */}
        <div className="relative lg:col-span-2 col-span-1 flex justify-end">
          <img
            src={BSImage3}
            alt="Panties"
            className="w-auto sm:h-72 lg:flex hidden h-32 object-cover rounded"
          />
          <div className="absolute inset-0 top-10 xl:left-8 lg:-left-8 left-8">
            <span className="font-normal lg:flex hidden font-[Poppins] md:text-4xl sm:text-2xl text-sm">Panties</span>
          </div>
          <img
            src={BSImage2}
            alt="Nightwear"
            className="w-auto flex lg:hidden sm:h-72 h-32 object-cover rounded"
          />
          <div className="absolute inset-0 top-2 md:-left-7 left-2">
            <span className=" font-normal flex lg:hidden font-[Poppins] md:text-4xl sm:text-2xl text-sm">All Bras</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByDressStyle;

