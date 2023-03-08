import React from "react";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButtom";
//import './App.css';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Practicando con React', completed: true},
  {text: 'Escuchar post-rock', completed: false},
  {text: 'Ir a la compra', completed: true}
]

function App() {
  //Estado inicial de TODOs
  const [todos, setTodos] = React.useState(defaultTodos);
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

  //Cuando los usuarios no escriban nada, mostraremos todos los ToDos, pero cuando escriban algo solo mostraremos los que complan esa condicion de busqueda, el filter que hicimos.
  return(
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem key={todo.text} texto={todo.text} completado={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;