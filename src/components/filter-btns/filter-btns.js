import React, { Component } from 'react';
import './filter-btns.scss';

export default class FilterBtns extends Component {

    render() {

        // const {value, active, id} = this.props;

        const buttonsValue = [
            { value: 'All', active: true, id: 'all'},
            { value: 'Active', active: false, id: 'active' },
            { value: 'Done', active: false, id: 'done' }
        ];
        
        

        const Button = ( { value, active, id } ) => {
            return (
                <button className= {active ? 'filter-btn active' : 'filter-btn'} key= {id}>{value}</button>
            )
        };
    
        const elements = buttonsValue.map((item) => {
            return <Button { ... item} />
        })
    
    
        return (
            <div className="filter-btns">
                { elements }
            </div>
        )

    }

}


// const FilterBtns = () => {

//     const buttonsValue = [
//         { value: 'All', active: true, id: 'all'},
//         { value: 'Active', active: false, id: 'active' },
//         { value: 'Done', active: false, id: 'done' }
//     ];

//     const Button = ( {value, active, id} ) => {
//         return (
//             <button className= {active ? 'filter-btn active' : 'filter-btn'} key= {id}>{value}</button>
//         )
//     };

//     const elements = buttonsValue.map((item) => {
//         return <Button { ... item} />
//     })


//     return (
//         <div className="filter-btns">
//             { elements }
//         </div>
//     )
// }

// export default FilterBtns;