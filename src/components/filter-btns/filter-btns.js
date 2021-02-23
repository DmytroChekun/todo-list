import React from 'react';
import './filter-btns.scss';

const FilterBtns = () => {

    const buttonsValue = [
        { value: 'All', active: true, id: 'all' },
        { value: 'Active', active: false, id: 'active' },
        { value: 'Done', active: false, id: 'done' }
    ];


    const Button = ( {value, active, id} ) => {

        const onButtonClick = () => {
            console.log(`Done: ${value}`)
        };

        return (
            <button className= {active ? 'filter-btn active' : 'filter-btn'}
                key= {id}
                onClick = { onButtonClick }>
                {value}
            </button>
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

export default FilterBtns;