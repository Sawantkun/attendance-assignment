import React from 'react';

const TabNav = () => {
  const tabs = [
    { name: 'Atten. Team (Admin)', active: false },
    { name: 'Org. Details (Admin)', active: false },
    { name: 'In/Out Logs', active: false },
    { name: 'Finalize Atten.', active: false },
    { name: 'Manage Employees', active: false },
    { name: 'Final Reports', active: true },
    { name: 'Error Reports', active: false }
  ];

  return (
    <div className="bg-[#eee] shadow-sm">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`
                  px-6 py-4 text-sm relative group transition-all duration-200
                  ${tab.active
                    ? 'text-[#5D5FEF] font-medium bg-white'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 "/>

                <div className="relative z-10 flex items-center gap-2">
                  {tab.name}
                </div>

                {tab.active && (
                  <div className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-[#5D5FEF] shadow-lg">
                    <div className="absolute -bottom-[-2px] left-0 w-full h-px bg-[#5D5FEF] opacity-25"/>
                  </div>
                )}

                {!tab.active && (
                  <div className="absolute right-0 top-1/4 h-1/2 w-px bg-gray-200"/>
                )}
              </button>
            ))}
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium bg-gradient-to-r from-[#5D5FEF] to-[#7B1FA2] bg-clip-text text-transparent">
                Attendance Module
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabNav;
