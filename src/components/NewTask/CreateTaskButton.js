import React from "react";

function CreateTaskButton(props) {
  const onComplete = () => {
    alert('ya completaste el todo' + props.text)
  };
    return (
      <button 
      className="CreateTodoButton button-primary"
      onClick={ () => onClickButton('Aquí se debería guardar los datos')}
      >

      Create task

      </button>
       
    )
    
}

export { CreateTaskButton };