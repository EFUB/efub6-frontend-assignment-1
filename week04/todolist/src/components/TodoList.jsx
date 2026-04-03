import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  overflow-y: auto;
`;

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <TodoListBlock>
      {/* todos 배열을 map으로 돌면서 각각의 todo를 TodoItem으로 변환합니다 */}
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;