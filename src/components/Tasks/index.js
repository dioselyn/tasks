import React from "react";
import "./css/Tasks.css";

function Tasks({ children }) {
  //RENDER
  return (
    <React.Fragment>
      <div className="ContainerTodoList">{children}</div>
    </React.Fragment>
  );
}

export { Tasks };
