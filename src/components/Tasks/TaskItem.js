import React from "react";
import { MdCheckCircleOutline, MdClear, MdEdit } from "react-icons/md";
import "./css/TaskItem.css";

function TaskItem({ editTask, text, completed, onComplete, onDelete }) {
  const [isShown, setIsShown] = React.useState(false);
  const [task, setTask] = React.useState(text);
  const [disable, setDisable] = React.useState(true);

  const onChange = (event) => {
    setTask(event.target.value);
  };

  const onBlur = () => {
    editTask(text, task);
    setDisable(true);
  };

  const Edit = () => {
    disable && setDisable(false);
  };

  return (
    <li
      className="TodoItem"
      onMouseOver={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <MdCheckCircleOutline
        className={`MdCheckCircleOutline ${
          completed && "MdCheckCircleOutline--active"
        }`}
        onClick={onComplete}
      />
      <input
        className={`TaskItem-input ${completed && "TaskItem-input--complete"}`}
        value={task}
        readOnly={disable}
        onBlur={onBlur}
        onChange={onChange}
      />

      <MdClear className="MdClear" onClick={onDelete} />
      {isShown && !completed && (
        <MdEdit id="edit" className="MdEdit" onClick={Edit} />
      )}
    </li>
  );
}

export { TaskItem };
