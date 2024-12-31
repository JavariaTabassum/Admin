import React from 'react'

function ProductInfo() {
  return (
    <section className='font-satoshi px-2 py-8'>
      <h2 className='font-satoshi md:text-2xl  text-xl text-[#000] font-bold'>Here's why we love them:</h2>
      <ol className='list-decimal lg:w-[840px] w-full ps-5 py-6 flex items-center gap-3.5 flex-col'>
        <li className='md:text-2xl text-sm font-bold text-[#000]'>Supreme Comfort: <span className='md:text-xl text-xs font-normal'>Indulge in luxurious comfort with our high-waisted briefs, meticulously crafted from pure cotton for a soft, breathable feel against your skin.</span></li>
        <li className='md:text-2xl text-sm font-bold text-[#000]'>Flattering High Waist:<span className='md:text-xl text-xs font-normal'> Experience ultimate coverage and support with our high-waisted design, offering a flattering fit that accentuates your curves and provides all-day comfort.</span></li>
        <li className='md:text-2xl text-sm font-bold text-[#000]'>Premium Quality:<span className='md:text-xl text-xs font-normal'>Made from premium cotton fabric, our briefs ensure durability, elasticity, and long-lasting comfort, making them a wardrobe essential.</span></li>
        <li className='md:text-2xl text-sm font-bold text-[#000]'>Versatile Style:<span className='md:text-xl text-xs font-normal'> Whether you're lounging at home or stepping out for the day, our versatile briefs offer the perfect blend of style and functionality to complement any outfit.</span></li>
      </ol>
      
    </section>
  )
}

export default ProductInfo;
