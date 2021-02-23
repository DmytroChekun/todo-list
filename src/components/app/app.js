import React, { useState, useEffect } from 'react';

import './reset.scss';
import './app.scss';
import TodoHeader from '../todo-header/';
import TodoList from '../todo-list/';
import AddItemForm from '../add-item-form/';



const App = () => {

    let maxId = 100;

    const todoDataInit = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Drink Coffee', important: false, id: 3 }
    ];



    const [todoData, setTodoData] = useState(todoDataInit); 

    const deleteItem = (id) => {
        setTodoData((current) => {
            return current.filter(item => item.id !== id);
        });
    }

    const addItem = (text) => {
        setTodoData(() => {
            return [...todoData, {
                label: text,
                important: false,
                id: maxId + todoData.length + 1
            }];
        })
        
    }
    
    const onToggleImportant = (id) => {
        console.log('Toggle Important', id);
    }

    const onToggleDone = (id) => {
        console.log('Toggle Done', id);
    }


    const ToDo = 1;
    const done = 3;
    
    return(
        <div className="container">
            <TodoHeader toDo={ToDo} done={done} />
            <TodoList
            todos={ todoData }
            onDeleted={ deleteItem }
            onToggleImportant={ onToggleImportant }
            onToggleDone={ onToggleDone }
            />
            <AddItemForm onItemAdded={ addItem } />
        </div>
    );
};

export default App;