import React from 'react';
import { image } from '../../../assets/ShoppingAssets';

function SeeCollection() {
  return (
    <section className='flex md:flex-row flex-col justify-center md:items-stretch items-center gap-5 bg-[#010204] md:px-16 md:py-0 py-12 my-4 px-8' >
        <div className='md:w-[40%] w-full'><img src={image} alt="See Collection" /></div>
      <div className='md:w-1/2 w-full self-center py-4'><p className='font-Roboto md:text-2xl text-sm font normal text-[#ffffff] py-4'>Lustrous yet understated. The new evening
wear collection exclusively offered at the
reopened Giorgio Armani boutique in Los
Angeles.</p>
<button className='py-3 px-6 bg-[#fff] text-[#1E2832] md:text-[26px] text-center font-Roboto text-sm'>See Collection</button></div>
    </section>
  )
}

export default SeeCollection
