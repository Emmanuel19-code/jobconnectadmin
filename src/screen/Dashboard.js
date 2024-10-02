import React, { useContext } from 'react'
import Sidebar from '../components/sidebar'
import SideDisplay from '../components/sidedisplay'
import Modal from '../components/modal'
import { ModalContext } from '../context/modal';



const Dashboard = () => {
  const { open } = useContext(ModalContext);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <SideDisplay />
      {open && <Modal/>} {/* Ensure the modal component is referenced correctly */}
    </div>
  );
};

export default Dashboard;
