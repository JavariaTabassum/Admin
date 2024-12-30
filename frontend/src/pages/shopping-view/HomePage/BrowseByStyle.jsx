import React from 'react';
import { BSImage1, BSImage2,BSImage3, BSImage4 } from '../../../assets';
const BrowseByStyle = () => {
  const categories = [
    { name: 'Camisole', image: BSImage1 },
    { name: 'Panties', image: BSImage2 },
    { name: 'Nightwear', image: BSImage3 },
    { name: 'All Bras', image: BSImage4 },
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="md:text-5xl text-3xl font-bold font-integral text-center mb-10">Browse by Dress Style</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border rounded-lg overflow-hidden shadow-md bg-white"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center font-medium">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByStyle;
