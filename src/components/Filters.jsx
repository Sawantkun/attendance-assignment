import React, { useState } from 'react';
import { Search, FilterIcon, ChevronDown, Download } from 'lucide-react';

const TopNav = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full flex items-center justify-between gap-4 p-4  ">
      <div className="relative flex gap-5 max-w-md">
        <div className="relative flex items-center group">
          <Search className="absolute left-3 text-gray-400 h-4 w-4 group-hover:text-gray-500 transition-colors" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" pl-10 pr-4 h-10 bg-gray-50 border border-gray-200 rounded-4xl
                     focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500
                     transition-all duration-200 placeholder:text-gray-400"
          />
        </div>
        <button className="px-4 h-10  rounded-4xl
                          flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800
                          transition-all duration-200 hover:shadow-sm">
          <FilterIcon className="h-4 w-4" />
          <span>Filters</span>
        </button>

        <button className="px-4 h-10 bg-white border border-gray-200 rounded-4xl hover:bg-gray-50
                          flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800
                          transition-all duration-200 hover:shadow-sm">
          <span>Rows</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </button>

        <button className="px-4 h-10 bg-white border border-gray-200 rounded-4xl hover:bg-gray-50
                          flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800
                          transition-all duration-200 hover:shadow-sm">
          <span>July</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </button>
      </div>

      <div className="flex items-center gap-3">


        <button className="px-4 h-10 bg-[#5D5FEF] text-white rounded-4xl
                          flex items-center gap-2 text-sm font-medium shadow-sm hover:shadow
                          transition-all duration-200 hover:translate-y-[-1px]">
          <span>Export</span>
          <Download className="h-4 w-4" />
        </button>

        <button className="px-4 h-10 bg-white border border-gray-200 rounded-4xl hover:bg-gray-50
                          flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800
                          transition-all duration-200 hover:shadow-sm">
          <span>Detailed View</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default TopNav;
