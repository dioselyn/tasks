import React from "react";
import { FaSearch } from "react-icons/fa";
import "./css/TasksSearch.css";

function TasksSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch-wrapper">
      <input
        ype="search"
        className="TodoSearch-input"
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchValueChange}
      />

      <FaSearch className="TodoSearch-icon color-primary" />
    </div>
  );
}

export { TasksSearch };
