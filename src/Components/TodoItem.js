import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return(
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${props.completado && 'Icon-check--active'}`}>√</span>
            <p className={`TodoItem-p ${props.completado && 'TodoItem-p--complete'}`}>{props.texto}</p>
            <span className='Icon Icon-delete'>X</span>
        </li>
    );
}

export {TodoItem}