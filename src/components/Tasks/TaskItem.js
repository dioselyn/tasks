import React from 'react';
import { MdCheckCircleOutline, MdClear, MdEdit } from 'react-icons/md';
//import { TasksContext } from '../../context';
import './css/TaskItem.css';

function TaskItem(props) {
  const [isShown, setIsShown] = React.useState(false);
  const [task, setTask] = React.useState(props.text);
  const [disable, setDisable] = React.useState(true);
  /*const {
    editTask,
} = React.useContext(TasksContext); */


  const onBlur = (event) => {
     event.preventDefault();
     setTask(event.target.value);
   // addTask(setTask);
     setDisable(true);
  }

  const Edit = () => {
    (disable && setDisable(false));
    setTask();
  }

  
 
  return (
    <li className="TodoItem" onMouseOver={() => setIsShown(true)} 
    onMouseLeave={() => setIsShown(false)}>
        <MdCheckCircleOutline 
        className={`MdCheckCircleOutline ${props.completed && 'MdCheckCircleOutline--active'}`}
        onClick={props.onComplete}
        />
        <input 
          className={`TaskItem-input ${props.completed && 'TaskItem-input--complete'}`} 
          value={task} 
          readOnly={disable}
          onBlur={onBlur}
        />

        <MdClear 
        className="MdClear"
        onClick={props.onDelete}
        />
      {isShown && (
        <MdEdit
          id="edit"
          className="MdEdit"
          onClick={Edit}
        />
      )}
    </li>
  );
}

export { TaskItem };