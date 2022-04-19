import React from "react";
import { FormCreateNewTask } from "./FormCreateNewTask";
import { TitleNewTask } from "./TitleNewTask";
import { MdAdd } from 'react-icons/md';
import './css/NewTask.css';


function NewTask() {
    return (
        <React.Fragment>
        <div className="ContainerNewTask">
        <TitleNewTask/>
        <FormCreateNewTask/>
        </div>
        <button className="AddTaskMovil"><MdAdd/></button>
        </React.Fragment>
    );
}

export { NewTask };