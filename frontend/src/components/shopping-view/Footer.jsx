import React from "react";
import { TfiEmail } from "react-icons/tfi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub
} from "react-icons/fa";
import {GPay, Paypal, APay, logo, Visa, Mastercard} from '../../assets'

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      {/* Newsletter Section */}
      <div className="bg-black text-white py-6 px-4 lg:mx-20 lg:px-14 mx-3 rounded-3xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-3xl md:text-4xl font-bold font-integral w-full text-left mb-4 lg:mb-0">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col justify-between items-center w-full space-y-4">
            <div className="flex items-center w-full lg:w-96 bg-white text-gray-800 rounded-full py-1 px-2">
              <TfiEmail className="mx-3 mt-1 text-gray-600" size={20} />
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 w-full rounded-full focus:outline-none"
              />
            </div>
            <button className="bg-white text-black py-3 px-6 rounded-full font-bold hover:bg-gray-200 w-full lg:w-96">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content Section */}
      <div className="py-10 px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:py-5 pb-5 lg:items-start border-b-2 border-gray-300 space-y-8 lg:space-y-0">
          {/* Logo and Description */}
          <div className="text-left lg:w-1/4 md:w-1/2">
            <div className="min-h-20 w-60 mb-4 hidden md:flex items-center justify-start">
              <img src={logo} alt="" className="xl:h-full xl:w-full w-4/6 h-4/6" />
            </div>
            <h1 className="md:hidden flex font-bold mb-2 font-integral text-3xl">SHOP.CO</h1>
            <p className="text-gray-600 text-sm font-satoshi font-normal">
              We have clothes that suit your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex justify-start space-x-4 mt-4 lg:-mb-12">
              <div className="h-11 w-11 flex items-center justify-center bg-white rounded-full border-2 border-gray-300"><FaTwitter className="text-black" size={24} /></div>
              <div className="h-11 w-11 flex items-center justify-center bg-black rounded-full "><FaFacebookF className="text-white" size={24} /></div>
              <div className="h-11 w-11 flex items-center justify-center bg-white rounded-full border-2 border-gray-300"><FaInstagram className="text-black" size={24} /></div>
              <div className="h-11 w-11 flex items-center justify-center bg-white rounded-full border-2 border-gray-300"><FaGithub className="text-black" size={24} /></div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-left text-base">
            <div>
              <h3 className="font-medium font-satoshi mb-2">COMPANY</h3>
              <ul className="text-gray-600 font-satoshi font-normal space-y-2">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium font-satoshi mb-2">HELP</h3>
              <ul className="text-gray-600 font-satoshi font-normal space-y-2">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium font-satoshi  mb-2">FAQ</h3>
              <ul className="text-gray-600 font-satoshi font-normal space-y-2">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2 font-satoshi">RESOURCES</h3>
              <ul className="text-gray-600 font-satoshi font-normal space-y-2">
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>YouTube Playlist</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-2 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p className="text-gray-600 text-sm font-satoshi font-normal hidden lg:flex">
          intimatefashion © 2000-2023, All Rights Reserved
          </p>
          <p className="text-gray-600 text-sm font-satoshi font-normal lg:hidden flex">
          Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex">
            <div className="w-12 h-7 items-center justify-center flex"><img className="h-2.5 w-8" src={Visa} alt="" /></div>
            <div className="w-12 h-7 items-center justify-center flex"><img className="h-3.5 w-8" src={Mastercard} alt="" /></div>
            <div className="w-12 h-7 items-center justify-center flex"><img className="h-3.5 w-8" src={Paypal} alt="" /></div>
            <div className="w-12 h-7 items-center justify-center flex"><img className="h-3.5 w-8" src={APay} alt="" /></div>
            <div className="w-12 h-7 items-center justify-center flex"><img className="h-3.5 w-8" src={GPay} alt="" /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;