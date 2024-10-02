import React, { useContext } from "react";
import InfoDisplay from "./infodisplay";
import Table from "./table";
import { ModalContext } from "../context/modal";

const SideDisplay = () => {
  const {setOpen} = useContext(ModalContext)
  const handleClick = ()=>{
     setOpen(true)
  }
  return (
    <div className="p-4 bg-[#ede9fe] flex-1">
      <div className="flex flex-row items-center justify-between">
        <div>
          <p className="text-lg font-bold">Dashboard</p>
        </div>
        <div className="flex flex-row items-center">
          <div className="border flex flex-row items-center bg-white p-2 rounded-2xl m-1">
            <input type="text" placeholder="search" className="outline-none" />
            <img src="search.png" alt="" className="w-4" />
          </div>
          <div className="bg-white w-24 h-10 flex flex-row items-center m-1 justify-evenly rounded-lg">
            <div>
              <img src="notification.png" alt="" className="w-4" />
            </div>
            <div>
              <img src="email.png" alt="" className="w-4" />
            </div>
            <div>
              <img src="user.png" alt="" className="w-4" />
            </div>
            <div>
              <img src="chevrondown.png" alt="" className="w-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4  flex flex-row items-center ">
        <InfoDisplay label={"Total Applications"} image={"eye.png"}/>
        <InfoDisplay label={"Accepted"} image={"grid.png"}/>
        <InfoDisplay label={"Job Posts"} image={"edit.png"}/>
      </div>
      <Table/>
      <div className="absolute bottom-2 right-5 cursor-pointer bg-[#d946ef] p-1 rounded shadow-lg" onClick={handleClick}>
         <p className="text-white">Post Job</p>
      </div>
    </div>
  );
};

export default SideDisplay;
