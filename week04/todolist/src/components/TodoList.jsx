import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  overflow-y: auto;
`;

function TodoList({ todos, onRemove, onToggle, onUpdate }) {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
          onRemove={onRemove}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </TodoListBlock>
  );
}

export default React.memo(TodoList);