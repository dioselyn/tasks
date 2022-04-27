import React from "react";
import './css/FormCreateNewTask.css';
import { TasksContext } from '../../context/Tasks';

function FormCreateNewTask() { 
    const [newTaskValue, setNewTaskValue] = React.useState('');

    const {
        addTask,
        setOpenModal,
    } = React.useContext(TasksContext);


    const onChange = (event) => {
       setNewTaskValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
        setNewTaskValue("");
    };

    const onSubmit= (event) => {
        event.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
        <label className="FormCreate-label color-primary">Task Name</label>
        <textarea className="FormCreate-textarea" placeholder="With organization everything is possible" value={newTaskValue} onChange={onChange}/>

        <div className="Content-buttons">
        <button 
            type="submit"
            className="CreateTaskButton button-primary"
         > Create task
        </button>
        <button  type="button"                           className="button-secondary"
          onClick={onCancel}
        >
            Cancelar
        </button>
        </div>
        </form>
        
    )
}

export  { FormCreateNewTask };

