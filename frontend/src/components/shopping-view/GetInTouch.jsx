import React from 'react'

function GetInTouch() {
  return (
    <>
    <div className='lg:w-1/2 w-full flex flex-col lg:gap-6 gap-4 text-[#181818] font-[Poppins] px-4 pt-6'>
        <div>
        <h3 className='text-[#000D5199] font-normal uppercase md:text-base text-sm'>intimatefashion</h3>
        <h2 className='md:text-[40px] text-2xl font-semibold py-3'>Get in touch</h2></div>
        <div className='w-full lg:flex-row flex-col flex gap-4 md:text-base text-xs font-semibold'>
            <div className='lg:w-1/2 w-full flex flex-col gap-2'><label htmlFor="firstname">First name</label><input className='font-normal border px-4 py-2 border-[#0000004D] opacity-[0.6] rounded-[1px] focus:outline-none' type="text" placeholder='First name'/></div>
            <div className='lg:w-1/2 w-full flex flex-col gap-2'><label htmlFor="lastname">Last name</label><input className='font-normal border px-4 py-2 border-[#0000004D] opacity-[0.6] rounded-[1px] focus:outline-none' type="text" placeholder='Last name' /></div>
        </div>
        <div className='w-full lg:flex-row flex-col flex  gap-4 md:text-base text-xs font-semibold'>
            <div className='lg:w-1/2 w-full flex flex-col gap-2 '><label htmlFor="phone">Your Phone</label><input className='font-normal border px-4 py-2 border-[#0000004D] opacity-[0.6] rounded-[1px] focus:outline-none' type="text" placeholder='Your Phone' /></div>
            <div className='lg:w-1/2 w-full flex flex-col gap-2'><label htmlFor="email">Your Email</label><input className='font-normal border px-4 py-2 border-[#0000004D] opacity-[0.6] rounded-[1px] focus:outline-none'  type="email" placeholder='Your Email' /></div>
        </div>
        
            <div className='w-full md:text-base text-xs font-semibold flex flex-col gap-2'><label htmlFor="">Subject</label><input className='font-normal border px-4 py-2 border-[#0000004D] opacity-[0.6] rounded-[1px] focus:outline-none' type="text"  placeholder='Subject'/></div>
            <div className='w-full md:text-base text-xs font-semibold flex flex-col gap-2'><label htmlFor="">Your Message</label><input className='font-normal border px-4 py-2 border-[#0000004D] opacity-[0.6] rounded-[1px] focus:outline-none' type="text" placeholder='Your Message'/></div>
       
        <div className='lg:w-1/2 w-full bg-[#181818] rounded text-[#ffffff] md:text-xl text-lg  font-semibold py-3 px-4 text-center'>Send message</div>
    </div>
    </>
            
  )
}

export default GetInTouch
