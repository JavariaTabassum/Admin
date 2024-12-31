import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Chatuser = () => {
  const [messages, setMessages] = useState([
    { id: 1, name: "Roselle Ehrman", message: "Ok lets got it", time: "09:30 AM", isActive: true },
    { id: 2, name: "Leatrice Kulik", message: "back to meeting", time: "08:30 AM", isActive: false },
    { id: 3, name: "James B", message: "Voice message 00:30", time: "06:15 PM", isActive: false },
    { id: 4, name: "Jone Smith", message: "Voice message 00:30", time: "1 Day ago", isActive: false },
    { id: 5, name: "Darron", message: "sent an attachment", time: "2 Day ago", isActive: false },
    { id: 6, name: "Natalia", message: "will do....", time: "4 Day ago", isActive: false },
    { id: 7, name: "Emillio", message: "Thanks...", time: "4 Day ago", isActive: false },
    { id: 8, name: "Adriana", message: "Will back soon...", time: "7 Day ago", isActive: false },
    { id: 9, name: "Leon", message: "Thanks..", time: "9 Day ago", isActive: false },
    { id: 10, name: "Bruno", message: "sure! I will check", time: "9 Day ago", isActive: false },
  ]);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="chat-box mx-auto bg-white rounded-lg shadow-lg p-4">
      <style>
        {`
          /* Default width for the chat box */
          .chat-box {
            width: 300px;
          }

          

          /* Reduce size below 800px */
          @media (max-width: 800px) {
            .chat-box {
              width: 300px;
              padding: 0px;
              padding-left: 10px;
              padding-top: 8px;
              padding-right: 10px;
              
            }

            .dropdown-content {
              max-height: ${isDropdownVisible ? "300px" : "0"};
              overflow-y: auto;
              transition: max-height 0.3s ease;
            }

            .rotate-180 {
              transform: rotate(180deg);
            }

            .chevron-icon {
              display: block;
            }
          }

          /* Hide chevron icon above 800px */
          @media (min-width: 801px) {
            .chevron-icon {
              display: none;
            }
          }
        `}
      </style>

      {/* Header with dropdown button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">New Message</h1>
        <button
          onClick={toggleDropdown}
          className="text-gray-500 focus:outline-none chevron-icon"
        >
          <FaChevronDown
            className={`transform transition-transform ${
              isDropdownVisible ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Chat List */}
      <div className="dropdown-content">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-center gap-3 p-3 mb-2 rounded-lg cursor-pointer ${
              msg.isActive ? "bg-pink-500 text-white" : "hover:bg-gray-100"
            }`}
          >
            {/* Placeholder avatar */}
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>

            {/* Message Info */}
            <div className="flex-1">
              <h2 className={`font-semibold ${msg.isActive ? "text-white" : "text-gray-900"}`}>
                {msg.name}
              </h2>
              <p className={`text-sm ${msg.isActive ? "text-white" : "text-gray-600"}`}>
                {msg.message}
              </p>
            </div>

            {/* Timestamp */}
            <span className={`text-xs ${msg.isActive ? "text-white" : "text-gray-400"}`}>
              {msg.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatuser;
