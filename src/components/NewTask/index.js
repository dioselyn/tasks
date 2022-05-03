import React from "react";
import { FormCreateNewTask } from "./FormCreateNewTask";
import { TitleNewTask } from "./TitleNewTask";
import './css/NewTask.css';



function NewTask({children}) {
    return (
        <React.Fragment>
        <div className="ContainerNewTask">
            {children}
        </div>
        </React.Fragment>
    );
}

export { NewTask };