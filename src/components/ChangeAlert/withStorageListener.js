import React from "react";

function withStorageListener(WrappedComponent) {
  //HOC High Order Listener
  return function WrappedComponentWithStorageListener(props) {
    //return a component called WrapperComponentWithStorageListener
    const [storageChange, setStorageChange] = React.useState(false); //state that to save some change inside the app

    React.useEffect(() => {
      const onChange = (change) => {
        if (change.key === "TASKS_V1") {
          console.log("there were changes in TASKS_V1");

          setStorageChange(true);
        }
      };

      window.addEventListener("storage", onChange);
    }, [storageChange]);

    const toggleShow = () => {
      props.syncronize();
      setStorageChange(false);
    };

    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}

export { withStorageListener };
