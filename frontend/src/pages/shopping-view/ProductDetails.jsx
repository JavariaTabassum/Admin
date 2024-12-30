import React, { useState } from "react";
import {TSImage1,TSImage2,TSImage3,TSImage4} from '../../assets';
import ProductList from "../../components/shopping-view/Home/ProductList";
import {
  productImage,
  halfRate,
  fullRate,
  Increase,
  decrease,
} from "../../assets/ShoppingAssets";
import ProductInfo from "../../components/shopping-view/ProductInfo";
import ProductReviews from "../../components/shopping-view/ProductReviews";

function ProductDetails() {

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
      
  const [selectedSize, setSelectedSize] = useState("small");
  const [isSelected, setSelected] = useState("ProductDetails");
  const handleProductDetails=(section)=>{
    setSelected(section);
  }
  const handleSizeSelected = (size) => {
    setSelectedSize(size); // Update the selected size when clicked
  };
  return (
    <>
      {/* Main Product details page */}
      <div className="md:px-14 px-4  md:py-2 py-4">
        {/* Header of product detail */}
        <div className="flex gap-1 font-base text-[#00000099] font-normal py-4">
          <span>Home</span>&gt;<span>Shop</span>&gt;<span>Men</span>&gt;
          <span className="text-[#000000]">Tshirt</span>
        </div>
        {/* Product Details Section */}
        <div className="lg:flex-row flex-col flex gap-[3rem] lg:items-stretch items-center">
          {/* Images Section */}
          <div className="flex gap-3 lg:flex-row flex-col-reverse lg:items-stretch items-center lg:w-1/2 w-full">
            <div className="flex lg:flex-col flex-row w-full gap-3 justify-between lg:w-3/12 py-2">
              <div className="w-full h-full">
                <img
                  className="w-full h-full"
                  src={productImage}
                  alt="Product1"
                />
              </div>
              <div className="w-full h-full">
                <img
                  className="w-full h-full"
                  src={productImage}
                  alt="Product2"
                />
              </div>
              <div className="w-full h-full">
                <img
                  className="w-full h-full"
                  src={productImage}
                  alt="Product3"
                />
              </div>
            </div>
            <div className="lg:w-3/4  w-full h-full">
              <img
                src={productImage}
                className="w-full object-fill h-full"
                alt="Product"
              />
            </div>
          </div>
          {/* Description Section */}
          <div className="flex flex-col gap-4 md:p-0 lg:w-1/2 w-full">
            {/* Product Name */}
            <h2 className="text-[#000000] md:text-[40px] text-[30px] font-extrabold">
              Deluxe Mix & Match 029
            </h2>
            {/* Ratings */}
            <div className="flex gap-2">
              <img src={fullRate} alt="1 Rating" />
              <img src={fullRate} alt="1 Rating" />
              <img src={fullRate} alt="1 Rating" />
              <img src={fullRate} alt="1 Rating" />
              <img src={halfRate} alt="Half Rating" />
              <h4 className="text-[#000000] font-normal text-base">
                4.5/<span className="text-[#00000099]">5</span>
              </h4>
            </div>
            {/* Product Price */}
            <h3 className="text-2xl font-bold flex gap-4 items-center">
              Rs.1,440.00{" "}
              <span className="text-[#0000004D] line-through">Rs.300</span>
              <span className="text-base font-medium text-[#FF3333]">-40%</span>
            </h3>
            <p className="text-[#00000099] font-normal text-base">
              Introducing Mix and Match 029: Pack of 3 high-waisted pure cotton
              briefs, designed to elevate your comfort and style. Crafted from
              the finest quality, soft stretchable cotton fabric, these briefs
              promise the perfect fit every time.
            </p>
            {/* Select Colors */}
            <label className="text-[#00000099] font-normal text-base">
              Select colors
            </label>
            <div className="flex gap-4 items-center">
              <div className="w-[37px] bg-[#4F4631] h-[37px] rounded-full"></div>
              <div className="w-[37px] bg-[#314F4A] h-[37px] rounded-full"></div>
              <div className="w-[37px] bg-[#9999CB] h-[37px] rounded-full"></div>
            </div>
            {/* Choose Size */}
            <label className="text-[#00000099] font-normal text-base">
              Choose Size
            </label>
            <div className="flex md:gap-4 gap-2 md:items-center justify-between w-full">
              <h3
                className={`capitalize text-[#00000099] rounded-full font-normal md:text-base text-sm  px-3 md:px-6 py-3 ${
                  selectedSize === "small" ? "bg-[#000000] text-[#ffffff]" : ""
                }`}
                onClick={() => handleSizeSelected("small")}
              >
                small
              </h3>
              <h3
                className={`capitalize text-[#00000099] rounded-full font-normal md:text-base text-sm  px-4 md:px-6 py-3 ${
                  selectedSize === "medium" ? "bg-[#000000] text-[#ffffff]" : ""
                }`}
                onClick={() => handleSizeSelected("medium")}
              >
                medium
              </h3>
              <h3
                className={`capitalize text-[#00000099] rounded-full font-normal md:text-base text-sm  px-4 md:px-6 py-3 ${
                  selectedSize === "large" ? "bg-[#000000] text-[#ffffff]" : ""
                }`}
                onClick={() => handleSizeSelected("large")}
              >
                large
              </h3>
              <h3
                className={`capitalize text-[#00000099] rounded-full  font-normal md:text-base text-sm px-4  md:px-6 py-3 ${
                  selectedSize === "x-large"
                    ? "bg-[#000000] text-[#ffffff]"
                    : ""
                }`}
                onClick={() => handleSizeSelected("x-large")}
              >
                X-large
              </h3>
            </div>
            <div className="flex md:gap-6 gap-3 items-center w-full">
              <div className="flex w-[30%] gap-4 justify-between  items-center md:px-5 md:py-4 px-4 py-3 rounded-full bg-[#F0F0F0]">
              <div>
                <img src={decrease} alt="Decrease Icon" />
              </div>
              <span className="text-[#000000] font-normal text-base">1</span>
              <div>
                
                <img src={Increase} alt="Increase Icon" />
              </div>
              </div>
              <div className="bg-[#000000] gap-3 font-medium text-[#ffffff]  w-[65%]   md:px-[50px] py-4 flex items-center justify-center rounded-full">
                Add to Cart
              </div>
            </div>
          </div>
        </div>
        {/* Product Details and Product Reviews tabs */}
        <div className="flex pt-8 justify-between items-center">
          <div className={`text-[#000] md:text-xl text-base w-[40%] text-center font-medium py-4 ${isSelected==="ProductDetails"?"border-b-4 border-[#000]":""}`} onClick={()=>handleProductDetails("ProductDetails")}>Product Details</div>
          <div className={`text-[#000] w-[40%] text-center py-4  md:text-xl text-base font-medium ${isSelected==="ratingReviews"?"border-b-4 border-[#000]":""}`} onClick={()=>handleProductDetails("ratingReviews")}>Rating & Reviews</div>
        </div>
        {isSelected==="ProductDetails"?<ProductInfo/>:<ProductReviews/>}
        {/* You might also Like */}
        <h2 className="text-center uppercase font-bold text-[#000] md:text-5xl text-[32px] px-[53px] py-4">you might also like</h2>
        <ProductList products={products} />
      </div>

    </>
  );
}

export default ProductDetails;
