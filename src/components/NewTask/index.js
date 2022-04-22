import React from "react";
import { FormCreateNewTask } from "./FormCreateNewTask";
import { TitleNewTask } from "./TitleNewTask";
import { MdAdd } from 'react-icons/md';
import './css/NewTask.css';
import { CreateTaskButtonMobile } from "./CreateTaskButtonMobile";


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