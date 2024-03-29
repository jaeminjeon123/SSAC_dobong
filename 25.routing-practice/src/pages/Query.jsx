import { useNavigate } from "react-router-dom";

export default function Query() {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옴

    return (
        <div className="Query">
               <h5>학생 이름은 <span className="highlight">codingon</span>입니다.</h5>
               <h5>학생 이름은 <span className="high">codingon</span>입니다.</h5>
            <button onClick={() => navigate(-1)}>뒤로 가기</button>
        </div>
    );
}
