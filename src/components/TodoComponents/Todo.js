import React from 'react';

const Item = props => {
    return (
        <div className={`item${props.item.completed ? ' completed' : ''}`}
            onClick={() => props.toggleTasks(props.item.id)}
            >
            <p>{props.item.task}</p>
            <button>Done</button>
        </div>
    )
}

export default Item;