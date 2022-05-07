import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTasks(props) {
  const {
    item: tasks,
    saveItem: saveTask,
    syncronizeItem: syncronizeTasks,
    loading,
    error,
  } = useLocalStorage("TASKS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTasks = tasks.filter((task) => !!task.completed).length;
  const totalTasks = tasks.length;

  //SEARCH
  let searchedTasks = [];

  if (!searchValue.length >= 1) {
    //  if searchValue is empty
    searchedTasks = tasks;
  } else {
    //Filter Tasks
    searchedTasks = tasks.filter((task) => {
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  const addTask = (text) => {
    const newTasks = [...tasks];
    newTasks.push({
      completed: false,
      text,
    });
    saveTask(newTasks);
  };

  const editTask = (text, newText) => {
    const taskIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].text = newText;
    saveTask(newTasks);
  };

  const completeTask = (text) => {
    //complete Task
    const taskIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = true;
    saveTask(newTasks);
  };

  const deleteTask = (text) => {
    //delete Task
    const taskIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    saveTask(newTasks);
  };

  return {
    loading,
    error,
    tasks,
    totalTasks,
    saveTask,
    editTask,
    completeTask,
    deleteTask,
    searchValue,
    setSearchValue,
    searchedTasks,
    addTask,
    completedTasks,
    openModal,
    setOpenModal,
    syncronizeTasks,
  };
}

export { useTasks };
