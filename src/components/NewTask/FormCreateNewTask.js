import React from "react";
import { CreateTaskButton } from "./CreateTaskButton";
import './css/FormCreateNewTask.css';

function FormCreateNewTask() { 
    return (
        <React.Fragment>
        <form>
        <label className="FormCreate-label color-primary">Task Name</label>
        <input className="FormCreate-input" placeholder="With organization everything is possible"></input>
        </form>
        <CreateTaskButton/>
        </React.Fragment>
        
    )
}

export  {FormCreateNewTask };

