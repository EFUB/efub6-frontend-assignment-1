import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;