import React from "react";
import { HeroImage1, HeroImage2, Herovector } from "../../../assets";
import { BiSolidDownArrow } from "react-icons/bi";

function HeroSection() {
  return (
    <section className="relative w-full py-8">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col lg:flex-row items-center px-4 lg:px-16 lg:justify-between lg:space-x-8">
        {/* Text Section */}
        <div className="relative text-center lg:text-left w-full lg:w-1/2 mb-5">
          <h1 className="text-5xl lg:text-7xl font-normal mb-4 font-['Abril_Fatface']">
            All IFG Products
          </h1>
          <p className="text-lg text-gray-600 mb-6 font-[ABeeZee]">
            Intimate Fashions Pakistan's collection of lingerie is designed to
            cater to every woman's needs and preferences. Whether you're looking
            for comfortable everyday wear or something sexy for a special
            occasion, our collection has got you covered.
          </p>
          <button className="bg-gray-500 font-medium text-white px-16 py-3 rounded-full font-satoshi text-lg hover:bg-gray-700 transition">
            Shop Now
          </button>
          <div className="flex justify-center lg:justify-start space-x-6 mt-6">
            <div>
              <p className="text-2xl font-bold font-satoshi text-primary">
                2,000+
              </p>
              <p className="text-gray-600 font-regular font-satoshi">
                High-Quality Products
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold font-satoshi text-primary">
                30,000+
              </p>
              <p className="text-gray-600 font-regular font-satoshi">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src={Herovector}
            alt=""
            className="w-14 h-14 absolute left-0 top-56 lg:flex hidden"
          />
          <img
            src={HeroImage1}
            alt="Product 1"
            className="w-1/2 sm:w-1/3 lg:w-2/3 -mr-10 lg:-mr-44 z-50"
          />
          <img
            src={HeroImage2}
            alt="Product 2"
            className="w-1/2 sm:w-1/3 lg:w-2/3 z-0"
          />
          <img
            src={Herovector}
            alt=""
            className="w-24 h-24 absolute lg:flex hidden"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col items-center text-center px-4">
        {/* Heading, Images, and Stats Section */}
        <div className="flex items-center mb-6">
          <div className="flex flex-col w-1/2 items-start justify-normal">
            <h1 className="text-2xl font-normal text-start whitespace-nowrap mb-4 font-['Abril_Fatface']">
              All Products
            </h1>
            <div className="flex flex-col justify-start items-start">
              <div>
                <p className="text-2xl font-bold font-satoshi text-primary text-start">
                  2,000+
                </p>
                <p className="text-gray-600 font-regular font-satoshi whitespace-nowrap">
                  High-Quality Products
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold font-satoshi text-start text-primary">
                  30,000+
                </p>
                <p className="text-gray-600 font-regular font-satoshi whitespace-nowrap">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-start lg:mt-0">
            <img
              src={HeroImage1}
              alt="Product 1"
              className="w-36 h-48 -mr-16 z-50"
            />
            <img
              src={HeroImage2}
              alt="Product 2"
              className="w-36 h-48 z-0"
            />
          </div>
        </div>

        {/* Content and Button Section */}
        <div className="w-full">
          <p className="text-base text-gray-600 mb-6 sm:w-1/2 mx-auto font-[ABeeZee] text-justify">
            Intimate Fashions Pakistan's collection of lingerie is designed to
            cater to every woman's needs and preferences. Whether you're looking
            for comfortable everyday wear or something sexy for a special
            occasion, our collection has got you covered.
          </p>
          <button className="bg-gray-500 font-medium text-white px-10 py-2 rounded-full font-satoshi text-base hover:bg-gray-700 transition mb-4">
            Shop Now
          </button>
        </div>
      </div>

      {/* Bottom Swiper Section */}
      <div className="bg-black py-3 lg:px-10">
        <div className="flex md:gap-12 gap-6 overflow-x-auto no-scrollbar">
          <div className="p-4 flex items-center justify-center gap-3 w-fit text-white font-[ABeeZee] md:text-xl xl:text-2xl text-base rounded-lg">
            Color <BiSolidDownArrow />
          </div>
          <div className="p-4 flex items-center justify-center w-fit gap-3 text-white font-[ABeeZee] md:text-xl xl:text-2xl text-base rounded-lg whitespace-nowrap">
            Cup Size <BiSolidDownArrow />
          </div>
          <div className="p-4 flex items-center justify-center gap-3 text-white font-[ABeeZee] md:text-xl xl:text-2xl text-base rounded-lg whitespace-nowrap">
            Band Size <BiSolidDownArrow />
          </div>
          <div className="p-4 flex items-center justify-center gap-3 text-white font-[ABeeZee] md:text-xl xl:text-2xl text-base rounded-lg whitespace-nowrap">
            Product Type <BiSolidDownArrow />
          </div>
          <div className="p-4 flex items-center justify-center gap-3 text-white font-[ABeeZee] md:text-xl xl:text-2xl text-base rounded-lg">
            Size <BiSolidDownArrow />
          </div>
          <div className="p-4 flex items-center justify-center gap-3 text-white font-[ABeeZee] md:text-xl xl:text-2xl text-base rounded-lg whitespace-nowrap">
            Sort By <BiSolidDownArrow />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
