import React, { useState } from 'react';
import styled from 'styled-components';

const InsertForm = styled.form`
  padding: 20px 32px;
  border-top: 1px solid #e9ecef;
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 18px;
  outline: none;
`;

function TodoCreate({ onCreate }) {
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    onCreate(value);
    setValue('');
  };

  return (
    <InsertForm onSubmit={onSubmit}>
      <Input
        placeholder="할 일을 입력 후, Enter를 누르세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InsertForm>
  );
}

export default TodoCreate;