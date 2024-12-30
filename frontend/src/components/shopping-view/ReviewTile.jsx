import React from 'react'
import { online,more } from '../../assets/ShoppingAssets';
function ReviewTile(props) {
  return (
    <div className='border-[#D6DCE5] border rounded-[20px] px-6 py-7'>
        <div className='flex justify-between items-center py-4'>
      <div className='flex gap-1'>
        <img src={props.image} alt="Rating" />
        <img src={props.image} alt="Rating" />
        <img src={props.image} alt="Rating" />
        <img src={props.image} alt="Rating" />
        </div>
        <div><img src={more} alt="more icon" /></div>
    </div>
    <div className='flex flex-col gap-4'>
        <h3 className='text-[#000] text-xl font-bold flex gap-2'>{props.name}<img src={online} alt="Online Icon" /></h3>
        <p className='text-base text-[#00000099] font-normal'>"{props.description}"</p>
        <h4 className='text-base text-[#00000099] font-medium'>{props.date}</h4>
    </div>
    </div>
  )
}

export default ReviewTile
