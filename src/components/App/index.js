import React from "react";
import { TasksProvider } from "../../Context/Tasks";
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
