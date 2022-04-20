import React from "react";
import { TaskItem } from "./TaskItem";
import './css/TasksList.css';
import { TasksContext } from '../../Context/Tasks/';



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
        {loading && <p>loading...</p>}

        {(!loading && !searchedTasks.length) && <p>Create your first Task!</p>}

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