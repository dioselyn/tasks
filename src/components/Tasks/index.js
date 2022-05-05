import React from "react";
import "./css/Tasks.css";

function Tasks({ children, loading }) {
  //RENDER
  return (
    <React.Fragment>
      <div className="ContainerTodoList">
        {React.Children.toArray(children).map((child) =>
          React.cloneElement(child, { loading })
        )}
        ;
      </div>
    </React.Fragment>
  );
}

export { Tasks };
