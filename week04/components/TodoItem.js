import React, { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>저장</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleTodo(todo.id)}>
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
