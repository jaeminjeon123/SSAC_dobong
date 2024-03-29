import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="menu">
        <button onClick={() => navigate("/")} className="menu-item">홈으로</button>
        <button onClick={() => navigate("/Student")} className="menu-item">학생</button>
        <button onClick={() => navigate("/Codingon")} className="menu-item">코딩온</button>
        <button onClick={() => navigate("/Query")} className="menu-item">Query</button>
        
      </div>
    </header>
  );
}
