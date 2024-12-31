import React from "react";
import { filter,fullRate } from "../../assets/ShoppingAssets";
import ReviewTile from "./ReviewTile";

function ProductReviews() {
  return (
    <section className="font-satoshi flex flex-col">
      <div className="flex justify-between items-center py-6">
        <div className="text-[#000] md:text-2xl text-xl font-bold">
          All Reviews<span className="text-[#00000099] font-normal md:text-base text-sm">(451)</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex px-5 py-4 justify-center rounded-full bg-[#F0F0F0]">
            <img src={filter} alt="Filter Reviews" /> </div>
            <div className="md:block hidden">
              <select className="px-6 w-[120px] flex justify-center mx-2 py-4 rounded-full bg-[#F0F0F0]">
                 <option value="latest"  className="px-6 w-[120px] flex justify-center mx-2 py-4 rounded-full bg-[#F0F0F0]  text-base font-medium">Latest</option>
                 </select>
            </div>
            <div className="bg-[#000] text-[#fff] md:px-5 md:py-4 px-4 py-3 rounded-full whitespace-nowrap text-base font-medium">Write a review</div>

        </div>
      </div>
      <div className="grid md:grid-cols-2 fgrid-cols-1 gap-8 p-4 ">
        <ReviewTile image={fullRate}  name="Samantha D." description="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." date="Posted on August 14, 2023"/>
        <ReviewTile image={fullRate}  name="Samantha D." description="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." date="Posted on August 14, 2023"/>
        <ReviewTile image={fullRate}  name="Samantha D." description="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." date="Posted on August 14, 2023"/>
        <ReviewTile image={fullRate}  name="Samantha D." description="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." date="Posted on August 14, 2023"/>
      </div>
     
      <div className="self-center w-[65%] text-center block md:hidden px-[36px] py-[14px] text-[#000] text-sm font-medium border border-[#D6DCE5] rounded-full">Load More Reviews</div>
    </section>
  );
}

export default ProductReviews;
