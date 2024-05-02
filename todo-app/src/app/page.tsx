import { getAllTodos } from "../../api";
import AddTask from "./Components/AddTask";
import ToDoList from "./Components/ToDoList";

export default async function Page() {
  const taskListFromAPI = await getAllTodos();
  console.log("tasks in page");
  console.log(taskListFromAPI);


  return (
    <div className="max-w-4xl  mx-auto mt-4">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-2xl font-bold">ToDo List App</h1>
        <AddTask/>
      </div>
      <ToDoList taskListFromAPI={taskListFromAPI}/>
    </div>
  );
}
