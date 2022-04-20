import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TasksContext = React.createContext();

function TasksProvider(props) {
    const {
        item: tasks,
        saveItem: saveTasks ,
        loading,
        error,
     } = useLocalStorage('TASKS_V1', []);
 
    //console.log(tasks);
 
    const [searchValue, setSearchValue] = React.useState('');
 
     const completedTasks = tasks.filter(task => !!task.completed).length;
     const totalTasks = tasks.length;
     
     //SEARCH
     let searchedTasks = [];
 
     if (!searchValue.length >= 1 ) { //  if searchValue is empty
         searchedTasks = tasks;
     } else {} //Filter Tasks
         searchedTasks =  tasks.filter(task => {
             const taskText = task.text.toLowerCase();
             const searchText  = searchValue.toLowerCase();
             return taskText.includes(searchText);
     });
 
     const completeTask = (text) => { //complete Task
         const taskIndex = tasks.findIndex(task => task.text === text);
         const newTasks = [...tasks];
         newTasks[taskIndex].completed = true;
         saveTasks(newTasks);
     };
 
     const deleteTask = (text) => { //delete Task
         const taskIndex = tasks.findIndex(task => task.text === text);
         const newTasks = [...tasks];
         newTasks.splice(taskIndex, 1);
         saveTasks(newTasks);
     };

    return (
        <TasksContext.Provider value={{
            loading,
            error,
            tasks,
            saveTasks,
            completeTask,
            deleteTask,
            searchValue,
            setSearchValue,
            searchedTasks,
            totalTasks,
            completedTasks,
        }}>
            { props.children }
        </TasksContext.Provider>
    );
}

export { TasksContext, TasksProvider };
