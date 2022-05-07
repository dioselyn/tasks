import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [syncronizedItem, setSyncronizedItem] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem); //transform to array
        }

        setItem(parsedItem);
        setLoading(false);
        setSyncronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, [syncronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const syncronizeItem = () => {
    setLoading(true);
    setSyncronizedItem(false);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    syncronizeItem,
  };
}

export { useLocalStorage };
