import React from 'react';
import './add-item-form.scss';

const AddItemForm = ( { onItemAdded } ) => {
    return (
        <div className="add-item-form">
            {/* <input className="add-item-input" type="text" placeholder="Type new task here" /> */}
            <button className="add-item-btn" onClick = { () => onItemAdded('Hello World') } >Add New Item</button>
        </div>
    )
}

export default AddItemForm;