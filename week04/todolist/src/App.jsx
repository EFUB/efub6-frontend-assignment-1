import React, { useState, useRef, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
  }
`;

const TODO_LIST = [
  { id: 1, text: '투두리스트', done: false },
  { id: 2, text: '이펍 가기', done: false },
];

function App() {
  const [todos, setTodos] = useState(TODO_LIST);
  const nextId = useRef(3);

  const onCreate = (text) => {
    const todo = {
      id: nextId.current,
      text: text,
      done: false,
    };

    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const onUpdate = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      const parsedTodos = JSON.parse(saved);
      setTodos(parsedTodos);

      if (parsedTodos.length > 0) {
        const maxId = Math.max(...parsedTodos.map((todo) => todo.id));
        nextId.current = maxId + 1;
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
        <TodoCreate onCreate={onCreate} />
      </TodoTemplate>
    </>
  );
}

export default App;