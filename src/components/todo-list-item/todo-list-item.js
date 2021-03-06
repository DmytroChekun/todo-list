import React, { useState } from 'react';
import './todo-list-item.scss';

// export default class TodoListItem extends Component {
    
//     constructor() {
//         super();

//         this.onLabelClick = () => {
//             console.log(`Done: ${this.props.label}`)
//         }
//     }
//     render() {

//         const {label, important = false} = this.props;

//         const style = {
//             color: important ? 'rgb(182, 17, 50)' : 'black'
//         };

//         return (
//             <div className="todo-list__item-content">
//                 <span className="todo-list__item-label"
//                     style={style}
//                     onClick= { this.onLabelClick }>
//                         { label }
//                 </span>
//                 <span className="todo-list__item-btns">
//                     <button className="todo-list__item-btn delete"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0639 15.1112H3.93946C3.76844 15.1072 3.59988 15.0695 3.44343 15.0003C3.28698 14.9311 3.14569 14.8317 3.02765 14.7079C2.90961 14.5841 2.81712 14.4382 2.75547 14.2786C2.69382 14.1191 2.66421 13.9489 2.66835 13.7779V4.99121H3.55724V13.7779C3.553 13.8322 3.55953 13.8868 3.57647 13.9386C3.59341 13.9904 3.62041 14.0383 3.65593 14.0796C3.69145 14.1209 3.73479 14.1548 3.78345 14.1793C3.83211 14.2037 3.88513 14.2184 3.93946 14.2223H12.0639C12.1182 14.2184 12.1713 14.2037 12.2199 14.1793C12.2686 14.1548 12.3119 14.1209 12.3474 14.0796C12.383 14.0383 12.41 13.9904 12.4269 13.9386C12.4438 13.8868 12.4504 13.8322 12.4461 13.7779V4.99121H13.335V13.7779C13.3392 13.9489 13.3095 14.1191 13.2479 14.2786C13.1862 14.4382 13.0938 14.5841 12.9757 14.7079C12.8577 14.8317 12.7164 14.9311 12.5599 15.0003C12.4035 15.0695 12.2349 15.1072 12.0639 15.1112Z" fill="#868686"></path><path d="M13.6796 4.00022H2.22179C2.10391 4.00022 1.99087 3.95339 1.90752 3.87004C1.82417 3.78669 1.77734 3.67365 1.77734 3.55577C1.77734 3.4379 1.82417 3.32485 1.90752 3.2415C1.99087 3.15815 2.10391 3.11133 2.22179 3.11133H13.6796C13.7974 3.11133 13.9105 3.15815 13.9938 3.2415C14.0772 3.32485 14.124 3.4379 14.124 3.55577C14.124 3.67365 14.0772 3.78669 13.9938 3.87004C13.9105 3.95339 13.7974 4.00022 13.6796 4.00022Z" fill="#868686"></path><path d="M9.33203 5.77734H10.2209V12.444H9.33203V5.77734Z" fill="#868686"></path><path d="M5.77734 5.77734H6.66623V12.444H5.77734V5.77734Z" fill="#868686"></path><path d="M10.2218 2.60423H9.37735V1.77756H6.62179V2.60423H5.77734V1.77756C5.77706 1.54931 5.86458 1.32971 6.02179 1.16423C6.17899 0.998749 6.39383 0.900084 6.62179 0.888672H9.37735C9.60531 0.900084 9.82014 0.998749 9.97735 1.16423C10.1345 1.32971 10.2221 1.54931 10.2218 1.77756V2.60423Z" fill="#868686"></path></svg></button>
//                     <button className="todo-list__item-btn important">!</button>
//                 </span>
//             </div>
//         )
//     }
// }


