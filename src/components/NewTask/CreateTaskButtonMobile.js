import React from "react";
import { MdAdd } from 'react-icons/md';
import './css/CreateTaskButton.css'

function CreateTaskButtonMobile(props) {
    const onClickButton = (msg) => {
        props.setOpenModal(true);
    }

    return (
        <button 
        className="AddTaskMobile"
        onClick={onClickButton}
        >

        <MdAdd/>
        </button>
    );
}

export { CreateTaskButtonMobile };