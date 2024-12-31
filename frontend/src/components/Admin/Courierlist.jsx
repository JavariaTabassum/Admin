import React from "react";

const Courierlist = () => {
  const couriers = [
    {
      id: 1,
      code: "#123245",
      name: "Bluedart Courier",
      email: "bluedartindia@gmail.com",
      joinDate: "21-05-2022",
      address: "Tirunelvali, Kerala, India",
      status: "Verified",
    },
    {
      id: 2,
      code: "#123245",
      name: "FedEx International",
      email: "fedexindia@gmail.com",
      joinDate: "21-05-2022",
      address: "Karala, India",
      status: "Not Verified",
    },
    {
      id: 3,
      code: "#123245",
      name: "Uber Eat Delivery",
      email: "ubereatindia@gmail.com",
      joinDate: "21-05-2022",
      address: "Tirunelvali, India",
      status: "Verified",
    },
  ];

  const getCourierImage = (courierName) => {
    switch (courierName) {
      case "Bluedart Courier":
        return "https://via.placeholder.com/32?text=B"; 
      case "FedEx International":
        return "https://via.placeholder.com/32?text=F"; 
      case "Uber Eat Delivery":
        return "https://via.placeholder.com/32?text=U"; 
      default:
        return "https://via.placeholder.com/32?text=U"; 
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <div className="overflow-x-auto">
      <table
          className="table-auto w-full text-left border-collapse"
          style={{ tableLayout: "fixed" }}
        >
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600 whitespace-nowrap">
              <th className="p-4 border-br w-[50px]">SL.</th>
              <th className="p-4 border-b w-[150px]">Courier Code</th>
              <th className="p-4 border-b w-[250px]">Courier Name</th>
              <th className="p-4 border-b w-[150px]">Join Date</th>
              <th className="p-4 border-b w-[170px]">Office Address</th>
              <th className="p-4 border-b w-[150px]">Status</th>
            </tr>
          </thead>
          <tbody>
            {couriers.map((courier, index) => (
              <tr key={courier.id} className="text-sm text-gray-700 hover:bg-gray-50">
                <td className="p-4 border-b">{index + 1}</td>
                <td className="p-4 border-b">{courier.code}</td>
                <td className="p-4 border-b">
                  <div className="flex items-center gap-3">
                    <img
                      src={getCourierImage(courier.name)} 
                      alt={courier.name}
                      className="w-8 h-8 rounded-full border"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{courier.name}</div>
                      <div className="text-xs text-gray-500">{courier.email}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b">{courier.joinDate}</td>
                <td className="p-4 border-b">{courier.address}</td>
                <td className="p-4 border-b">
                  {courier.status === "Verified" ? (
                    <span className="flex items-center  gap-1 text-green-600 font-medium">
                       Verified
                    </span>
                  ) : (
                    <span className="flex items-center  gap-1 text-red-500 font-medium">
                      Not Verified
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courierlist;
