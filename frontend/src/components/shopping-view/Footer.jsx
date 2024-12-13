import React from "react";
import { TfiEmail } from "react-icons/tfi";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaCcPaypal,
  FaCcApplePay,
  FaGooglePay,
} from "react-icons/fa";
import { RiVisaLine, RiMastercardFill  } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      {/* Newsletter Section */}
      <div className="bg-black text-white py-6 px-4 lg:mx-20 lg:px-14 mx-3 rounded-3xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-5xl font-bold text-left mb-4 lg:mb-0">
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
          <div className="text-left lg:w-1/4">
            <div className="h-12 w-36 bg-gray-300 mb-4 hidden lg:flex items-center justify-center">
              {/* Bee Comfort Logo */}
            </div>
            <h1 className="lg:hidden flex font-bold mb-2">SHOP.CO</h1>
            <p className="text-gray-600 text-sm">
              We have clothes that suit your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex justify-start space-x-4 mt-4">
              <div className="h-11 w-11 flex items-center justify-center rounded-full border-2 border-gray-300"><FaTwitter className="text-black" size={24} /></div>
              <div className="h-11 w-11 flex items-center justify-center rounded-full "><FaFacebook className="text-black" size={48} /></div>
              <div className="h-11 w-11 flex items-center justify-center rounded-full border-2 border-gray-300"><FaInstagram className="text-black" size={24} /></div>
              <div className="h-11 w-11 flex items-center justify-center rounded-full border-2 border-gray-300"><FaGithub className="text-black" size={24} /></div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-left text-base">
            <div>
              <h3 className="font-bold mb-2">COMPANY</h3>
              <ul className="text-gray-600 space-y-2">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">HELP</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">FAQ</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">RESOURCES</h3>
              <ul className="text-gray-600 space-y-2">
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
          <p className="text-gray-600 text-sm">
          intimatefashion © 2000-2023, All Rights Reserved
          </p>
          <div className="flex space-x-4">
            <RiVisaLine className="text-blue-700" size={40} />
            <RiMastercardFill 
              className="text-red-600"
              size={40}
            />
            <FaCcPaypal 
              className="text-blue-500 hover:text-blue-600"
              size={40}
            />
            <FaCcApplePay
              className="text-black hover:text-gray-800"
              size={40}
            />
            <FaGooglePay
              className="text-green-600 hover:text-green-700"
              size={40}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;