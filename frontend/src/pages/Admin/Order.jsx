import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import Tableorder from '../../components/Admin/Tableorders';
import { FaBars } from 'react-icons/fa';

const Order = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); 

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <div className="flex w-full min-h-screen bg-slate-100">
 <style>
        {`
          .menu-icon {
            display: none; 
          }

          @media (max-width: 1050px) {
            .menu-icon {
              display: block;
            }
          }
          @media (min-width: 1050px) {
            .margin{
            margin-left: 300px;
            }
          }
        `}
      </style>

      <div className=' fixed h-[full]'>
      <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex flex-col flex-1 overflow-x-hidden ml-4 margin"> 
          <button
            className="menu-icon mt-7 text-2xl text-gray-700"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>

        <div className="flex flex-col flex-1 overflow-x-hidden">
          <h2 className="mt-10 text-3xl font-bold font-inter">Order</h2>
        </div>
        <div className='mt-5'>
            <Tableorder />
        </div>
      </div>
    </div>
  );
};

export default Order;