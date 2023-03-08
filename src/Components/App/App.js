import React from "react";
import {AppUI} from './AppUI'
import { useLocalStorage } from "../../Hooks/useLocalStorage";

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Practicando con React', completed: true},
//   {text: 'Escuchar post-rock', completed: false},
//   {text: 'Ir a la compra', completed: true}
// ]

function App() {
  //Estado inicial de TODOs
  //Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  //Filtrar
  const [searchValue, setSearchValue] = React.useState('');
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

  //Cuando los usuarios no escriban nada, mostraremos todos los ToDos, pero cuando escriban algo solo mostraremos los que complan esa condicion de busqueda, el filter que hicimos.
  return(
    <AppUI 
      totalTodos={totalTodos} 
      completedTodos={completedTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;