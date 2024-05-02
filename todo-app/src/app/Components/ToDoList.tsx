import { ITask } from "../../../types/tasks";

interface TodoListProps {
  taskListFromAPI: ITask[];
}

const ToDoList: React.FC<TodoListProps> = ({ taskListFromAPI }) => {
  console.log("tasks in todo list");
  console.log(taskListFromAPI)
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskListFromAPI.map((singleTask, index) => (
            <tr key={index}>
              <td>{singleTask.task}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
