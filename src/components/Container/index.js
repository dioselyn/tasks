import React from "react";
import { NewTask } from "../NewTask";
import { Tasks } from "../Tasks";
import { Modal } from '../Modal'
import { TasksContext } from "../../context/Tasks";
import { CreateTaskButtonMobile } from "../NewTask/CreateTaskButtonMobile";
import './css/Container.css';





function Container() {
    return (
        <TasksContext.Consumer>
        {({
         openModal,
         setOpenModal,
        }) => (
        <>
        <div className="Container">
            <NewTask/>
            <Tasks/>

        </div>

      
            
            {!!openModal && ( //IF IS TRUE
                <Modal/>
            )}

        
        <CreateTaskButtonMobile
            setOpenModal={ setOpenModal}
        />

        </>
      
       
         )
        }
       
      

        </TasksContext.Consumer>
    )

}

export { Container };