import React from 'react';

const ViewToggle = () => {
    return (
      <div className="flex items-center space-x-2">
        <button className="flex items-center space-x-1 px-3 py-1 rounded bg-purple-600 text-white">
          <List className="w-4 h-4" />
          <span>Detailed View</span>
        </button>
        <button className="flex items-center space-x-1 px-3 py-1 rounded text-gray-600 hover:bg-gray-100">
          <Grid className="w-4 h-4" />
          <span>Grid View</span>
        </button>
      </div>
    );
  };


  export default ViewToggle
