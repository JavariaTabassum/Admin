import React from 'react'

function OrderSummary() {
  return (
    <>
     <h2 className='md:text-2xl text-xl font-bold font-satoshi pb-2'>Order Summary</h2> 
     <div className='flex font-satoshi  text-base md:text-xl justify-between items-center py-2'><h3 className='text-[#00000099] font-normal'>Subtotal</h3><h3 className='font-bold text-right'>$565</h3></div>
     <div className='flex font-satoshi text-base md:text-xljustify-between items-centerpy-2 '><h3 className='text-[#00000099] font-normal'>Discount(-20%)</h3><h3 className='font-bold text-right'>-$113</h3></div>
     <div className='flex font-satoshi text-base md:text-xl justify-between items-center pb-4 pt-2'><h3 className='text-[#00000099] font-normal'>Delivery Fee</h3><h3 className='font-bold text-right'>$15</h3></div>
     <hr  className='border-[#0000001A] h-[1px]'/>
     <div className='flex font-satoshi  justify-between items-center text-[#000000] py-4'><h3 className='text-base md:text-xl'>Total</h3><h3 className='font-bold md:text-2xl text-xl text-right'>$467</h3></div>
     <div className='flex items-center gap-3 w-full my-4'><div className='w-[70%] flex gap-2 items-center  bg-[#F0F0F0] px-4 py-3 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M23.0766 12.4857L13.7653 3.17444C13.5917 2.9997 13.3851 2.86115 13.1576 2.76685C12.93 2.67254 12.686 2.62435 12.4397 2.62507H3.75001C3.45164 2.62507 3.16549 2.7436 2.95451 2.95457C2.74353 3.16555 2.62501 3.4517 2.62501 3.75007V12.4398C2.62429 12.6861 2.67248 12.9301 2.76679 13.1576C2.86109 13.3852 2.99963 13.5918 3.17438 13.7654L12.4856 23.0766C12.8372 23.4281 13.3141 23.6256 13.8113 23.6256C14.3084 23.6256 14.7853 23.4281 15.1369 23.0766L23.0766 15.1369C23.4281 14.7853 23.6255 14.3085 23.6255 13.8113C23.6255 13.3141 23.4281 12.8373 23.0766 12.4857ZM13.8113 21.2204L4.87501 12.2813V4.87507H12.2813L21.2175 13.8113L13.8113 21.2204ZM9.37501 7.87507C9.37501 8.17174 9.28703 8.46175 9.12221 8.70842C8.95739 8.9551 8.72312 9.14736 8.44903 9.26089C8.17494 9.37442 7.87334 9.40412 7.58237 9.34625C7.2914 9.28837 7.02413 9.14551 6.81435 8.93573C6.60457 8.72595 6.46171 8.45868 6.40383 8.1677C6.34595 7.87673 6.37566 7.57513 6.48919 7.30104C6.60272 7.02695 6.79498 6.79269 7.04165 6.62786C7.28833 6.46304 7.57834 6.37507 7.87501 6.37507C8.27283 6.37507 8.65436 6.5331 8.93567 6.81441C9.21697 7.09571 9.37501 7.47724 9.37501 7.87507Z" fill="black" fillOpacity="0.4"/>
</svg><input className='text-[#00000066] md:text-base text-sm font-satoshi font-normal focus:outline-none bg-[#F0F0F0]' type="text" placeholder='Add promo code' /></div><div className='text-base font-satoshi font-medium text-[#ffffff] px-8 py-3 bg-[#000000] rounded-full'>Apply</div></div>
     <div className='flex justify-center items-center gap-3 bg-[#000000] rounded-full my-6 px-6 py-4'><p className='text-[#ffffff] font-medium font-satoshi text-base'>Go to Checkout</p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path d="M14.7959 4.4541L21.5459 11.2041C21.6508 11.3086 21.734 11.4328 21.7908 11.5696C21.8476 11.7063 21.8768 11.8529 21.8768 12.001C21.8768 12.149 21.8476 12.2957 21.7908 12.4324C21.734 12.5691 21.6508 12.6933 21.5459 12.7979L14.7959 19.5479C14.5846 19.7592 14.2979 19.8779 13.9991 19.8779C13.7002 19.8779 13.4135 19.7592 13.2022 19.5479C12.9908 19.3365 12.8721 19.0499 12.8721 18.751C12.8721 18.4521 12.9908 18.1654 13.2022 17.9541L18.0313 13.125L4.25 13.125C3.95163 13.125 3.66548 13.0065 3.4545 12.7955C3.24353 12.5846 3.125 12.2984 3.125 12C3.125 11.7017 3.24353 11.4155 3.45451 11.2045C3.66548 10.9936 3.95163 10.875 4.25 10.875L18.0313 10.875L13.2013 6.04598C12.9899 5.83463 12.8712 5.54799 12.8712 5.2491C12.8712 4.95022 12.9899 4.66357 13.2013 4.45223C13.4126 4.24088 13.6992 4.12215 13.9981 4.12215C14.297 4.12215 14.5837 4.24088 14.795 4.45223L14.7959 4.4541Z" fill="white"/>
</svg></div>
    </>
  )
}

export default OrderSummary
