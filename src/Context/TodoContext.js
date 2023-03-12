import React from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

    //Estado inicial de TODOs
    //Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial).
    const {
        //Renombramos con los dos puntos, lo que antes se llama item, ahora se llama todos... etc.
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    //Filtrar
    const [searchValue, setSearchValue] = React.useState('');
    //Estado para la modal
    const [openModal, setOpenModal] = React.useState(false);
    //Cantidad de TODOs completados. ! es falso, !! falso es verdadero
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    //Cantidad total de TODOs
    const totalTodos = todos.length;

    //Filtrar
    let searchedTodos = [];
    //En caso de que esto no es cierto, nuestros Todos se mostraran completos
    if(!searchValue.length >= 1){
        searchedTodos = todos;
    }else{
        searchedTodos = todos.filter(todo => {
        //Convertimos todo a minusculas, buscamos cuales de estos ToDos incluyen el texto que escribimos en nuestro cuadro de busqueda
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        })
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        })
        saveTodos(newTodos);
    }

    //Re-render de nuestros componentes que recibiran la nueva lista de todos que el unico cambio que tienen es que el todo que tenga el mismo texto ahora tenga la propiedad completed como true
    const completeTodo = (text) => {
        //Buscamos el index, la posicion del array del ToDo para luego cambiar lo que tengamos que cambiar
        const todoIndex = todos.findIndex(todo => todo.text === text);
        //Inyectamos todos los ToDos que teníamos antes en un nuevo array
        const newTodos = [...todos];
        //Ahora entramos a nuestra lista de todos y vamos a poder hacer lo que queramos
        newTodos[todoIndex].completed = true;
        // todos[todoIndex] = {
        //   text: todos[todoIndex].text,
        //   completed: true,
        // }
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        //Buscamos el index, la posicion del array del ToDo para luego cambiar lo que tengamos que cambiar
        const todoIndex = todos.findIndex(todo => todo.text === text);
        //Inyectamos todos los ToDos que teníamos antes en un nuevo array
        const newTodos = [...todos];
        //Enviamos dos argumentos, el index (la posicion donde vamos a empezar a cortar) cuanto queremos cortar
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return(
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
        {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};