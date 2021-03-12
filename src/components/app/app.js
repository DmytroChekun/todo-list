import React, { useState, useEffect } from 'react';

import './reset.scss';
import './app.scss';
import TodoHeader from '../todo-header/';
import TodoList from '../todo-list/';
import AddItemForm from '../add-item-form/';



const App = () => {

    let maxId = 100;

    const createTodoItem = (label) => {
        return {
            label: label,
            important: false,
            done: false,
            id: maxId++
        }
    }

    const todoDataInit = [
        createTodoItem('Drink Coffee'),
        createTodoItem('Make Awesome App'),
        createTodoItem('Have a lunch')
    ];

    const [todoData, setTodoData] = useState(todoDataInit); 


    const deleteItem = (id) => {
        setTodoData((current) => {
            return current.filter(item => item.id !== id);
        });
    }

    
    const onToggleImportant = (id) => {
        setTodoData((current) => {
            return current.map(item => {
                if (item.id === id) {
                    item.important = !item.important
                }
                return item;
            })
        });

    }

    const onToggleDone = (id) => {
        setTodoData((current) => {
            return current.map(item => {
                if (item.id === id) {
                    item.done = !item.done
                }
                return item;
            })
        });
        
    }

    const [doneUndoneCount, setDoneUndoneCount] = useState({doneCount: 0, unDoneCount: 0});
    useEffect(() => {
        let doneCount = 0;
        let unDoneCount = 0;
        todoData.forEach((current) => {
            if (current.done) {
                doneCount++
            }else {
                unDoneCount++
            }
        });
        setDoneUndoneCount({doneCount, unDoneCount});
    }, [todoData])
    

    const [todoValue, setTodoValue] = useState('');


    const addItem = (todoValue) => {
        if (todoValue.length >= 1){
            setTodoData([
                ... todoData,
                {
                    label: todoValue,
                    important: false,
                    done: false,
                    id: (maxId++) + todoData.length
                }
            ])
            setTodoValue('');
            console.log(todoValue);
        }
    }
    
    const [searchValue, setSearchValue] = useState('');

    

    const search = (todoData, searchValue) => {
        if (searchValue.length === 0) {
            return todoData;
        }
        return todoData.filter(item => {
            return item.label.toLowerCase().includes(searchValue.toLowerCase());
        })
    }

    const visibleItems = filter(search(todoData, searchValue), filter);

    const onLabelChange = event => {
        setSearchValue(event.target.value);
    }

    const [filterValue, setFilterValue] = useState('active');

    const filter = (items, filter) => {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    return(
        <div className="container">
            <TodoHeader 
                toDo={ doneUndoneCount.doneCount }
                done={ doneUndoneCount.unDoneCount }
                searchValue={ searchValue }
                setSearchValue={ setSearchValue }
                search={ search }
                onLabelChange={ onLabelChange }
                filter={  }
            />
            <TodoList
                todos={ visibleItems }
                onDeleted={ deleteItem }
                onToggleImportant={ onToggleImportant }
                onToggleDone={ onToggleDone }
            />
            <AddItemForm addItem={ addItem } todoValue= { todoValue } />
        </div>
    );
};

export default App;