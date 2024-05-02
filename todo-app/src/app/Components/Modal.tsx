import React, { FormEventHandler, useState } from "react";
import { addTodo } from "../../../api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';



interface ModalProps{
    openModal:boolean;
    setOpenModal:(open: boolean)=>boolean | void;
}
const Modal: React.FC<ModalProps> = ({openModal,setOpenModal}) => {

    const router=useRouter();
    const [newTaskValue,setNewTaskValue]=useState<string>("");

    const handleSubmitNewTodo:FormEventHandler<HTMLFormElement>=async(e)=>{
        e.preventDefault();
        await addTodo({
            id:uuidv4(),
            task:newTaskValue,
        });
        setNewTaskValue("");
        setOpenModal(false);
        router.refresh();
    }
  return (
    <div>
      <dialog id="my_modal_3" className={`modal ${openModal?"modal-open":""}`}>
        <div className="modal-box">
          <form onSubmit={handleSubmitNewTodo} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={()=>setOpenModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg">Add new task</h3>
            <div className="modal-action">
                <input value={newTaskValue} onChange={(e)=>{
                   setNewTaskValue(e.target.value)
                }}type='text' placeholder='type here' className='input input-bordered w-full'
                />
                <button type="submit" className="btn">Submit</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
