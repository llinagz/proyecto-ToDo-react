import React from 'react';
import './TodoItem.css';
import { MdDoneOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

function TodoItem(props) {
    // const onComplete = () => {
    //     alert('Ya completaste el Todo: ' + props.texto);
    // }
    // const onDelete = () => {
    //     alert('Borraste el Todo: ' + props.texto);
    // }

    return(
        <li className='TodoItem'>
            <span onClick={props.onComplete} className={`Icon Icon-check ${props.completado && 'Icon-check--active'}`}><MdDoneOutline /></span>
            <p className={`TodoItem-p ${props.completado && 'TodoItem-p--complete'}`}>{props.texto}</p>
            <span onClick={props.onDelete} className='Icon Icon-delete'><GiCancel /></span>
        </li>
    );
}

export {TodoItem}