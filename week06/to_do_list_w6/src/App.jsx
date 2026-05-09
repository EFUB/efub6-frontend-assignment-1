import { Routes, Route, NavLink } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import TodoPage from "./pages/TodoPage";
import GuestbookPage from "./pages/GuestbookPage";

const GlobalStyle = createGlobalStyle`
  body {
    background: #FFD6E0;
    margin: 0;
    font-family: 'Pretendard', sans-serif;
  }
  nav {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 25px;
  }
  /* 기본 링크를 버튼 모양으로 */
  nav a {
    text-decoration: none;
    padding: 8px 18px;
    border-radius: 20px;
    background: white;
    color: #ff87a0;
    font-weight: bold;
    font-size: 14px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  /* 활성화된 버튼 스타일 */
  nav a.active {
    background: #ff87a0;
    color: white;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <nav>
        <NavLink to="/">투두리스트</NavLink>
        <NavLink to="/guestbook">방명록</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/guestbook" element={<GuestbookPage />} />
      </Routes>
    </>
  );
}

export default App;