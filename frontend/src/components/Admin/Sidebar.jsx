import React, { useState } from 'react';
import {
  FaHome,
  FaShoppingCart,
  FaProductHunt,
  FaShippingFast,
  FaClipboardList,
  FaEnvelope,
  FaUserShield,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/logo.jpg';

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const location = useLocation();
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen((prev) => !prev);
  };

  const menuItems = [
    { path: '/dashboard', name: 'Dashboard', icon: <FaHome /> },
    { path: '/sales', name: 'Sales', icon: <FaShoppingCart /> },
    {
      name: 'Product',
      icon: <FaProductHunt />,
      dropdown: true,
      subItems: [
        { path: '/allproduct', name: 'All Products' },
        { path: '/editproduct', name: 'Edit Product' },
        { path: '/status', name: 'Status' },
      ],
    },
    { path: '/shipping', name: 'Shipping', icon: <FaShippingFast /> },
    { path: '/order', name: 'Order', icon: <FaClipboardList /> },
    { path: '/message', name: 'Message', icon: <FaEnvelope /> },
    { path: '/profile', name: 'Profile', icon: <FaUserShield /> },
  ];

  // Check if any of the subitems of "Product" dropdown is active
  const isProductSubitemActive = menuItems
    .find(item => item.name === 'Product') // Find the "Product" item
    ?.subItems.some(subItem => location.pathname === subItem.path); // Check if the current path matches any subitem

  return (
    <>
      {/* Sidebar */}
      <div
        className={`sidebar top-0 left-0 bg-white shadow-md flex rounded-[20px] flex-col p-6 m-7 transition-transform duration-300 ease-in-out ${
          isSidebarVisible ? 'translate-x-0' : 'translate-x-[-100%]'
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center mb-8 justify-center">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </div>

        {/* Close Button for mobile view */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-2xl text-gray-700 close "
        >
          <FaTimes />
        </button>

        {/* Menu Section */}
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              {item.dropdown ? (
                <>
                  <button
                    onClick={toggleProductDropdown}
                    className={`flex items-center justify-between w-full p-2 rounded-t-md font-medium transition ${
                      isProductDropdownOpen || isProductSubitemActive // Pink if dropdown is open or subitem is active
                        ? 'bg-pink-500 text-white'
                        : 'text-gray-700 hover:text-pink-500'
                    }`}
                    style={{
                      backgroundColor: isProductDropdownOpen || isProductSubitemActive ? '#FF0090' : 'transparent',
                      borderTopLeftRadius: '12px', // Rounded top for dropdown heading
                      borderTopRightRadius: '12px',
                      marginBottom: 0, // Remove margin between heading and dropdown
                    }}
                  >
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{item.icon}</span>
                      {item.name}
                    </div>
                    {isProductDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {isProductDropdownOpen && (
                    <ul className="p-0 space-y-1 bg-pink-500 rounded-b-md">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <NavLink
                            to={subItem.path}
                            className={`block p-2 font-medium transition ${
                              location.pathname === subItem.path
                                ? 'bg-pink-500 text-white'
                                : 'text-white hover:bg-pink-600'
                            }`}
                            style={{
                              backgroundColor: location.pathname === subItem.path ? '#FF0090' : 'transparent',
                            }}
                          >
                            {subItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={`flex items-center p-2 rounded-md font-medium transition ${
                    location.pathname === item.path
                      ? 'bg-pink-500 text-white'
                      : 'text-gray-700 hover:text-pink-500'
                  }`}
                >
                  <span className="text-lg mr-3">{item.icon}</span>
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style>
        {`
          /* Sidebar for screens below 1050px */
          @media (max-width: 1050px) {
            .sidebar {
              display: ${isSidebarVisible ? 'block' : 'none'};
              z-index: 60;
              position: fixed;
              top: 0;
              left: 0;
              height: 100%;
              margin-left: 0;
              margin-top: 0;
              box-shadow: none;
              width: 16rem;
              transform: translateX(-100%);
              transition: transform 0.7s ease-in-out;
            }

            .sidebar.translate-x-0 {
              transform: translateX(0);
            }
          }
            
          @media (min-width: 1050px) {
            .sidebar {
              display: flex;
              height: 100vh;
              width: 16rem;
              transform: translateX(0);
            }
             
            .close{
            display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Sidebar;
