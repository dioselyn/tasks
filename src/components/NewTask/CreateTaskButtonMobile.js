import React from "react";
import { MdAdd } from 'react-icons/md';
import './css/CreateTaskButton.css'

function CreateTaskButtonMobile(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
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