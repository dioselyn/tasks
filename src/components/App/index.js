import React from "react";
import { NewTask } from "../NewTask";
import { Tasks } from "../Tasks";
import { Modal } from "../Modal";
import { useTasks } from "./useTasks";
import { CreateTaskButtonMobile } from "../NewTask/CreateTaskButtonMobile";
import { Container } from "../Container";
import { TitleNewTask } from "../NewTask/TitleNewTask";
import { FormCreateNewTask } from "../NewTask/FormCreateNewTask";
import { TasksTitle } from "../Tasks/TasksTitle";
import { TasksCounter } from "../Tasks/TasksCounter";
import { TasksSearch } from "../Tasks/TasksSearch";
import { TasksList } from "../Tasks/TasksList";
import { TaskItem } from "../Tasks/TaskItem";
import { TasksError } from "../TasksError";
import { TasksLoading } from "../TaskLoading";
import { EmptyTasks } from "../EmptyTasks";
import { Footer } from "../Footer";
import "./App.css";

function App() {
  const {
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
  } = useTasks();

  return (
    <React.Fragment>
      <Container>
        <NewTask>
          <TitleNewTask />
          <FormCreateNewTask addTask={addTask} setOpenModal={setOpenModal} />
        </NewTask>

        <Tasks>
          <TasksTitle />
          <TasksCounter
            completedTasks={completedTasks}
            totalTasks={totalTasks}
          />
          <TasksSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TasksList>
            {error && <TasksError error={error} />}
            {loading && <TasksLoading />}

            {!loading && !searchedTasks.length && <EmptyTasks />}

            <ul className="TodoList">
              {searchedTasks.map((task) => (
                <TaskItem
                  editTask={editTask}
                  key={task.text}
                  text={task.text}
                  completed={task.completed}
                  onComplete={() => completeTask(task.text)}
                  onDelete={() => deleteTask(task.text)}
                />
              ))}
            </ul>
          </TasksList>
        </Tasks>

        {!!openModal && ( //IF IS TRUE
          <Modal />
        )}
        <CreateTaskButtonMobile setOpenModal={setOpenModal} />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
