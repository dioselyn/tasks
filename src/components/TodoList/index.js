import React from "react";
import './TodoList.css';
import { TodoItem } from "../TodoItem";



function TodoList(props) {
    const completeTask = (text) => { //complete Tasks
        const taskIndex = props.tasks.findIndex(task => task.text === text);
        const newTasks = [...props.tasks];
        newTasks[taskIndex].completed = true;
        props.setTasks(newTasks);
    };

    const deleteTask = (text) => { //complete Tasks
        const taskIndex = props.tasks.findIndex(task => task.text === text);
        const newTasks = [...props.tasks];
        newTasks.splice(taskIndex, 1);
        props.setTasks(newTasks);
    };

    return (
        <section>
        <ul className="TodoList">
        {props.tasks.map(task => (
        <TodoItem key={task.text} text={task.text} completed={task.completed}
        onComplete={() => completeTask(task.text)} onDelete={() => deleteTask(task.text)} />
         ))}
        </ul>
        </section>
       
    )
    
}

export { TodoList };