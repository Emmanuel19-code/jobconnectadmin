import React from "react";

const InfoDisplay = ({ label,image }) => {
  return (
    <div className="bg-white border p-1 w-96 h-32 rounded-lg m-1">
      <div className="flex flex-row items-center">
        <div className="w-6 h-6 bg-slate-100 flex justify-center m-1 rounded items-center">
          <img src={image} alt="" className="w-4" />
        </div>
        <p className="flex-1 m-1 ">{label}</p>
        <div className="m-1">
          <img src="info.png" alt="" className="w-4" />
        </div>
      </div>
      <div className="m-1 flex flex-row items-center">
        <p className="m-1 text-lg">0</p>
        <p className="px-1 bg-red-600 bg-opacity-10 w-14 m-1 rounded text-center text-md">
          <span className="font-bold text-red-400">15.8%</span>
        </p>
      </div>
    </div>
  );
};

export default InfoDisplay;
