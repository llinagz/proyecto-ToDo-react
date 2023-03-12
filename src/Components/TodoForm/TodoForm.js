import React from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './TodoForm.css'

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    return(
        <form onSubmit={onAdd}>
            <label>...</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para la comida"
            />
            <div className='TodoForm-buttonContainer'>
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button-cancel" >
                    Cancelar
                </button>
                <button type="submit" className='TodoForm-button TodoForm-button-add'>
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};