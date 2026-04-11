import React, { useState, useEffect, useCallback, useMemo } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    try {
      const saved = localStorage.getItem("todos");
      if (saved) setTodos(JSON.parse(saved));
    } catch (error) {
      console.error("Fail", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  const editTodo = useCallback((id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  }, []);

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos],
  );

  return (
    <div className="app">
      <h1>Todo</h1>
    
      <p>
        완료: {completedCount} / {todos.length}
      </p>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
