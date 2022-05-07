import React from "react";

function withStorageListener(WrappedComponent) {
  //HOC High Order Listener
  return function WrappedComponentWithStorageListener(props) {
    //return a component called WrapperComponentWithStorageListener
    const [storageChange, setStorageChange] = React.useState(false); //state that to save some change inside the app
    return (
      <WrappedComponent show={storageChange} toggleShow={setStorageChange} />
    );
  };
}

export { withStorageListener };
