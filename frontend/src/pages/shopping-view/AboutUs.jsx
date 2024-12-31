import React, { useState } from 'react'
import Collections from '../../components/shopping-view/About/Collections';
import Customizable from '../../components/shopping-view/About/Customizable';
import { customImage1,customImage2,filterIcon } from '../../assets/ShoppingAssets';
import SeeCollection from '../../components/shopping-view/About/SeeCollection';
import {NAImage1,NAImage2,NAImage3,NAImage4,NAImage5,NAImage6,NAImage7,NAImage8} from '../../assets'
import ProductList from "../../components/shopping-view/Home/ProductList";



function AboutUs() {

  // selecting category
  const categories=["All products","T-Shirt","Hoodies","Jacket"];
  const [selectedCategory, setSelectedCategory] = useState("All products");
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
    <>
    <Collections/>
    <div className='flex lg:flex-row flex-col gap-8 lg:px-14 flex-row py-6 justify-center items-stretch'>
    <Customizable image={customImage1}/>
    </div>
    <div className='flex  lg:flex-row-reverse flex-col gap-8 lg:px-14 py-6 justify-center items-stretch'>
        <Customizable image={customImage2}/>
    </div>
    <SeeCollection/>
    {/* newsletter section */}
    <div className='lg:px-14 md:px-12 px-6'>
      <h2 className='capitalize text-center font-Roboto text-[44px] font-medium py-4'>or Subscribe to the newsletter</h2>
      {/* Top section */}
      <div className='flex justify-between items-center px-16 py-2'>
      <div className="text-sm font-semibold flex gap-8">
      {categories.map((category, index) => (
        <h3
          key={index}
          onClick={() => setSelectedCategory(category)} // Update the selected category
          className={`cursor-pointer ${
            selectedCategory === category ? "text-[#000000]" : "text-[#00000080]"
          }`}
        >
          {category}
        </h3>
      ))}
    </div>
        <div className='flex justify-center items-center font-normal py-2 bg-[#1E2832] gap-2 text-sm px-4  text-[#ffffff]'><img src={filterIcon} alt="Filter Icon" />Filter</div>
      </div>
      <ProductList products={products} />
    </div>
    </>
  )
}

export default AboutUs
