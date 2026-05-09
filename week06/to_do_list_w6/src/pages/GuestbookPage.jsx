import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GuestbookPage = () => {
  // 로컬 스토리지에서 데이터 불러오기
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('guestbook');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');

  // 데이터가 바뀔 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('guestbook', JSON.stringify(messages));
  }, [messages]);

  // 방명록 등록 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname || !content) return;

    const newMessage = {
      id: Date.now(), //겹치지 않는 고유 번호 만들기 위함
      nickname,
      content,
      date: new Date().toLocaleString(),
    };

    setMessages([newMessage, ...messages]);
    setNickname('');
    setContent('');
  };

  // 방명록 삭제 함수
  const onRemove = (id) => {
    if (window.confirm("정말 이 방명록을 삭제하시겠습니까?")) {
      setMessages(messages.filter((msg) => msg.id !== id));
    }
  };

  return (
    <Container>
      <h1>방명록 💬</h1>
      <Form onSubmit={handleSubmit}>
        <Input 
          value={nickname} 
          onChange={(e) => setNickname(e.target.value)} 
          placeholder="닉네임" 
        />
        <TextArea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          placeholder="방명록을 작성해주세요!" 
        />
        <SubmitButton type="submit">등록하기</SubmitButton>
      </Form>

      <MessageList>
        {messages.map((msg) => (
          <MessageCard key={msg.id}>
            <div className="info">
              <div className="user-info">
                <strong>{msg.nickname}</strong>
                <span>{msg.date}</span>
              </div>
              {/* 삭제 버튼 추가 */}
              <DeleteButton onClick={() => onRemove(msg.id)}>삭제</DeleteButton>
            </div>
            <p>{msg.content}</p>
          </MessageCard>
        ))}
      </MessageList>
    </Container>
  );
};

// --- 스타일링 (styled-components) ---

const Container = styled.div`
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  &:focus { border-color: #ffafbd; }
`;

const TextArea = styled.textarea`
  padding: 12px;
  height: 80px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
  outline: none;
  &:focus { border-color: #ffafbd; }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #ffafbd;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
  &:hover { background-color: #62caabec; }
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MessageCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  .info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
    
    .user-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
      strong { font-size: 1rem; color: #333; }
      span { font-size: 0.8rem; color: #aaa; }
    }
  }
  p {
    margin: 0;
    line-height: 1.5;
    color: #444;
    white-space: pre-wrap; /* 줄바꿈 유지 */
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff8787;
  font-size: 0.85rem;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: 0.2s;
  &:hover {
    background-color: #fff5f5;
    color: #ff0000;
  }
`;

export default GuestbookPage;