import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
