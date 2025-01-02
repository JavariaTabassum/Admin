import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import ChatUser from '../../components/Admin/Chatuser';
import Chat from '../../components/Admin/Chat';
import { FaBars } from 'react-icons/fa';

const Message = () => {
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
            @media (max-width: 800px){
            .user{
             position: absolute;
             top: 10px;
             right: 10px;
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
          <h2 className="mt-10 text-3xl font-ibm-plex" style={{ color: "rgba(23,23,37,1)", fontWeight: "500" }}>Message</h2>
        </div>

        <div className="flex flex-1 gap-6 mt-5 mb-8">
          {/* ChatUser Component */}
          <div className="rounded-lg user h-full">
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
