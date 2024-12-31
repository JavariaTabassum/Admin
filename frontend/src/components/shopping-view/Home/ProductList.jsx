import React from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from "react-router-dom";


const ProductList = ({ products }) => {
  const navigate = useNavigate();

// const handleCardClick = (productId) => {
//   navigate(`product/${productId}`);
//   console.log("productid", productId);
// };

  return (
    <div  className="flex lg:grid lg:grid-cols-4 gap-6 px-3 overflow-x-auto scroll-smooth no-scrollbar" >
      {products.map((product) => (
        <div onClick={() =>navigate("product-details")}>
        <ProductCard  key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;