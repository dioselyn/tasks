import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./css/ChangeAlert.css";

function ChangeAlert({ syncronize }) {
  const { show, toggleShow } = useStorageListener(syncronize);
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            It looks like you changed your App in another tab or window of the
            browser..
          </p>
          <p>¿Do you want to sync your App?</p>
          <button
            className="TodoForm-button TodoForm-button--add button-secondary"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
