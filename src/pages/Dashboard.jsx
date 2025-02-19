import React from 'react'
import Filters from "../components/Filters"
import MainSidebar from "../components/MainSidebar"
import UsersSidebar from "../components/UsersSidebar"
import TabNav from "../components/TabNav"
import SummaryStats from "../components/SummaryStats"
import AttendanceTable from "../components/AttendanceTable"

const Dashboard = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex">
       <MainSidebar/>
       <div className="w-full">
       <TabNav/>
       <Filters/>
       <div className="flex">
        <div>
        <UsersSidebar/>
        </div>
       <div className='flex-col'>
       <SummaryStats/>
       <AttendanceTable/>
       </div>
       </div>
       </div>
      </div>
    );
  };


export default Dashboard
