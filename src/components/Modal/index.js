import React from "react";
import ReactDOM from "react-dom";
import { FormCreateNewTask } from "../NewTask/FormCreateNewTask";
import { TitleNewTask } from "../NewTask/TitleNewTask";
import "./css/Modal.css";

function Modal() {
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="ModalBackground">
        <div className="ModalContainer">
          <TitleNewTask />
          <FormCreateNewTask />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
