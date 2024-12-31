import React from 'react'
import CartCard from '../../components/shopping-view/CartCard';
import {TSImage1,TSImage2,TSImage3,TSImage4} from '../../assets';
import OrderSummary from '../../components/shopping-view/OrderSummary';


function Cart() {
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
    <div className='lg:px-[5rem] px-6 py-4'>
      {/* Header of Cart */}
      <div className="flex gap-1 font-base text-[#00000099] font-normal py-4 font-satoshi">
          <span>Home</span>&gt;
          <span className="text-[#000000]">Cart</span>
        </div>
        <h2 className='uppercase text-[40px] font-integral font-bold'>your cart</h2>
        <div className='flex lg:flex-row flex-col  gap-6 items-start'>
          {/* Cart items */}
          <div className='flex  border rounded-[20px] border-[#0000001A] flex-col lg:w-[60%] w-full lg:px-4 px-2'>
            {products.map(product=>{
              return(
                <>
                 <CartCard key={product.id} product={product}/>
                 <hr  className='border-[#0000001A] h-[1px]'/>
                 </>)
            })}

          </div>
          {/* Order summary */}
          <div className='lg:w-[40%] w-full'>
          <OrderSummary/></div>
        </div>
    </div>
  )
}

export default Cart
