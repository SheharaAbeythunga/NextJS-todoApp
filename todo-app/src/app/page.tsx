"use client";
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ToDoColumn from "./Components/ToDoColumn";
import InProgressColumn from "./Components/InProgressColumn";
import CompletedColumn from "./Components/CompletedColumn";

const Page = () => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="flex justify-between">
        <Droppable droppableId="idtodo">
          {(provided) => (
            <div
              className="w-1/3 p-4 border"
              {...provided.droppableProps}
              ref={provided.innerRef}
              
            >
              <ToDoColumn />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="inProgress">
          {(provided) => (
            <div
              className="w-1/3 p-4 border"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <InProgressColumn />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="completed">
          {(provided) => (
            <div
              className="w-1/3 p-4 border"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <CompletedColumn />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Page;
