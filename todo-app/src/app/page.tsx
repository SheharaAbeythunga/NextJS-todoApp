"use client";
import { useEffect, useState } from "react";
import { getAllTodos } from "../../api";

import ToDoColumn from "./Components/ToDoColumn";
import InProgressColumn from "./Components/InProgressColumn";
import CompletedColumn from "./Components/CompletedColumn";
import { DragDropContext } from "react-beautiful-dnd";

const Page = () => {
  return (
    <DragDropContext>
      <div className="flex justify-between">
        <div className="w-1/3 p-4 border">
          <ToDoColumn />
        </div>
        <div className="w-1/3 p-4 border">
          <InProgressColumn />
        </div>
        <div className="w-1/3 p-4 border">
          <CompletedColumn />
        </div>
      </div>
    </DragDropContext>
  );
};

export default Page;
