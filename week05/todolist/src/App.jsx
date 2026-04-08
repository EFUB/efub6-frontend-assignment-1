import { useState, useCallback } from 'react'; // 1. useCallback 추가
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    margin: 0;
    padding:0;
    font-family: 'Pretendard', sans-serif;
  }
`;

const todolist = [
  {id: 1, text: '투두리스트', done: false},
  {id: 2, text: '이펍 가기', done: false}
];

function App(){
  const [todos, setTodos] = useState(todolist);

  // [과제 필수] 2. 임시 state 생성 (이것만 추가하세요!)
  const [count, setCount] = useState(0); 

  // todo 추가
  const onCreate = (text) => {
    const newTodo = {
      id: todos.length >0 ? Math.max(...todos.map(t => t.id)) +1 : 1 ,
      text,
      done: false
    };
    setTodos([...todos, newTodo]);
  };

  // todo 삭제
  // [과제 필수] 3. onRemove 함수만 useCallback으로 감싸기 (예시로 하나만!)
  const onRemove = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []); // 의존성 배열을 비워둠

  // todo 완료 토글
  const onToggle = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <>
      <GlobalStyle />
      {/* 테스트 버튼 추가 (이것만 추가하세요!) */}
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <p>임시 State: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>테스트 버튼</button>
      </div>

      <TodoTemplate>
        <TodoHead todos={todos}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        <TodoCreate onCreate={onCreate}/>
      </TodoTemplate>
    </>
  );
}

export default App;