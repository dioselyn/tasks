import React from "react";
import { FaSearch } from "react-icons/fa";
import "./css/TasksSearch.css";

function TasksSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch-wrapper">
      <input
        ype="search"
        className={`TodoSearch-input ${!!loading && "loading"}`}
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchValueChange}
      />

      <FaSearch
        className={`TodoSearch-icon color-primary ${!!loading && "loading"}`}
      />
    </div>
  );
}

export { TasksSearch };
