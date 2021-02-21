import React from 'react';
import SearchPanel from '../search-panel/';
import FilterBtns from '../filter-btns/';
import './todo-header.scss';

const TodoHeader = ( {toDo, done}) => { 
    return (
        <div className="todo-header">
            <div className="todo-header__top-section">
                <h1 className="todo-header__title">Todo list</h1>
                <h2 className="todo-header__todo-info">{toDo} more to do, {done} done</h2>
            </div>
            <div className="todo-header__bottom-section">
                <SearchPanel />
                <FilterBtns />
            </div>
        </div>

    );
};

export default TodoHeader;