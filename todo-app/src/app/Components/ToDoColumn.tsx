import React, { useEffect, useState } from "react";
import AddTaskToLoalClass from "./AddTaskToLocalClass";
import ToDoList from "./ToDoList";
import { ITask } from "../../../types/tasks";

const ToDoColumn = () => {
  const [taskListFromLocalStorage, setTaskListFromLocalStorage] = useState<
    ITask[]
  >([]);
  useEffect(() => {
    // Check if localStorage is available
    if (typeof localStorage !== "undefined") {
      // Helper function to retrieve tasks from Local Storage
      const getAllTodosFromLocalStorage = () => {
        const storedTasksJSON = localStorage.getItem("tasks");
        return storedTasksJSON ? JSON.parse(storedTasksJSON) : [];
      };

      // Load tasks from local storage when the component mounts
      const tasks = getAllTodosFromLocalStorage();
      setTaskListFromLocalStorage(tasks);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-2xl font-bold">ToDo Tasks</h1>
        <AddTaskToLoalClass setTaskList={setTaskListFromLocalStorage} />
      </div>
      <ToDoList taskListFromLocalStorage={taskListFromLocalStorage} />
    </div>
  );
};

export default ToDoColumn;
