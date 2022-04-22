import React from "react";
import { TasksProvider } from "../../context/Tasks";
import { Container } from '../Container';
import './App.css';



function App() {
  return (
    <TasksProvider>
      <Container/>
    </TasksProvider>
      
  );
}

export default App;
