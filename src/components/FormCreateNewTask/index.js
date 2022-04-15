import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import './FormCreateNewTask.css';

function FormCreateNewTask() { 
    return (
        <React.Fragment>
        <form>
        <label className="FormCreate-label color-primary">Task Name</label>
        <input className="FormCreate-input" placeholder="With organization everything is possible"></input>
        </form>
        <CreateTodoButton/>
        </React.Fragment>
        
    )
}

export  {FormCreateNewTask };

