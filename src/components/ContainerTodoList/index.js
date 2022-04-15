import React from "react";
import { TitleTodoList } from "../TitleTodoList";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import './ContainerTodoList.css';
import { TodoCounter } from "../TodoCounter";

const defaultTask =  [
    {text: 'Read Book', completed: true },
    {text: 'Study React', completed: false },
    {text: 'Cook Chicken', completed: false },
]


function ContainerTodoList() {
    const [tasks, setTasks] = React.useState(defaultTask);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTasks = tasks.filter(task => !!task.completed).length;
    const totalTasks = tasks.length;

    let searchedTasks = [];

    if (!searchValue.length >= 1 ) { //  if searchValue is empty
        searchedTasks = tasks;
    } else {} //Filter Tasks
        searchedTasks =  tasks.filter(task => {
            const taskText = task.text.toLowerCase();
            const searchText  = searchValue.toLowerCase();
            return taskText.includes(searchText);
    });
       

    return (
        <React.Fragment>
        <div className="ContainerTodoList">
        <TitleTodoList/>
        <TodoCounter
            total = {totalTasks}
            completed = {completedTasks}
        />
        <TodoSearch
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
        />
        <TodoList 
            tasks={searchedTasks}
            setTasks={setTasks}
         />
        </div>
        </React.Fragment>
    )
}

export { ContainerTodoList };