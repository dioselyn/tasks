import React from "react";
import './ContainerNewTask.css';
import { FormCreateNewTask } from "../FormCreateNewTask";
import { TitleNewTask } from "../TitleNewTask";


function ContainerNewTask() {
    return (
        <div className="ContainerNewTask">
        <TitleNewTask/>
        <FormCreateNewTask/>
        </div>
    );
}

export { ContainerNewTask };