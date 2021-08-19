import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const tags = ['tag1', 'tag2', 'tag3']
    const formCount = () => {
        return count === 0 ? 'Null' : count
    }
    const getBasicClasses = () => {
        let classes = 'badge m-2 bg-'
        classes += count === 0 ? 'danger' : 'primary'
        return classes
    }

    const renderTags = () => {
        if (tags.length === 0) return 'Tags not exist'
        return (<ul>
            {tags.map(tag =>
                <li key={tag}>{tag}</li>)
            }
        </ul>)
    }

    const handleIncrement = productId => {
        setCount(count + 1)
    }

    const handleDecrement = productId => {
        setCount(count - 1)
    }

    return (
        <>
            {renderTags()}
            <h1 className={getBasicClasses()}>Counter: {formCount()} </h1>
            <button onClick={() => (handleIncrement({id: 1}))} className={"btm btn-sm btn-success m-3"}>Button Increment</button>
            <button
                disabled={ count === 0 ? true : false}
                onClick={() => (handleDecrement({id: 1}))}
                className={count === 0 ? "btm btn-sm btn-secondary" : "btm btn-sm btn-info"}
            >Button Decrement</button>
        </>


    )
}

export default Counter