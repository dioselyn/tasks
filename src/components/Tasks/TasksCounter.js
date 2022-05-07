import React from "react";
import "./css/TasksCounter.css";

function TasksCounter({ completedTasks, totalTasks, loading }) {
  return (
    <p className={`TodoCounter color-primary center ${!!loading && "loading"}`}>
      You have completed {completedTasks} of {totalTasks} Tasks
    </p>
  );
}

export { TasksCounter };
