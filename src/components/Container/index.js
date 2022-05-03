import React from "react";
import './css/Container.css';




function Container({openModal, setOpenModal}) {
    return (
        <div className="Container">
            <NewTask/>
            <Tasks/>
        </div>

            {!!openModal && ( //IF IS TRUE
                <Modal/>
            )}

        
        <CreateTaskButtonMobile
            setOpenModal={ setOpenModal }
        />

    );
}
       



export { Container };