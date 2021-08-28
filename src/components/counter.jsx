import React from "react";

const Counter = ({value, name, id, onDecrement, onDelete, onIncrement}) => {
    const formCount = () => {
        return value === 0 ? 'Null' : value
    }
    const getBasicClasses = () => {
        let classes = 'badge m-2 bg-'
        classes += value === 0 ? 'danger' : 'primary'
        return classes
    }

    return (
        <div>
            <h4>{name}</h4>
            <h1 className={getBasicClasses()}>Counter: {formCount()} </h1>
            <button onClick={() => (onIncrement(id))} className={"btm btn-sm btn-success m-3"}>Button Increment</button>
            <button
                disabled={ value === 0}
                onClick={() => (onDecrement(id))}
                className={value === 0 ? "btm btn-sm btn-secondary" : "btm btn-sm btn-info"}
            >Button Decrement</button>
            <button className="btn btn-s btn-danger m-2" onClick={() => onDelete(id)}>Delete</button>
        </div>


    )
}

export default Counter