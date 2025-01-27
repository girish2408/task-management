import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useTasks();
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      addTask({ title: taskName, completed: false });
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New Task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
