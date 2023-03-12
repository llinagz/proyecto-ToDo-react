import React from 'react';
import CatDancing from '../../Images/cat-dance.gif'
import './TodosLoading.css'

function TodosLoading(){
    return(
        <div className="container">
            <p>¡Estamos cargando tus ToDo!</p>
            <img src={CatDancing} alt="cat dancing"/>
        </div>
    )
}

export {TodosLoading};