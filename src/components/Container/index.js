import React from "react";
import { ContainerNewTask } from "../ContainerNewTask";
import { ContainerTodoList } from "../ContainerTodoList";
import './Container.css';


function Container() {
    return (
        <div className="Container">
            <ContainerNewTask/>
            <ContainerTodoList/>
        </div>
    );
}

export { Container };