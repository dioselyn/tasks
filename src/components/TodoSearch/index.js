import React from "react";
import './TodoSearch.css';
import { FaSearch } from "react-icons/fa";


function TodoSearch({ searchValue, setSearchValue }) { 
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
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
       
        <FaSearch className="TodoSearch-icon color-primary"/>
        </div>
    );
}

export { TodoSearch };