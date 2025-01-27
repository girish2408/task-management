import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, markCompleted, removeTask } = useTasks();

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
          <span>{task.title}</span>
          <div>
            {!task.completed && (
              <button onClick={() => markCompleted(task.id)}>Complete</button>
            )}
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
