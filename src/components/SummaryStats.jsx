import React from 'react';
import Avatar from "../assets/Avatar.jpg"

const SummaryStats = () => {
  return (
    <div className="flex w-[98.7%] items-center justify-between overflow-auto gap-4 mx-1  py-4  bg-white p-3 rounded-xl shadow-md mr-3">
      {/* Profile and Name Section */}
      <div className="flex items-center gap-2 w-[20%]">
        <img src={Avatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover scale-110 mx-3"/>
        <div className="text-sm">
          <div className="font-medium text-2xl">Bhaskar Sharma</div>
          <p className="text-xs text-gray-500 text-xl">
          Sales Manager <span className="text-gray-400">|</span> Sales Dept
            </p>
          </div>
      </div>

      {/* Table Section */}
      <table className="min-w-0 border-collapse table-fixed w-[80%]">
        <tbody>
          <tr className="text-sm">
            <td className="px-3 py-1 text-center border border-gray-300">
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div className="text-xs text-gray-500">P</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div className="text-xs text-gray-500">A</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div className="text-xs text-gray-500">WO</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div className="text-xs text-gray-500">∑ Bonus/Fine</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div className="text-xs text-gray-500">OT</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div className="text-xs text-gray-500">LT</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div className="text-xs text-gray-500">OT-LT</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div className="text-xs text-gray-500">Final Att.</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">

            </td>

          </tr>
          <tr className="text-sm">
          <td className="px-3 py-1 text-center border border-gray-300">
              <div className="text-xs text-gray-500">Cal.</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>17.5</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>2.5</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>11</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>+2000</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>17:32 H</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>-12:00 H</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>05:32 H</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>20</div>
            </td>
            <td className="px-3 py-1 min-w-[160px] text-center border border-gray-300">
            <div>Finalized by Rahul</div>
            </td>
          </tr>
          <tr className="text-sm">
          <td className="px-3 py-1 text-center border border-gray-300">
              <div className="text-xs text-gray-500">Final</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>23.5</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>3.5</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>4</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>+400</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>12:30 H</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>-19:00</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>-06:30 H</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
              <div>27</div>
            </td>
            <td className="px-3 py-1 text-center border border-gray-300">
            <div>Locked by Srinivas</div>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default SummaryStats;
