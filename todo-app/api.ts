import { ITask } from "./types/tasks";

const baseUrl="http://localhost:3001";

export const getAllTodos=async():Promise<ITask[]> =>{
    const res=await fetch(`${baseUrl}/tasksList`,{cache: "no-store"});
    const todos=await res.json();
    console.log("in api");

    console.log(todos);
    return todos;
}

export const addTodo=async(todo:ITask):Promise<ITask>=>{
    const res=await fetch(`${baseUrl}/tasksList`,{
        method:'POST',
        headers:{
            'Content-Type':'appliaction/json,'
        },
        body:JSON.stringify(todo)
    })
    const newTodo=await res.json();
    return newTodo;
}

