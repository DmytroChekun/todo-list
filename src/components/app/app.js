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

    // const addItem = (todoValue) => {
    //     setTodoData(() => {
    //         maxId++
    //         return [...todoData, {
    //             label: todoValue,
    //             important: false,
    //             done: false,
    //             id: (maxId++) + todoData.length
    //         }];
    //     })
    //     console.log(todoData);
    // }

    // useEffect(() => {
    //     console.log(todoValue)
    // }, [todoValue])


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
        else {
            return
        }
    }
    


    return(
        <div className="container">
            <TodoHeader toDo={ doneUndoneCount.doneCount } done={ doneUndoneCount.unDoneCount } />
            <TodoList
                todos={ todoData }
                onDeleted={ deleteItem }
                onToggleImportant={ onToggleImportant }
                onToggleDone={ onToggleDone }
            />
            <AddItemForm addItem={ addItem } todoValue= { todoValue } />
        </div>
    );
};

export default App;