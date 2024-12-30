import React from 'react'
import ProductList from '../../../components/shopping-view/Home/ProductList';
import {NAImage1,NAImage2,NAImage3,NAImage4,NAImage5,NAImage6,NAImage7,NAImage8} from '../../../assets'

function NewArrivals() {
    const products = [
        {
          id: 1,
          name: 'T-shirt with Tape Details',
          originalPrice: 120,
          salePrice: 0,
          rating: 4.5,
          imageUrl: NAImage1,
        },
        {
          id: 2,
          name: 'Skinny Fit Jeans',
          originalPrice: 260,
          salePrice: 240,
          rating: 3.5,
          imageUrl: NAImage2,
        },
        {
          id: 3,
          name: 'Checkered Skirt',
          originalPrice: 180,
          salePrice: 0,
          rating: 4.5,
          imageUrl: NAImage3,
        },
        {
          id: 4,
          name: 'Sleeve Striped T-shirt',
          originalPrice: 160,
          salePrice: 130,
          rating: 4.5,
          imageUrl: NAImage4,
        },
        {
          id: 5,
          name: 'T-shirt with Tape Details',
          originalPrice: 120,
          salePrice: 0,
          rating: 4.5,
          imageUrl: NAImage5,
        },
        {
          id: 6,
          name: 'Skinny Fit Jeans',
          originalPrice: 260,
          salePrice: 240,
          rating: 3.5,
          imageUrl: NAImage6,
        },
        {
          id: 7,
          name: 'Checkered Skirt',
          originalPrice: 180,
          salePrice: 0,
          rating: 4.5,
          imageUrl: NAImage7,
        },
        {
          id: 8,
          name: 'Sleeve Striped T-shirt',
          originalPrice: 160,
          salePrice: 130,
          rating: 4.5,
          imageUrl: NAImage8,
        },
      ];
    
      return (
        <div className="container mx-auto py-8">
          <h1 className="md:text-5xl text-3xl font-integral font-bold text-center mb-8">New Arrivals</h1>
          <ProductList products={products} />
          <button className='border-0 font-satoshi font-medium text-base text-center mt-20 mx-auto mb-5 justify-center flex'>View All</button>
        </div>
      );
}

export default NewArrivals
