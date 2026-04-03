import { useState,useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #FFD6E0;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
  }
`;

const TODO_LIST = [
  { id: 1, text: "투두리스트", done: false },
  { id: 2, text: "이펍 가기", done: false }
];


function App() {
  // 초기값 자체를 로컬스토리지에서 가져오기
  const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem('todos');
  return saved ? JSON.parse(saved) : TODO_LIST; 
});

  //todo 추가
  const onCreate = (text) => {
    const newTodo = {
      id: todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1, //t.id -> id만 반환 , Math.max(1,5,3)
      text, //text: text (변수명과 속성명이 같아서 뒤에 생략)
      done: false, //미완료
    };
    setTodos([...todos, newTodo]); //리턴값은 undefined
  };

  // todo 삭제
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); //선택한 투두의 ID만 거르기
  };

  //todo 완료 토글
  const onToggle = (id) => {
    setTodos(
      todos.map(
        (
          todo, // todo 배열 요소 처음부터 끝까지 훑기
        ) => (todo.id === id ? { ...todo, done: !todo.done } : todo),
      ),
    );
  };

  //todo 수정
  const onEdit = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  // 힌트1: 처음 마운트될 때 localStorage에서 데이터 불러오기
  // -localStorage.getItem('todos')로 가져오기
  // -JSON.parse()로 문자열을 배열로 변환
  // -데이터가 있으면 setTodos로 설정

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    savedTodos && setTodos(JSON.parse(savedTodos));
  }, []); //빈 배열 = 마운트 시 1회만 실행

  // 힌트2 : todos가 바뀔 때마다 localStorage에 저장하기
  // -JSON.stringify()로 배열을 문자열로 변환
  // -localStorage.setItem('todos', 변환용문자열)로 저장
  useEffect(() => {
    const stringifyTodos = JSON.stringify(todos);
    localStorage.setItem('todos', stringifyTodos);
  }, [todos]); //todos가 바뀔때마다 실행


  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        {" "}
        {/*전체적인 배경 박스, 레이아웃 잡아주는 틀*/}
        <TodoHead todos={todos} /> {/*상단 영역*/}
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
        />{" "}
        {/*할 일 목록들 나열하는 영역*/}
        <TodoCreate onCreate={onCreate} /> {/*새로운 할 일 입력하는 영역*/}
      </TodoTemplate>
    </>
  );
}

export default App;
