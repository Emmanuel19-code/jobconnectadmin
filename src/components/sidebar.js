import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#6b21a8] w-48 cursor-pointer">
      <div className="border-b flex flex-col items-center p-1">
        <img src="profile.png" alt="" className="w-40" />
      </div>
      <div className="flex flex-row items-center  m-1">
        <img src="dot.png" alt="grid dot" className="w-5 w-5 filter brightness-0 invert" />
        <span className="ml-2 text-white text-md">Dashboard</span>
      </div>
      <div className="flex flex-row items-center  m-1">
        <img src="addprofile.png" alt="grid dot" className="w-5 w-5 filter brightness-0 invert" />
        <span className="ml-2 text-white text-md">Applications</span>
      </div>
      <div className="flex flex-row items-center m-1">
        <img
          src="new.png"
          alt="grid dot"
          className="w-5 filter brightness-0 invert"
        />
        <span className="ml-2 text-white text-md">Dashboard</span>
      </div>
    </div>
  );
};

export default Sidebar;
