import React from "react";
import { TaskItem } from "./TaskItem";
import './css/TasksList.css';
import { TasksContext } from '../../context/Tasks/';
import { TasksError } from "../TasksError";
import { TasksLoading } from "../TaskLoading";
import { EmptyTasks } from "../EmptyTasks";



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
         {error && <TasksError error={error} />}
         {loading && <TasksLoading/>
         }

        {(!loading && !searchedTasks.length) && <EmptyTasks/>}

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