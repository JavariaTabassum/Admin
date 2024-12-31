import React from 'react'
import ProductList from '../../../components/shopping-view/Home/ProductList';
import {TSImage1,TSImage2,TSImage3,TSImage4} from '../../../assets'

function TopSelling() {
    const products = [
        {
          id: 1,
          name: 'Vertical Striped Shirt',
          originalPrice: 232,
          salePrice: 212,
          rating: 5.0,
          imageUrl: TSImage1,
        },
        {
          id: 2,
          name: 'Courage Graphic T-shirt',
          originalPrice: 145,
          salePrice: 0,
          rating: 4.0,
          imageUrl: TSImage2,
        },
        {
          id: 3,
          name: 'Loose Fit Bermuda Shorts',
          originalPrice: 80,
          salePrice: 0,
          rating: 3.0,
          imageUrl: TSImage3,
        },
        {
          id: 4,
          name: 'Faded Skinny Jeans',
          originalPrice: 210,
          salePrice: 0,
          rating: 4.5,
          imageUrl: TSImage4,
        },
      ];
    
      return (
        <div className="container mx-auto py-8">
          <h1 className="md:text-5xl text-3xl font-integral font-bold text-center mb-8">TOP SELLINGS</h1>
          <ProductList products={products} />
          <button className='border-0 font-satoshi font-medium text-base text-center mt-20 mx-auto mb-5 justify-center flex'>View All</button>
        </div>
      );
}

export default TopSelling
