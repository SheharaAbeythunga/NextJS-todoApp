import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";
import { ITask } from "../../../types/tasks";

interface AddTaskToLocalClassProps {
  setTaskList: Dispatch<SetStateAction<ITask[]>>;
}

const AddTaskToLocalClass: React.FC<AddTaskToLocalClassProps>  = ({ setTaskList }) => {
  const [openModal, setOpenModal] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");

  // Function to add a new task to Local Storage and update state
  const addTaskToLocal = (task: ITask) => {
    const existingTasksJSON = localStorage.getItem("tasks");
    const existingTasks = existingTasksJSON ? JSON.parse(existingTasksJSON) : [];
    const updatedTasks = [...existingTasks, task];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTaskList(updatedTasks); // Update state with the new task list
  };

  const handleSubmitNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      task: newTaskValue,
    };

    addTaskToLocal(newTask);

    setNewTaskValue("");
    setOpenModal(false);
  };

  return (
    <div>
      <button onClick={() => setOpenModal(true)} className="btn btn-primary w-full">
        Add Task <AiOutlinePlus size={18} />
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <form onSubmit={handleSubmitNewTodo} method="dialog">
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
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

export default AddTaskToLocalClass;
