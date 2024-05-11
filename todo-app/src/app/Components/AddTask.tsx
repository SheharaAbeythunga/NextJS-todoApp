"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "../../../api";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";


const AddTask = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [newTaskValue,setNewTaskValue]=useState<string>("");

  const router=useRouter();


  const handleSubmitNewTodo:FormEventHandler<HTMLFormElement>=async(e)=>{
    e.preventDefault();

    console.log(newTaskValue);
    
    await addTodo({
        id:uuidv4(),
        type:"todo",
        task:{
          id:uuidv4(),
          taskName:newTaskValue
  }});
    setNewTaskValue("");
    setOpenModal(false);
    router.refresh();
}

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="btn btn-primary w-full"
      >
        Add Task
        <AiOutlinePlus size={18} />
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <form onSubmit={handleSubmitNewTodo} method="dialog">
        <h3 className="font-bold text-lg">Add new task</h3>
        <div className="modal-action">
          <input
            value={newTaskValue}
            onChange={(e) => {
              setNewTaskValue(e.target.value);
            }}
            type="text"
            placeholder="type here"
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
