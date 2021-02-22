import React, { useState } from 'react';

import './reset.scss';
import './app.scss';
import TodoHeader from '../todo-header/';
import TodoList from '../todo-list/';



const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Drink Coffee', important: false, id: 3 }
    ];



    const deleteItem = (id) => {
        setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            todoData.splice(idx, 1);
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArray = [ ... before, ... after];

            return {
                todoData: newArray
            };
        });
    }
    
    return(
    <div className="container">
        <TodoHeader toDo={ToDo} done={done} />
        <TodoList
        todos={todoData}
        onDeleted={ deleteItem } />
    </div>
    );
};

export default App;