"use client";
import React from "react";
import { FormEventHandler, useState } from "react";
import { ITask } from "../../../types/tasks";
import { deleteTodo, editTodo } from "../../../api";
import Task from "./Task";

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
            <Task key={singleTask.id} task={singleTask}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
