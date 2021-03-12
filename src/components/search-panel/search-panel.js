import React from 'react';
import './search-panel.scss';

const SearchPanel = ({ searchValue, setSearchValue, onLabelChange }) => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '18px'
    }


    return (
        <input 
            className="search-panel"
            type="text"
            name="search"
            style={ searchStyle }
            placeholder={ searchText }
            onChange = { onLabelChange }
        /> 
    )
};


export default SearchPanel;