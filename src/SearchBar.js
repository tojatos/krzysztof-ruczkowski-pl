import React from 'react';
import './SearchBar.sass'

const SearchBar = ({placeholderText, onChange}) => {
    return (
        <div className="search-bar">
            <input type="text" placeholder={placeholderText} onChange={onChange}/>
        </div>
)}

export default SearchBar;