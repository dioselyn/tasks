import React from "react";
import "./css/TasksList.css";

function TasksList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section>
      {/* Error */}
      {props.error && props.onError()}
      {/* Loading */}
      {props.loading && props.onLoading()}
      {/* EmptyTasks */}
      {!props.loading && !props.totalTasks && props.onEmptyTasks()}
      {/*  EmptySearchResults */}
      {!!props.totalTasks &&
        !props.searchedTasks.length &&
        props.onEmptySearchResults(props.searchText)}

      {!props.loading && !props.error && props.searchedTasks.map(renderFunc)}

      <ul className="TodoList">{props.children}</ul>
    </section>
  );
}

export { TasksList };
