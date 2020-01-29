import React from 'react'

export default function TodoList({ todos, deleter }) {
  const todoList = todos.length ? (
    todos.map(todo =>{
         return(
         <div key={todo.id}>
         <span onClick={() => deleter(todo.id)}>{todo.content}</span>
         </div>
    );
     })
  ) : (
    <p>No todos left</p>
  );
  return <div>{todoList}</div>;
}
