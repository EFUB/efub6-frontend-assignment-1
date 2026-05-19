import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  margin: 80px auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

// children을 props로 받아서 렌더링
function TodoTemplate({ children }) {
  return (
    <TodoTemplateBlock>
      {children}
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;