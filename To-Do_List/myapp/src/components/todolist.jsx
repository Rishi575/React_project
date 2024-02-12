import React, { useState, useEffect } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [indexToRemove, setIndexToRemove] = useState(-1);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };
  
  const removeTodo = (index) => {
    setIndexToRemove(index);
  };
  useEffect(() => {
    if (indexToRemove !== -1) {
      const newTodos = [...todos];
      newTodos.splice(indexToRemove, 1);
      setTodos(newTodos);
      setIndexToRemove(-1);
    }
  }, [indexToRemove]);
  
  return (
    <div>
      <h1>Todo List</h1>
      <form >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
      {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;