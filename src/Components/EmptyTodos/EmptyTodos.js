import React from 'react';
import './EmptyTodos.css'
import logoReact from '../../Images/logo512.png'

function EmptyTodos(){
    return(
        <div className='EmptyTodos'>
            <img src={logoReact} />
            <p>No tienes ningún ToDo. Crea uno nuevo clickando el botón inferior.</p>
        </div>
    );
}

export {EmptyTodos};