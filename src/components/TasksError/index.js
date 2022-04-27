import React from "react";
import { MdSentimentVeryDissatisfied } from 'react-icons/md';
import "./css/TasksError.css";

function TasksError({ error }) {
    return ( 
          <>
          <p className="color-danger center">Ups!. There is error...</p>
          <div className="center"><MdSentimentVeryDissatisfied className="color-danger icon-sad"/></div>
          </>
    )
}

export { TasksError };

