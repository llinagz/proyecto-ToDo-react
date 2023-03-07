import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return(
        <li className='TodoItem'>
            <span className={`Icon Icon-check`}>C</span>
            <p>{props.texto}</p>
            <span className='Icon Icon-delete'>X</span>
        </li>
    );
}

export {TodoItem}