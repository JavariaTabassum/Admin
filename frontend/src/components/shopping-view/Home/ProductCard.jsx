import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const {
    name,
    originalPrice,
    salePrice,
    rating,
    imageUrl,
  } = product;

  const calculateDiscount = (original, sale) => {
    return Math.round(((original - sale) / original) * 100);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
      </div>
    );
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="lg:w-72 lg:h-72 min-w-52 h-52 object-cover rounded-3xl mb-4"
      />
      <h3 className="text-xl font-satoshi font-bold mb-2 whitespace-nowrap">{name}</h3>
      <div className="mb-2 flex gap-2">{renderStars(rating)} <span className='font-satoshi font-normal text-sm'>{rating}/5</span></div>
      <div className="text-2xl font-bold font-satoshi mb-2">
        {salePrice > 0 ? (
          <>
            <span className="text-black font-satoshi font-bold text-2xl">${salePrice}</span>
            <span className="line-through text-gray-400 ml-2 font-satoshi font-bold text-2xl">
              ${originalPrice}
            </span>
            <span className="text-red-500 ml-2 font-satoshi font-medium text-xs">
              -{calculateDiscount(originalPrice, salePrice)}%
            </span>
          </>
        ) : (
          <>${originalPrice}</>
        )}
      </div>
    </div>
  );
};

export default ProductCard;