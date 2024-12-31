import React from "react";
import { Increase, decrease, deleteIcon } from "../../assets/ShoppingAssets";

function CartCard({ product }) {
  return (
    <div className="font-satoshi flex md:gap-4 gap-2 py-6 w-full justify-start lg:items-start items-stretch">
     <div className="sm:w-[25%] w-[38%]">
        <img
          className="w-full md:h-[154px] h-full rounded-[20px] object-filld"
          src={product.imageUrl}
          alt={product.name}
        />
        </div>
        <div className="w-[70%] py-2 flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <h3 className="md:text-xl text-base text-[#000000] font-bold">{product.name}</h3>
            <div>
              <img src={deleteIcon} alt="Delete Icon" />
            </div>
            </div>
          <h4 className="md:text-sm text-xs font-normal text-[#000000]">Size:<span className="text-[#00000099]">Small</span></h4>
          <h4 className="md:text-sm  text-xs  font-normal text-[#000000]">Color:<span className="text-[#00000099]">White</span></h4>
<div className="flex items-center justify-between md:py-2 py-0">
          <p className="md:text-2xl text-xl font-bold">${product.salePrice || product.originalPrice}</p>
          <div className="flex gap-4 items-center text-sm rounded-full px-5 py-3 bg-[#F0F0F0]">
            <div>
              <img src={decrease} alt="Decrease Icon" />
            </div>
            <span className="text-[#000000] font-normal text-sm font-satoshi">
              1
            </span>
            <div>
              <img src={Increase} alt="Increase Icon" />
            </div>
          </div>
          </div>
    
      </div>
      
    </div>
  );
}

export default CartCard;
