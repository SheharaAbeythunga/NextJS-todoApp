'use client';

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";

const AddTask = () => {
  const [openModal,setOpenModal]=useState<boolean>(false);
  
  return (
    <div>
      <button onClick={()=>setOpenModal(true)} className="btn btn-primary w-full" >
        Add Task
        <AiOutlinePlus size={18} />
      </button>
     <Modal openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
};

export default AddTask;
