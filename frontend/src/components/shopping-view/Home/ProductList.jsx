import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="flex lg:grid lg:grid-cols-4 gap-6 px-3 overflow-x-auto scroll-smooth no-scrollbar">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;