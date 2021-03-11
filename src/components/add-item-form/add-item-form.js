import React from 'react';
import './add-item-form.scss';

const AddItemForm = ( { onItemAdded, todoValue, setTodoValue, addItem } ) => {


    const onKeyPressAddItem = event => {   
        if (event.key === "Enter") {
            addItem(todoValue);
        }
    }

    const onLabelChange = event => {
        todoValue = event.target.value;
    }




    return (
        <div className="add-item-form">
            <input 
                className="add-item-input"
                type="text"
                placeholder="Type new task here"
                onKeyPress = { onKeyPressAddItem }
                onChange = { onLabelChange }
             />
            <button 
                className="add-item-btn"
                onClick = { () => addItem(todoValue) }
            >
                Add New Item
            </button>
        </div>
    )
}

export default AddItemForm;