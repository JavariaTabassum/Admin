
import React from "react";
import img from '../../images/img.png';

const mockData = {
  courierInfo: {
    name: "Blue Dart",
    status: "Verified",
    email: "bluebardindia@gmail.com",
    address: "Tirunelvali, Karala, India",
    contactNumber: "+91 98945 55252",
    courierCode: "#123245",
    trackingURL: "http://bluebarttrackingurl243e22",
  },
  packageInfo: {
    title: "Deluxe h2311",
    name: "Willson",
    color: "Black",
    brand: "Cotton",
    size: "Medium",
    lastChecking: "18-03-2024",
    condition: "Good Condition",
  },
};

const CourierComponent = () => {
  const { courierInfo, packageInfo } = mockData;

  return (
    <div className="flex section-col bg-white p-8 rounded-lg shadow-md max-w-7xl mx-auto">
      <style>
      {`
          @media (max-width: 1180px) and (min-width:1050px) {
            .col {
              display: flex;
              flex-direction: column;
              gap: 20px;
            }
            .column {
              display: flex;
              flex-direction: column;
              gap: 5px;
            }
            .margin{
            margin-top: 0px;
            margin-bottom: 5px;
            }
            .left{
            text-align:left;
            }
          }
          @media (max-width: 860px) and (min-width:660px) {
            .col {
              display: flex;
              flex-direction: column;
              gap: 20px;
            }
            .column {
              display: flex;
              flex-direction: column;
              gap: 5px;
            }
            .margin{
            margin-top: 0px;
            margin-bottom: 5px;
            }
            .left{
            text-align:left;
            }
          }
          @media (max-width: 560px) {
            .col {
              display: flex;
              flex-direction: column;
              gap: 20px;
            }
            .column {
              display: flex;
              flex-direction: column;
              gap: 5px;
            }
            .margin{
            margin-top: 0px;
            margin-bottom: 5px;
            }
            .left{
            text-align:left;
            }
          }
          @media (max-width: 660px)  {
          .section-col{
          display:flex;
          flex-direction: column;
          }

          .width{
          width:100%;
          }
          }
        `}
      </style>
      {/* Left Section */}
      <div className="w-[350px] width p-4">
        <div className=" p-6 rounded-lg border border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Courier Information</h2>
            <button className="text-gray-500 hover:text-gray-700">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-7.5a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25V15"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h12m0 0l-3-3m3 3l-3 3"
                />
              </svg> */}
            </button>
          </div>
          <div className="flex justify-center mb-6">
            <div className="">
            <img
                  src={img}                  
                  alt=""
                  className="w-[200px] h-[200px] rounded-[100px]"
                />
          
            </div>
          </div>
          <ul className="text-sm space-y-2 ">
            <div className="flex justify-between column">
            <li>
               <p className="text-gray-400 font-semibold"> Courier Name: </p>
              <p className="font-semibold  margin mt-3">{courierInfo.name}</p>
            </li>
            <li>
              <p className="text-gray-400 font-semibold"> Status </p>
              <p className="font-semibold mt-3 margin">  <span className="text-green-500">{courierInfo.status}</span></p>
            </li>
            </div>
            
            <li>
              <p className="text-gray-400 font-semibold"> Email: </p>
              <p className="font-semibold mt-3 margin">{courierInfo.email}</p>
            </li>
            <li>
              <p className="text-gray-400 font-semibold">Office Address: </p>
              <p className="font-semibold mt-3 margin">  {courierInfo.address}</p>
            </li>
            <div className="flex justify-between column ">
            <li> 
              <p className="text-gray-400 font-semibold">Contact Number </p>
              <p className="font-semibold mt-3 margin">{courierInfo.contactNumber}</p>
            </li>
            <li className="text-right left ">
              <p className="text-gray-400 font-semibold">Courier Code </p>
              <p className="font-semibold mt-3 margin"> {courierInfo.courierCode}</p>
            </li>

            </div>
            
            <li>
              <p className="text-gray-400 font-semibold"> Tracking URL: </p>
              <p className="font-semibold mt-3 margin">{courierInfo.trackingURL}</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[700px] width p-4">
        <div className="border border-gray-300 h-[610px] p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{packageInfo.title}</h2>
            <button className="text-gray-500 hover:text-gray-700">
             
            </button>
          </div>
          <ul className="text-sm space-y-5">
            <div className="flex gap-[250px] col">
            <li>
              <p className="text-gray-400 font-semibold" > Name:</p>
              <p className="font-bold mt-2"> {packageInfo.name}</p> 
            </li>
            <li>
              <p className="text-gray-400 font-semibold" > Color:</p>
              <p className="font-bold mt-2">  {packageInfo.color}</p> 
            </li>
            </div>
            <div className="flex gap-[250px] col ">
            <li>
              <p className="text-gray-400 font-semibold" >Brand:</p>
              <p className="font-bold mt-2"> {packageInfo.brand}</p> 
            </li>
            <li>
              <p className="text-gray-400 font-semibold" > Size:</p>
              <p className="font-bold mt-2"> {packageInfo.size}</p> 
            </li>
            </div>
            <div className="flex gap-[205px] col">
            <li>
              <p className="text-gray-400 font-semibold" >Last Checking:</p>
              <p className="font-bold mt-2 text-orange-600"> {packageInfo.lastChecking}</p> 
            </li>
            <li>
              <p className="text-gray-400 font-semibold" > Condition:</p>
              <p className="font-bold mt-2 text-green-600"> {packageInfo.condition}</p> 
            </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourierComponent;

