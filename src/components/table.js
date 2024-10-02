import React from "react";
import "../customstyles/scrollbar.css";
import TableElements from "./tableElements";


const Table = () => {
  return (
    <div className="mt-6 overflow-x-auto h-96 custom-scroll rounded-lg">
      <table className="w-full border-collapse bg-white  ">
        <thead>
          <tr>
            <th className="px-4 py-2 text-center text-sm font-sans">Name</th>
            <th className="px-4 py-2 text-center text-sm font-sans">Email</th>
            <th className="px-4 py-2 text-center text-sm font-sans">Phone</th>
            <th className="px-4 py-2 text-center text-sm font-sans">
              Educational Level
            </th>
            <th className="px-4 py-2 text-center text-sm font-sans">CV</th>
          </tr>
        </thead>
        <tbody>
          <TableElements />
          <TableElements />
          <TableElements />
          <TableElements />
          <TableElements />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
