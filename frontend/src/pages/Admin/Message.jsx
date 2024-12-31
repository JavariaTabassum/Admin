import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import ChatUser from '../../components/Admin/Chatuser';
import Chat from '../../components/Admin/Chat';
import { FaBars } from 'react-icons/fa';

const Message = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to control sidebar visibility

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
     

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-x-hidden ml-4 margin">
        {/* Menu Icon (Visible below 1050px) */}
        <button
          className="menu-icon mt-7 text-2xl text-gray-700"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        {/* Dashboard Content */}
        <div className="flex flex-col flex-1 overflow-x-hidden">
          <h2 className="mt-10 text-3xl font-bold font-inter">Message</h2>
        </div>

        {/* Chat Section */}
        <div className="flex flex-1 gap-6 mt-5 mb-8">
          {/* ChatUser Component */}
          <div className="  users b rounded-lg  h-full">
            <ChatUser />
          </div>

          {/* Chat Component */}
          <div className="flex-1 rounded-lg me-5  h-full">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
