import React from 'react';
import {Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <Link to={"/shopping-view/product-details"} className="flex lg:grid lg:grid-cols-4 gap-6 px-3 overflow-x-auto scroll-smooth no-scrollbar" >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Link>
  );
};

export default ProductList;