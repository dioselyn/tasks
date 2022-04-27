import React from "react";
import { FormCreateNewTask } from "./FormCreateNewTask";
import { TitleNewTask } from "./TitleNewTask";
import './css/NewTask.css';



function NewTask() {
    return (
        <React.Fragment>
        <div className="ContainerNewTask">
        <TitleNewTask/>
        <FormCreateNewTask/>
        </div>
        </React.Fragment>
    );
}

export { NewTask };