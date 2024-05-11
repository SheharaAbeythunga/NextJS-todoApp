import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import { ITask } from "../../../types/tasks";

interface TodoListProps {
  taskListFromLocalStorage: ITask[];
}

const ToDoList: React.FC<TodoListProps> = ({ taskListFromLocalStorage }) => {
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
          {taskListFromLocalStorage.map((singleTask, index) => (
            <Draggable
              key={singleTask.id}
              draggableId={`draggable${singleTask.id}`}
              index={index}
            >
              {(provided) => (
                <tr                 
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <Task key={singleTask.id} task={singleTask} />
                </tr>
              )}
            </Draggable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
