import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';

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
`; // opacity -> 투명도 0으로 설정에서 화면에 안 보이게 하기

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
    border: 1px solid #F06595;
    color: #F06595;
  `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props => props.done && css`
    color: #ced4da;
    text-decoration: line-through;
  `}
`;

const EditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #6BCBFF;
  }
`;


function TodoItem({ id, done, text, onRemove, onToggle, onEdit }) {

  //수정 버튼 클릭 시 실행될 로직
  const handleEdit = () => {
    const newText = prompt("할 일을 수정하세요", text); //기존 text를 기본값으로 보여줌
    if (newText && newText.trim() !== "") {
      onEdit(id, newText); //부모 App.js의 onEdit 실행
    }
  };

  return (
    <TodoItemBlock>
      {/* 힌트 1: CheckCircle 클릭 시 onToggle(id) 호출, done 상태 전달 */}
      <CheckCircle done={done} onClick={() => onToggle(id)}>
        {done && <MdDone />}
      </CheckCircle>

      {/* 힌트 2: Text에 done 상태 전달하고 text 표시 */}
      <Text done={done}>{text}</Text>

      {/* 수정 버튼 추가 (Remove와 비슷하게 만듦) */}
      <EditButton onClick={handleEdit}>
        <MdEdit />
      </EditButton>

      {/* 힌트 3: Remove 클릭 시 onRemove(id) 호출 */}
      <Remove onClick={() => onRemove(id)}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;