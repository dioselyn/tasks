import React from "react";
import { TasksTitle} from "./TasksTitle";
import { TasksCounter } from "./TasksCounter";
import { TasksSearch } from "./TasksSearch";
import { TasksList } from "./TasksList";


import './css/Tasks.css';

/*const defaultTask =  [
    {text: 'Read Book', completed: true },
    {text: 'Study React', completed: false },
    {text: 'Cook Chicken', completed: false },
]*/


function Tasks({useLocalStorage}) {
   
   
       
    //RENDER
    return (
        <React.Fragment>
        <div className="ContainerTodoList">
        <TasksTitle/>
        <TasksCounter/>
        <TasksSearch/>
        <TasksList />
        </div>
        </React.Fragment>
    )  
} 

export { Tasks }; 