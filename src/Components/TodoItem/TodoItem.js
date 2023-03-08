import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    // const onComplete = () => {
    //     alert('Ya completaste el Todo: ' + props.texto);
    // }
    // const onDelete = () => {
    //     alert('Borraste el Todo: ' + props.texto);
    // }

    return(
        <li className='TodoItem'>
            <span onClick={props.onComplete} className={`Icon Icon-check ${props.completado && 'Icon-check--active'}`}>√</span>
            <p className={`TodoItem-p ${props.completado && 'TodoItem-p--complete'}`}>{props.texto}</p>
            <span onClick={props.onDelete} className='Icon Icon-delete'>X</span>
        </li>
    );
}

export {TodoItem}