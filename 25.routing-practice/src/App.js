import {Link, Routes,Route} from "react-router-dom";
import styled from "styled-components"
import "./styles/style.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Student from "./pages/Student";
import Codingon from "./pages/Codingon";
import Query from "./pages/Query";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Student" element={<Student />} />
      <Route path="/Codingon" element={<Codingon />} />
      <Route path="/Student" element={<Student />} />
      <Route path="/Query" element={<Query />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
