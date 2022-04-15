import React from 'react';
import './TodoItem.css';
import { MdCheckCircleOutline, MdClear } from 'react-icons/md';


function TodoItem(props) {
 
  return (
    <li className="TodoItem">
        <MdCheckCircleOutline 
        className={`MdCheckCircleOutline ${props.completed && 'MdCheckCircleOutline--active'}`}
        onClick={props.onComplete}

        />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
        <MdClear 
        className="MdClear"
        onClick={props.onDelete}
        />
    </li>
  );
}

export { TodoItem };