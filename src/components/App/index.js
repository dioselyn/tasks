import React from "react";
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
