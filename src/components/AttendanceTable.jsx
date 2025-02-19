import React from 'react';
import { MoreHorizontal, AlertCircle, Clock, Link, ChevronDown, MessageSquare, Circle, EllipsisVertical } from 'lucide-react';
import Avatar from "../assets/Avatar.jpg";

const AttendanceTable = () => {
  const attendanceData = [
    {
      id: 1,
      employee: {
        name: 'Bhaskar Sharma',
        role: 'Sales Manager',
        department: 'Sales Dept',
        avatar: Avatar,
      },
      calculated: {
        total: 17.5,
        present: 2.5,
        workOut: 11,
        bonus: 2000,
      },
      final: {
        total: 23.5,
        present: 3.5,
        workOut: 4,
        bonus: 400,
      },
      dailyRecords: [
        { date: '31-Jun-2025', timePlanned: '09:00 AM - 06:30 PM', inTime: '08:59 AM', outTime: '06:45 PM', actualTime: '08:59 AM - 06:45 PM', bonus: 700, hasError: false, status: 'P', finalStatus: 'P', strictBonus: 900 },
        { date: '30-Jun-2025', timePlanned: '09:00 AM - 06:30 PM', inTime: '09:15 AM', outTime: '06:20 PM', actualTime: '09:15 AM - 06:20 PM', bonus: 300, hasError: true, errorType: 'late', status: 'P - LT', finalStatus: 'HD', strictBonus: 800 },
        { date: '29-Jun-2025', timePlanned: '09:00 AM - 06:30 PM', inTime: '09:00 AM', outTime: '07:00 PM', actualTime: '09:00 AM - 07:00 PM', bonus: 1000, hasError: false, status: 'P + OT', finalStatus: 'P + OT', strictBonus: 1200 },
        { date: '28-Jun-2025', timePlanned: '09:00 AM - 06:30 PM', inTime: '10:00 AM', outTime: '06:30 PM', actualTime: '10:00 AM - 06:30 PM', bonus: 200, hasError: true, errorType: 'late', status: 'P - LT', finalStatus: 'P' },
        { date: '27-Jun-2025', timePlanned: '09:00 AM - 06:30 PM', inTime: '09:05 AM', outTime: '06:40 PM', actualTime: '09:05 AM - 06:40 PM', bonus: 600, hasError: false, status: 'P', finalStatus: 'P + OT' },
        { date: '26-Jun-2025', timePlanned: '-:-', inTime: 'OFF', outTime: 'OFF', actualTime: 'OFF', bonus: 0, hasError: false, status: 'WO', finalStatus: 'WO' },
        { date: '25-Jun-2025', timePlanned: '09:00 AM - 06:30 PM', inTime: '09:02 AM', outTime: '06:28 PM', actualTime: '09:02 AM - 06:28 PM', bonus: 500, hasError: false, status: 'P', finalStatus: 'P' },
        { date: '24-Jun-2025', timePlanned: '-:-', inTime: '09:01 AM', outTime: '06:32 PM', actualTime: '09:01 AM - 06:32 PM', bonus: 400, hasError: true, errorType: 'punch', status: 'P + WO - LT', finalStatus: 'P + WO - LT' },
        { date: '23-Jun-2025', timePlanned: '-:-', inTime: '08:55 AM', outTime: '06:35 PM', actualTime: '08:55 AM - 06:35 PM', bonus: 900, hasError: false, status: 'P + WO + OT', finalStatus: 'P + WO + OT' },
        { date: '22-Jun-2025', timePlanned: '-:-', inTime: '09:20 AM', outTime: '06:15 PM', actualTime: '09:20 AM - 06:15 PM', bonus: 100, hasError: true, errorType: 'late', status: 'P - LT', finalStatus: 'P - LT' },
        { date: '21-Jun-2025', timePlanned: '-:-', inTime: '10:05 AM', outTime: '06:30 PM', actualTime: '10:05 AM - 06:30 PM', bonus: -200, hasError: true, errorType: 'late', status: 'P - LT', finalStatus: 'P - LT' },
        { date: '20-Jun-2025', timePlanned: '-:-', inTime: '08:50 AM', outTime: '06:50 PM', actualTime: '08:50 AM - 06:50 PM', bonus: 1200, hasError: false, status: 'P + OT', finalStatus: 'P + OT' },
      ],
    },
  ];

  const getStatusColor = (status) => {
    if (status.includes('P')) return 'text-green-500';
    if (status.includes('HD')) return 'text-orange-500';
    if (status.includes('WO')) return 'text-blue-500';
    if (status.includes('LT')) return 'text-yellow-500';
    if (status.includes('A')) return 'text-red-500';
    return 'text-gray-500';
  };

  return (
    <div className="rounded-md border border-gray-300 mt-5 mx-5 ml-1 overflow-x-visible ">
      <div className="grid grid-cols-10 divide-x divide-gray-300 min-w-[800px]">
        <div className="py-2 px-4 bg-gray-50 border-b border-gray-300 text-sm font-medium">Date</div>
        <div className="py-2 px-4 bg-gray-50 border-b border-gray-300 text-sm font-medium">Time planned + WH</div>
        <div className="py-2 px-4 bg-gray-50 border-b border-gray-300 text-sm font-medium col-span-2">Actual Time</div>
        <div className="py-2 px-4 bg-gray-50 border-b border-gray-300 text-sm font-medium">Fine/Bonus</div>
        <div className="py-2 px-4 bg-gray-50 border-b border-gray-300 text-sm font-medium">Error</div>
        <div className="py-2 px-4 bg-gray-50 border-b border-gray-300 text-sm font-medium">Cal. Att.</div>
        <div className="py-2 px-4 bg-gray-50 border-b border-gray-300 text-sm font-medium col-span-2">Final Att.</div>
        <div className="py-2 px-4 bg-gray-50 border-b border-gray-300 text-sm font-medium ">Actions</div>
      </div>

      {attendanceData[0].dailyRecords.map((day, index) => (
        <div key={index} className="grid grid-cols-10 divide-x divide-gray-300 hover:bg-gray-50 min-w-[800px]">
          <div className="py-2 px-4 border-b border-gray-300 text-sm">{day.date}</div>
          <div className="py-2 px-4 border-b border-gray-300 text-sm">{day.timePlanned}</div>
          <div className="py-2 px-4 border-b border-gray-300 text-sm col-span-2">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{day.actualTime}</span>
            </div>
            <div className="text-xs text-gray-400 mt-0.5">
              In: {day.inTime} | Out: {day.outTime}
            </div>
          </div>
          <div className="py-2 px-4 border-b border-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span className={day.bonus >= 0 ? 'text-green-500' : 'text-red-500'}>
                {day.bonus >= 0 ? '+' : '-'}₹{Math.abs(day.bonus)}
              </span>
              <span className="text-gray-400">...</span>
              <span className="text-xs text-gray-400">+₹{day.strictBonus}</span>
              <EllipsisVertical size={12} className="ml-auto cursor-pointer" />
            </div>
          </div>
          <div className="py-2 px-4 border-b border-gray-300 flex items-center gap-1">
            {day.hasError && (
              <>
                <AlertCircle className="w-4 h-4 text-red-500" />
                <Circle className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <Circle className="w-4 h-4 text-red-500 fill-red-500" />
              </>
            )}
          </div>
          <div className={`py-2 px-4 border-b border-gray-300 text-sm  ${getStatusColor(day.status)}`}>
            {day.status}
          </div>
          <div className={`py-2 px-2 border-b border-gray-300 text-sm col-span-2 ${getStatusColor(day.status)}`}>
            <div className="flex items-center gap-2">
              <span>{day.finalStatus}</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
              </div>
              <div className="ml-auto flex items-center justify-center">
                <div className="bg-yellow-500/20 text-yellow-500 p-1 mr-1">09:01 H</div>
                <ChevronDown className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>
          <div className="py-2 px-4 border-b border-gray-300 flex items-center justify-end gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <MessageSquare className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Link className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttendanceTable;
