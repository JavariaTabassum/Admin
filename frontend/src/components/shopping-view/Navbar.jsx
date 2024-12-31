// Navbar.jsx
import React, { useState } from 'react';
import { FiMenu, FiSearch, FiChevronDown, FiX } from 'react-icons/fi';
import { IoCartOutline } from "react-icons/io5";
import {Link } from 'react-router-dom'
import { logo, Profile } from '../../assets';

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full px-1">
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-2 lg:px-4 xl:px-8 py-3">
        {/* Left: Menu Icon and Logo */}
        <div className="flex items-center gap-2">
          <FiMenu
            className="text-black text-2xl lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center xl:gap-6 gap-4 font-[ABeeZee]">
          <div className="relative group">
            <button className="hidden xl:flex items-center text-black hover:text-primary">
              Shop <FiChevronDown className="ml-1 mt-1" />
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded hidden group-hover:block">
              <ul className="flex flex-col gap-2 p-2">
                <li><Link to="/category1" className="hover:text-primary text-base">Category 1</Link></li>
                <li><Link to="/category2" className="hover:text-primary text-base">Category 2</Link></li>
                <li><Link to="/category3" className="hover:text-primary text-base">Category 3</Link></li>
              </ul>
            </div>
          </div>
          <Link to="/categories" className="text-black hover:text-primary text-base">Categories</Link>
          <Link to="/on-sale" className="text-black hover:text-primary text-base">On Sale</Link>
          <Link to="/new-arrivals" className="text-black hover:text-primary text-base">New Arrivals</Link>
          <Link to="/shopping-view/about-us" className="text-black hover:text-primary text-base">About Us</Link>
        </div>

        {/* Right: Profile, Cart, Search */}
        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden lg:flex items-center bg-pink-100 px-4 py-2 rounded-full font-['Public Sans'] min-w-64 max-w-96">
            <FiSearch className="text-primary text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 bg-transparent text-black outline-none text-sm"
            />
          </div>
          <Link to="/create-account" className="bg-primary text-base whitespace-nowrap text-white px-4 py-2 rounded-md font-['Plus Jakarta Sans']">Sign Up</Link>
          <Link
            to="/cart"
            className="bg-primary text-white rounded-full p-2 flex items-center justify-center"
          >
            <IoCartOutline className="text-white text-2xl" />
          </Link>
          <Link to="/profile-setup" className="flex items-center gap-1">
            <img 
              src={Profile}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <FiChevronDown className="text-gray-700 ml-1 mt-1" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 h-screen bg-white w-18rem shadow-lg z-50 p-4 lg:hidden"
        >
          <div className="flex justify-end">
            <FiX className="text-black text-2xl cursor-pointer" onClick={handleCloseMenu} />
          </div>
          <ul className="flex flex-col gap-4 text-gray-600 font-[ABeeZee]">
            <li><Link to="/categories" className="hover:text-primary" onClick={handleCloseMenu}>Categories</Link></li>
            <li><Link to="/on-sale" className="hover:text-primary" onClick={handleCloseMenu}>On Sale</Link></li>
            <li><Link to="/new-arrivals" className="hover:text-primary" onClick={handleCloseMenu}>New Arrivals</Link></li>
            <li><Link to="/shopping-view/about-us" className="hover:text-primary" onClick={handleCloseMenu}>About Us</Link></li>
          </ul>
        </div>
      )}
    </div>
  );

};

export default Navbar;
