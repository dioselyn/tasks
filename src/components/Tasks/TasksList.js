import React from "react";
import { TaskItem } from "./TaskItem";
import './css/TasksList.css';
import { TasksContext } from '../../context/Tasks/';



function TasksList() {
    return (
        <TasksContext.Consumer>
        {({
            error,
            loading,
            searchedTasks,
            completeTask,
            deleteTask,
          }) => (

            <section>
         {error && <p>Oh no! There is an error...</p>}
        {loading && <p className="color-gradient center">loading...</p>}

        {(!loading && !searchedTasks.length) && <p className="color-gradient center">Create your first Task!</p>}

        <ul className="TodoList">
        {searchedTasks.map(task => (
        <TaskItem key={task.text} text={task.text} completed={task.completed}
        onComplete={() => completeTask(task.text)} onDelete={() => deleteTask(task.text)} />
         ))}
        </ul>
        </section>

          )
        }
    </TasksContext.Consumer>

       
    )
    
}

export { TasksList };