import React, { FormEventHandler, useState } from "react";
import { ITask } from "../../../types/tasks";
import { FiEdit,FiTrash2 } from "react-icons/fi";
import { deleteTodo, editTodo } from "../../../api";
import { useRouter } from "next/navigation";


interface TaskProps{
    task:ITask
}

const Task:React.FC<TaskProps> = ({task}) => {
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.task);
  const [clickedTaskId, setClickedTaskId] = useState<string>("");

  const router = useRouter();

const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenDeleteModal(false);
    router.refresh();
  };
  
    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
          id: clickedTaskId,
          task: taskToEdit,
        });
        setTaskToEdit("");
        setOpenEditModal(false);
        router.refresh();
      };
      
  return (
   
      <tr key={task.id}>
        <td className="w-full">{task.task}</td>
        <td className="flex gap-5">
          <FiEdit
            onClick={() => {
              setClickedTaskId(task.id);
              setOpenEditModal(true);
            }}
            cursor="pointer"
            className="text-blue-500"
            size={25}
          />
          <dialog
            id="my_modal_3"
            className={`modal ${openEditModal ? "modal-open" : ""}`}
          >
            <div className="modal-box">
              <form onSubmit={handleSubmitEditTodo} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  onClick={() => setOpenEditModal(false)}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
                <h3 className="font-bold text-lg">Edit task</h3>
                <div className="modal-action">
                  <input
                    value={taskToEdit}
                    onChange={(e) => {
                      setTaskToEdit(e.target.value);
                    }}
                    type="text"
                    placeholder="type here"
                    className="input input-bordered w-full"
                  />
                  <button type="submit" className="btn">
                    Save
                  </button>
                  <button
                    onClick={() => setOpenEditModal(false)}
                    className="btn"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </dialog>
          <FiTrash2
            onClick={() => setOpenDeleteModal(true)}
            cursor="pointer"
            className="text-red-500"
            size={25}
          />
          <dialog
            id="my_modal_3"
            className={`modal ${openDeleteModal ? "modal-open" : ""}`}
          >
            <div className="modal-box">
              <h3 className="text-lg">
                Are you sure, you want to delete this task?
              </h3>
              <div className="modal-action">
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="btn"
                >
                  Yes
                </button>
                <button onClick={() => setOpenDeleteModal(false)}>No</button>
              </div>
            </div>
          </dialog>
        </td>
      </tr>
    
  );
};

export default Task;
