import React from "react";
import "./css/TasksCounter.css";

function TasksCounter({ completedTasks, totalTasks }) {
  return (
    <p className="TodoCounter color-primary">
      You have completed {completedTasks} of {totalTasks} Tasks
    </p>
  );
}

export { TasksCounter };
