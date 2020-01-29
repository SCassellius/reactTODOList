import React, { useState} from 'react';
import TodoList from "./todo"
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, content: 'Meet Masao for Udon'},
    {id: 2, content: 'Fix up these horrible React notes'},
  ]);
  function deleteTodo(id) {
       setTodos(todos => todos.filter(todo => todo.id !== id));
 }
  return (
    <div className="App">
      <h1>Things To Do</h1>
      <TodoList todos={todos} deleter={deleteTodo} />
    </div>
  );
}
