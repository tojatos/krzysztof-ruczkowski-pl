import React, {ChangeEventHandler} from 'react';
import './SearchBar.sass'

const SearchBar = ({placeholderText, onChange}: {placeholderText: string, onChange: ChangeEventHandler<HTMLInputElement> | undefined}) => {
    return (
        <div className="search-bar">
            <input type="text" placeholder={placeholderText} onChange={onChange} size={1}/>
        </div>
)}

export default SearchBar;