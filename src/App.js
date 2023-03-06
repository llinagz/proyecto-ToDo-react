import React from "react";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButtom";
//import './App.css';

const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Practicando con React', completed: false},
  {text: 'Escuchar post-rock', completed: false},
  {text: 'Ir a la compra', completed: false}
]

function App() {
  return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(
          <TodoItem key={todo.text} texto={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;