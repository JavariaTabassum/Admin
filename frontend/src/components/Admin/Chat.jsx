import React, { useState } from "react";
import { FaPaperclip, FaPaperPlane, FaTrashAlt } from "react-icons/fa";

const ChatWindow = () => {
  // Placeholder messages (to be replaced with backend data later)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Roselle Ehrman",
      senderType: "other",
      message: "Hi! How are you?",
      time: "08:45 AM",
    },
    {
      id: 2,
      sender: "You",
      senderType: "self",
      message: "Hey Roselle! I feel amazing, how about you?",
      time: "08:46 AM",
    },
    {
      id: 3,
      sender: "Roselle Ehrman",
      senderType: "other",
      message: "Hey, so happy you are down!",
      time: "08:47 AM",
    },
    {
      id: 4,
      sender: "You",
      senderType: "self",
      message: "That's a cool idea",
      time: "08:48 AM",
    },
  ]);

  // Input state
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: "You",
        senderType: "self",
        message: newMessage.trim(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage(""); // Clear the input
    }
  };

  // Function to clear the chat
  const handleClearChat = () => {
    if (window.confirm("Are you sure you want to clear the chat?")) {
      setMessages([]); // Clear the chat messages
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-full bg-white rounded-lg shadow-lg flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex-1">
          <h2 className="font-semibold text-gray-800">Roselle Ehrman</h2>
          <span className="text-sm text-green-500">Online</span>
        </div>
        {/* Clear Chat Button */}
        <button
          className="text-red-500 hover:text-red-700"
          onClick={handleClearChat}
        >
          <FaTrashAlt size={18} />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-grow p-4 overflow-y-auto h-96 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {/* Date Separator */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 bg-green-500 text-white text-sm rounded-full">
            Yesterday
          </span>
        </div>

        {/* Messages */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col mb-4 ${msg.senderType === "self" ? "items-end" : "items-start"}`}
          >
            {/* Display Name and Time */}
            <div className="text-xs text-gray-500 mb-1">
              {msg.sender} - {msg.time}
            </div>
            {/* Avatar and Message */}
            <div className={`flex ${msg.senderType === "self" ? "justify-end" : "justify-start"} gap-2`}>
              {/* Avatar for "other" messages */}
              {msg.senderType === "other" && (
                <div className="w-8 h-8 bg-gray-100 rounded-full flex-shrink-0"></div>
              )}
              <div
                className="max-w-sm p-3 rounded-lg shadow-md bg-gray-200 text-gray-800"
              >
                <p className="text-sm">{msg.message}</p>
              </div>
              {/* Avatar for "self" messages */}
              {msg.senderType === "self" && (
                <div className="w-8 h-8 bg-gray-100 rounded-full flex-shrink-0"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="relative flex items-center gap-2 p-4 border-t bg-white">
        <button className="text-pink-600 hover:text-pink-700">
          <FaPaperclip size={18} />
        </button>
        <input
          type="text"
          className="flex-1 p-2  pl-3 pr-10 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        {/* Send Button inside Input Box */}
        <button
          className="absolute right-9 text-gray-500 hover:text-gray-700"
          onClick={handleSendMessage}
        >
          <FaPaperPlane size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
