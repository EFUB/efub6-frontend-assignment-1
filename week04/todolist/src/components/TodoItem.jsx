import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props => props.done && css`
    border: 1px solid #38d9a9;
    color: #38d9a9;
  `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  cursor: pointer;
  ${props => props.done && css`
    color: #ced4da;
    text-decoration: line-through;
  `}
`;

const EditInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 18px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  outline: none;
`;

function TodoItem({ id, done, text, onRemove, onToggle, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(text);

  useEffect(() => {
    setValue(text);
  }, [text]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    onUpdate(id, value);
    setEditing(false);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => onToggle(id)}>
        {done && <MdDone />}
      </CheckCircle>

      {editing ? (
        <form onSubmit={onSubmit} style={{ flex: 1 }}>
          <EditInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => setEditing(false)}
            autoFocus
          />
        </form>
      ) : (
        <Text done={done} onDoubleClick={() => setEditing(true)}>
          {text}
        </Text>
      )}

      <Remove onClick={() => onRemove(id)}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;