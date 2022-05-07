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
import { EmptySearchResults } from "../EmptySearchResults";
import { Footer } from "../Footer";
import { ChangeAlert } from "../ChangeAlert/";
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
    syncronizeTasks,
  } = useTasks();

  return (
    <React.Fragment>
      <Container>
        <NewTask>
          <TitleNewTask />
          <FormCreateNewTask addTask={addTask} setOpenModal={setOpenModal} />
        </NewTask>

        <Tasks loading={loading}>
          <TasksTitle />
          <TasksCounter
            completedTasks={completedTasks}
            totalTasks={totalTasks}
          />
          <TasksSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TasksList
            error={error}
            searchText={searchValue}
            searchedTasks={searchedTasks}
            totalTasks={totalTasks}
            onError={() => <TasksError />}
            onLoading={() => <TasksLoading />}
            onEmptyTasks={() => <EmptyTasks />}
            onEmptySearchResults={(searchText) => (
              <EmptySearchResults searchText={searchText} />
            )}
            render={(task) => (
              <TaskItem
                editTask={editTask}
                key={task.text}
                text={task.text}
                completed={task.completed}
                onComplete={() => completeTask(task.text)}
                onDelete={() => deleteTask(task.text)}
              />
            )}
          />
        </Tasks>

        {!!openModal && ( //IF IS TRUE
          <Modal>
            <TitleNewTask />
            <FormCreateNewTask addTask={addTask} setOpenModal={setOpenModal} />
          </Modal>
        )}
        <CreateTaskButtonMobile setOpenModal={setOpenModal} />
      </Container>
      <Footer />

      <ChangeAlert syncronize={syncronizeTasks} />
    </React.Fragment>
  );
}

export default App;