const TodoListItem = function ({label, onDeleted, onToggleImportant, onToggleDone, important, done}) {
    // const [done, setDone] = useState(false);
    // const [importantState, setImportantState] = useState(false);

    // importantState ? important = true : important = false;


    
    // const style = {
    //     color: important ? 'rgb(0, 78, 0)' : 'black',
    //     fontWeight: important ? 600 : 400
    // };
    // `todo-list__item-content ${
    let itemContentClass = '';
    if (important && done) {
        itemContentClass = 'todo-list__item-content done important';
    }else if (important && !done) {
        itemContentClass = 'todo-list__item-content important';
    }else if (!important && done) {
        itemContentClass = 'todo-list__item-content done';
    }else {
        itemContentClass = 'todo-list__item-content';
    }

    
    // done ? itemContentClass += ' done' : itemContentClass +='';
    // important ? itemContentClass += ' important' : itemContentClass +='';

    return (
        <div className={ itemContentClass }>
            <span className= "todo-list__item-label" onClick={ onToggleDone } >{ label }</span>
            <span className="todo-list__item-btns">
                <button
                    className="todo-list__item-btn delete"
                    onClick={ onDeleted }
                    
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0639 15.1112H3.93946C3.76844 15.1072 3.59988 15.0695 3.44343 15.0003C3.28698 14.9311 3.14569 14.8317 3.02765 14.7079C2.90961 14.5841 2.81712 14.4382 2.75547 14.2786C2.69382 14.1191 2.66421 13.9489 2.66835 13.7779V4.99121H3.55724V13.7779C3.553 13.8322 3.55953 13.8868 3.57647 13.9386C3.59341 13.9904 3.62041 14.0383 3.65593 14.0796C3.69145 14.1209 3.73479 14.1548 3.78345 14.1793C3.83211 14.2037 3.88513 14.2184 3.93946 14.2223H12.0639C12.1182 14.2184 12.1713 14.2037 12.2199 14.1793C12.2686 14.1548 12.3119 14.1209 12.3474 14.0796C12.383 14.0383 12.41 13.9904 12.4269 13.9386C12.4438 13.8868 12.4504 13.8322 12.4461 13.7779V4.99121H13.335V13.7779C13.3392 13.9489 13.3095 14.1191 13.2479 14.2786C13.1862 14.4382 13.0938 14.5841 12.9757 14.7079C12.8577 14.8317 12.7164 14.9311 12.5599 15.0003C12.4035 15.0695 12.2349 15.1072 12.0639 15.1112Z" fill="#868686"></path><path d="M13.6796 4.00022H2.22179C2.10391 4.00022 1.99087 3.95339 1.90752 3.87004C1.82417 3.78669 1.77734 3.67365 1.77734 3.55577C1.77734 3.4379 1.82417 3.32485 1.90752 3.2415C1.99087 3.15815 2.10391 3.11133 2.22179 3.11133H13.6796C13.7974 3.11133 13.9105 3.15815 13.9938 3.2415C14.0772 3.32485 14.124 3.4379 14.124 3.55577C14.124 3.67365 14.0772 3.78669 13.9938 3.87004C13.9105 3.95339 13.7974 4.00022 13.6796 4.00022Z" fill="#868686"></path><path d="M9.33203 5.77734H10.2209V12.444H9.33203V5.77734Z" fill="#868686"></path><path d="M5.77734 5.77734H6.66623V12.444H5.77734V5.77734Z" fill="#868686"></path><path d="M10.2218 2.60423H9.37735V1.77756H6.62179V2.60423H5.77734V1.77756C5.77706 1.54931 5.86458 1.32971 6.02179 1.16423C6.17899 0.998749 6.39383 0.900084 6.62179 0.888672H9.37735C9.60531 0.900084 9.82014 0.998749 9.97735 1.16423C10.1345 1.32971 10.2221 1.54931 10.2218 1.77756V2.60423Z" fill="#868686"></path></svg>
                </button>
                <button
                    className="todo-list__item-btn important"
                    onClick={ onToggleImportant }>!</button>
            </span>
        </div>
    )

}

export default TodoListItem;