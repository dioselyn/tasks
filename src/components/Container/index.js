import React from "react";
import { NewTask } from "../NewTask";
import { Tasks } from "../Tasks";
import './css/Container.css';



function Container() {
    return (
        <div className="Container">
            <NewTask/>
            <Tasks useLocalStorage=
            { useLocalStorage }/>
        </div>
    );
}

export { Container };