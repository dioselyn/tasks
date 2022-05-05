import React from "react";
import "./css/TasksList.css";

function TasksList(props) {
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.searchedTasks.length && props.onEmptyTasks()}

      {props.searchedTasks.map(props.render)}

      <ul className="TodoList">{props.children}</ul>
    </section>
  );
}

export { TasksList };
