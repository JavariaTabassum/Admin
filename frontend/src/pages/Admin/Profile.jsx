import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaBars, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import Sidebar from '../../components/Admin/Sidebar';
import Profileform from '../../components/Admin/Profileform';

const Profile = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to control sidebar visibility
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  // Handler for the pencil icon click
  const handleEditClick = () => {
    navigate('/profiled'); // Navigate to the Profiled page
  };

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
        <div className="flex items-center me-8 mt-10 justify-between">
          <h2 className="text-3xl font-bold font-inter">Profile</h2>
          <div className="ml-4 flex items-center space-x-8">
            {/* Pencil Icon to Edit Profile */}
            <FaPencilAlt
              className="text-gray-600 border hover:text-gray-800 cursor-pointer"
              onClick={handleEditClick} // Trigger navigation on click
            />

            <FaTrashAlt className="text-red-500 hover:text-red-700 cursor-pointer" />
          </div>
        </div>
        <div>
          <Profileform />
        </div>
      </div>
    </div>
  );
};

export default Profile;
