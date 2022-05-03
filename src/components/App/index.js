import React from "react";
import { NewTask } from "../NewTask";
import { Tasks } from "../Tasks";
import { Modal } from '../Modal'
import { TasksContext } from "../../context/Tasks";
import { CreateTaskButtonMobile } from "../NewTask/CreateTaskButtonMobile";
import { TasksProvider } from "../../context/Tasks";
import { Container } from '../Container';
import { Footer } from '../Footer';
import './App.css';



function App() {
  return (
    <React.Fragment>
    <TasksProvider>
      <Container/>
    </TasksProvider>
    <Footer/>
    </React.Fragment>
      
  );
}

export default App;
