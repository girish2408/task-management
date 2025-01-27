import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles/styles.css";

const App = () => (
  <TaskProvider>
    <div className="task-app">
      <h1>Task Management</h1>
      <TaskForm />
      <TaskList />
    </div>
  </TaskProvider>
);

export default App;
