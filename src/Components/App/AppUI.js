import React from 'react';
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButtom/CreateTodoButton";

function AppUI({
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
})
{
    return (
        <React.Fragment>
        <TodoCounter total={totalTodos} completed={completedTodos}/>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TodoList>
          {searchedTodos.map(todo =>(
            <TodoItem key={todo.text} texto={todo.text} completado={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/>
          ))}
        </TodoList>
        <CreateTodoButton/>
      </React.Fragment>
    );
}

export {AppUI};