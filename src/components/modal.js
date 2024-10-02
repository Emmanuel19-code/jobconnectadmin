import React, { useContext, useState } from "react";
import SimpleInput from "./input";
import Select from "./select";
import Button from "./button";
import { ModalContext } from "../context/modal";

const jobTypes = [
  {
    id: 1,
    value: "Job Role",
  },
  {
    id: 2,
    value: "Part Time",
  },
  {
    id: 3,
    value: "Full Time",
  },
  {
    id: 4,
    value: "Intern",
  },
];
const educationLevel = [
  {
    id: 1,
    value: "Educational level",
  },
  {
    id: 2,
    value: "Student",
  },
  {
    id: 3,
    value: "Graduate",
  },
];
const Modal = ({ isOpen, onClose }) => {
    const {setOpen} = useContext(ModalContext)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
       <div className="flex justify-end">
          <img src="x.png" alt=""  className="w-4 cursor-pointer flex-end" onClick={()=>setOpen(false)}/>
       </div>
        <SimpleInput label={"Job Role"} placeholder={"Enter the job Role"} />
        <SimpleInput
          label={"Amount"}
          placeholder={"Enter the amount per month"}
        />
        <SimpleInput label={"Location"} placeholder={"Enter job location"} />
        <Select data={jobTypes}></Select>
        <Select data={educationLevel}></Select>

        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Skill Required
        </label>
        <textarea
          id="message"
          rows="3"
          className="block p-2.5 w-full text-sm text-gray-900 outline-none bg-gray-50 rounded-lg"
          placeholder="Provide the skill required"
        ></textarea>
        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Skill Required
        </label>
        <textarea
          id="message"
          rows="3"
          className="block p-2.5 w-full text-sm text-gray-900 outline-none bg-gray-50 rounded-lg"
          placeholder="Provide the skill required"
        ></textarea>
        <div>
             <Button name={"Post a Job"}/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
