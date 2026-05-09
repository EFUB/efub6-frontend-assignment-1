import { useState, useEffect } from "react";
// components 폴더가 한 단계 밖에 있으므로 ../ 를 붙이기
import TodoTemplate from "../components/TodoTemplate";
import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";

const TODO_LIST = [
  { id: 1, text: "투두리스트", done: false },
  { id: 2, text: "이펍 가기", done: false }
];

function TodoPage() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : TODO_LIST; 
  });

  const onCreate = (text) => {
    const newTodo = {
      id: todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const onEdit = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoHead todos={todos} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onEdit={onEdit}
      />
      <TodoCreate onCreate={onCreate} />
    </TodoTemplate>
  );
}

export default TodoPage;