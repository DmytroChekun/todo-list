import React from 'react';

import './reset.scss';
import './app.scss';
import TodoHeader from '../todo-header/';
import TodoList from '../todo-list/';



const App = () => {
    // const isLoggedIn = true;
    // const loginBox = <span>Login please</span>
    // const welcomeBox = <span>Welcome Back</span>

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Drink Coffee', important: false, id: 3 }
    ];
    const ToDo = 1;
    const done = 3;

    return(
    <div className="container">
        {/* { isLoggedIn ? welcomeBox : loginBox } */}
        <TodoHeader toDo={ToDo} done={done} />
        <TodoList todos={todoData} />
    </div>
    );
};

export default App;