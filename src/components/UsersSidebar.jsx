import React, { useState } from "react";
import Avatar from "../assets/Avatar.jpg";

const UserSidebar = () => {
  const users = [
    { name: "Bhaskar Sharma", role: "Sales Manager", department: "Sales Dept" },
    { name: "Bhaskar Sharma", role: "Sales Manager", department: "Sales Dept" },
    { name: "Bhaskar Sharma", role: "Sales Manager", department: "Sales Dept" },
    { name: "Bhaskar Sharma", role: "Sales Manager", department: "Sales Dept" },
    { name: "Bhaskar Sharma", role: "Sales Manager", department: "Sales Dept" },
    { name: "Bhaskar Sharma", role: "Sales Manager", department: "Sales Dept" },
    { name: "Bhaskar Sharma", role: "Sales Manager", department: "Sales Dept" },
    { name: "Bhaskar Sharma", role: "Sales Manager", department: "Sales Dept" },
    { name: "Bhaskar Sharma", role: "Sales Manager", department: "Sales Dept" },
    { name: "Bhaskar Sharma", role: "Sales Manager", department: "Sales Dept" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-64 bg-white p-3 rounded-xl shadow-md mx-3 ">
      {users.map((user, index) => (
        <div
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={`flex items-center gap-3 my-2 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
            selectedIndex === index ? "bg-[#5D5FEF]/20" : "hover:bg-gray-200"
          }`}
        >
          <img
            src={Avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">
              {user.role} <span className="text-gray-400">|</span> {user.department}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserSidebar;
