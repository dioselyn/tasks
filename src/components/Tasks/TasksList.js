import React from "react";
import { TaskItem } from "./TaskItem";
import './css/TasksList.css';



function TasksList(props) {
  
    return (
        <section>
         {props.error && <p>Oh no! There is an error...</p>}
        {props.loading && <p>loading...</p>}

        {(!props.loading && !props.tasks.length) && <p>Create your first Task!</p>}

        <ul className="TodoList">
        {props.tasks.map(task => (
        <TaskItem key={task.text} text={task.text} completed={task.completed}
        onComplete={() => props.completeTask(task.text)} onDelete={() => props.deleteTask(task.text)} />
         ))}
        </ul>
        </section>
       
    )
    
}

export { TasksList };