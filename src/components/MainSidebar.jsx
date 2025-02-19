import React from 'react';
import { Calendar, Users, FileText, Settings } from 'lucide-react';
import Avatar from "../assets/Avatar.jpg"

const MainSidebar = () => {
  return (
    <div className="w-16 bg-[#5D5FEF] min-h-screen flex flex-col space-y-4">
      {/* Top "P" text */}
      <div className="h-14 flex items-center justify-center border-b border-white/10">
        <span className="text-white text-xl font-semibold">P</span>
      </div>

      {/* Profile Image */}
      <div className="px-3 border-b pb-5 border-gray-500">
        <img
          src={Avatar}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover scale-110"
        />
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col space-y-2 px-3">
        <button className="p-2 rounded-lg">
          <Calendar className="w-6 h-6 text-white" />
        </button>
        <button className="p-2 rounded-lg">
          <Users className="w-6 h-6 text-white" />
        </button>
        <button className="p-2 rounded-lg">
          <FileText className="w-6 h-6 text-white" />
        </button>
        <button className="p-2 rounded-lg">
          <Settings className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Power Button at Bottom */}
      <div className="mt-auto px-3 mb-4">
        <button className="p-2 rounded-lg">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainSidebar;
