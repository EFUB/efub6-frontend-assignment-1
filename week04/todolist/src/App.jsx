import { useState } from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';




const GlobalStyle = createGlobalStyle`
  body {
    background:  #e9ecef;
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



  // todo 추가
  const onCreate = (text) => {
    const newTodo = {
      id: todos.length >0 ? Math.max(...todos.map(t => t.id)) +1 : 1 ,
      text,
      done: false};
      setTodos([...todos, newTodo]);
  };

  //todo 삭제
  const onRemove = (id) => {
    setTodos(todos.filter(todo => todos.id !== id));
  };


  //todo 완료 토글
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
      <TodoTemplate>
        <TodoHead todos={todos}/>
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
          <TodoCreate onCreate={onCreate}/>
      </TodoTemplate>
    </>
  );
}

export default App;
